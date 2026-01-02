import { query, mutation } from './_generated/server';
import { v } from 'convex/values';
import { Id } from './_generated/dataModel';

// Query to get all reviews for a specific product
export const getByProduct = query({
  args: {
    productId: v.id('products'),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query('reviews')
      .withIndex('by_product', q => q.eq('productId', args.productId))
      .order('desc')
      .collect();
  },
});

// Query to get all reviews by a specific user
export const getByUser = query({
  args: {
    userId: v.id('users'),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query('reviews')
      .withIndex('by_user', q => q.eq('userId', args.userId))
      .order('desc')
      .collect();
  },
});

// Mutation to create a new review
export const create = mutation({
  args: {
    productId: v.id('products'),
    rating: v.number(), // 1-5 rating
    comment: v.string(),
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

    // Check if user has already reviewed this product
    const existingReview = await ctx.db
      .query('reviews')
      .withIndex('by_user', q => q.eq('userId', user._id))
      .filter(q => q.eq(q.field('productId'), args.productId))
      .first();

    if (existingReview) {
      throw new Error('You have already reviewed this product');
    }

    // Create the review
    return await ctx.db.insert('reviews', {
      userId: user._id,
      productId: args.productId,
      rating: args.rating,
      comment: args.comment,
      createdAt: Date.now(),
    });
  },
});

// Mutation to update an existing review
export const update = mutation({
  args: {
    reviewId: v.id('reviews'),
    rating: v.optional(v.number()), // 1-5 rating
    comment: v.optional(v.string()),
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

    // Get the review to update
    const review = await ctx.db.get(args.reviewId);
    if (!review) {
      throw new Error('Review not found');
    }

    // Check if the review belongs to the current user
    if (review.userId !== user._id) {
      throw new Error('You can only update your own reviews');
    }

    // Prepare the updates
    const updates: any = {};
    if (args.rating !== undefined) updates.rating = args.rating;
    if (args.comment !== undefined) updates.comment = args.comment;

    return await ctx.db.patch(args.reviewId, updates);
  },
});

// Mutation to delete a review
export const remove = mutation({
  args: {
    reviewId: v.id('reviews'),
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

    // Get the review to delete
    const review = await ctx.db.get(args.reviewId);
    if (!review) {
      throw new Error('Review not found');
    }

    // Check if the review belongs to the current user
    if (review.userId !== user._id) {
      throw new Error('You can only delete your own reviews');
    }

    return await ctx.db.delete(args.reviewId);
  },
});
