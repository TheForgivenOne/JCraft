import { query, mutation } from './_generated/server';
import { v } from 'convex/values';
import { Id } from './_generated/dataModel';

// Query to get all products
export const getAll = query({
  args: {},
  handler: async ctx => {
    return await ctx.db.query('products').collect();
  },
});

// Query to get a specific product by ID
export const getById = query({
  args: {
    productId: v.id('products'),
  },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.productId);
  },
});

// Query to get products by category
export const getByCategory = query({
  args: {
    category: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query('products')
      .filter(q => q.eq(q.field('category'), args.category))
      .collect();
  },
});

// Mutation to create a new product
export const create = mutation({
  args: {
    name: v.string(),
    description: v.string(),
    price: v.number(), // Price in cents
    category: v.string(),
    inventory: v.number(),
    image: v.optional(v.string()),
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

    // Only allow admin users to create products (in a real app, you might have different logic)
    // For now, we'll allow any authenticated user to create products
    return await ctx.db.insert('products', {
      name: args.name,
      description: args.description,
      price: args.price,
      category: args.category,
      inventory: args.inventory,
      image: args.image,
      createdAt: Date.now(),
    });
  },
});

// Mutation to update a product
export const update = mutation({
  args: {
    id: v.id('products'),
    name: v.optional(v.string()),
    description: v.optional(v.string()),
    price: v.optional(v.number()),
    category: v.optional(v.string()),
    inventory: v.optional(v.number()),
    image: v.optional(v.string()),
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

    // Get the product to update
    const product = await ctx.db.get(args.id);
    if (!product) {
      throw new Error('Product not found');
    }

    // Prepare the updates
    const updates: any = {};
    if (args.name !== undefined) updates.name = args.name;
    if (args.description !== undefined) updates.description = args.description;
    if (args.price !== undefined) updates.price = args.price;
    if (args.category !== undefined) updates.category = args.category;
    if (args.inventory !== undefined) updates.inventory = args.inventory;
    if (args.image !== undefined) updates.image = args.image;

    return await ctx.db.patch(args.id, updates);
  },
});

// Mutation to delete a product
export const remove = mutation({
  args: {
    id: v.id('products'),
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

    // Get the product to delete
    const product = await ctx.db.get(args.id);
    if (!product) {
      throw new Error('Product not found');
    }

    return await ctx.db.delete(args.id);
  },
});
