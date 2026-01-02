import { query, mutation } from './_generated/server';
import { v } from 'convex/values';
import { Id } from './_generated/dataModel';

// Query to get all wishlist items for a specific user
export const getByUser = query({
  args: {},
  handler: async ctx => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error('User not authenticated');
    }

    // Find the user in our database
    const user = await ctx.db
      .query('users')
      .withIndex('by_clerk_id', q => q.eq('clerkId', identity.subject))
      .first();

    if (!user) {
      throw new Error('User not found in database');
    }

    // Get all wishlist items for this user
    const wishlistItems = await ctx.db
      .query('wishlists')
      .withIndex('by_user', q => q.eq('userId', user._id))
      .order('desc')
      .collect();

    // Get the product details for each wishlist item
    const wishlistWithProducts = await Promise.all(
      wishlistItems.map(async item => {
        const product = await ctx.db.get(item.productId);
        return {
          ...item,
          product: product,
        };
      })
    );

    return wishlistWithProducts;
  },
});

// Query to check if a product is in the user's wishlist
export const isInWishlist = query({
  args: {
    productId: v.id('products'),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      return false;
    }

    // Find the user in our database
    const user = await ctx.db
      .query('users')
      .withIndex('by_clerk_id', q => q.eq('clerkId', identity.subject))
      .first();

    if (!user) {
      return false;
    }

    // Check if the product is in the user's wishlist
    const wishlistItem = await ctx.db
      .query('wishlists')
      .withIndex('by_user', q => q.eq('userId', user._id))
      .filter(q => q.eq(q.field('productId'), args.productId))
      .first();

    return !!wishlistItem;
  },
});

// Mutation to add a product to the user's wishlist
export const addToWishlist = mutation({
  args: {
    productId: v.id('products'),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error('User not authenticated');
    }

    // Find the user in our database
    const user = await ctx.db
      .query('users')
      .withIndex('by_clerk_id', q => q.eq('clerkId', identity.subject))
      .first();

    if (!user) {
      throw new Error('User not found in database');
    }

    // Check if the product is already in the wishlist
    const existingWishlistItem = await ctx.db
      .query('wishlists')
      .withIndex('by_user', q => q.eq('userId', user._id))
      .filter(q => q.eq(q.field('productId'), args.productId))
      .first();

    if (existingWishlistItem) {
      throw new Error('Product is already in your wishlist');
    }

    // Add the product to the wishlist
    return await ctx.db.insert('wishlists', {
      userId: user._id,
      productId: args.productId,
      createdAt: Date.now(),
    });
  },
});

// Mutation to remove a product from the user's wishlist
export const removeFromWishlist = mutation({
  args: {
    productId: v.id('products'),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error('User not authenticated');
    }

    // Find the user in our database
    const user = await ctx.db
      .query('users')
      .withIndex('by_clerk_id', q => q.eq('clerkId', identity.subject))
      .first();

    if (!user) {
      throw new Error('User not found in database');
    }

    // Find the wishlist item to remove
    const wishlistItem = await ctx.db
      .query('wishlists')
      .withIndex('by_user', q => q.eq('userId', user._id))
      .filter(q => q.eq(q.field('productId'), args.productId))
      .first();

    if (!wishlistItem) {
      throw new Error('Product is not in your wishlist');
    }

    // Remove the wishlist item
    return await ctx.db.delete(wishlistItem._id);
  },
});
