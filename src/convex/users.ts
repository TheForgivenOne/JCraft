import { mutation, query } from './_generated/server';
import { v } from 'convex/values';

// Query to get user by Clerk user ID
export const getByClerkUserId = query({
  args: {
    clerkUserId: v.string(),
  },
  handler: async (ctx, args) => {
    const users = await ctx.db.query('users')
      .withIndex('by_clerk_user_id', (q) => q.eq('clerkUserId', args.clerkUserId))
      .collect();
    
    return users[0] || null;
  },
});

// Mutation to create a new user
export const createUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    clerkUserId: v.string(),
    role: v.union(v.literal('admin'), v.literal('artisan'), v.literal('customer')),
  },
  handler: async (ctx, args) => {
    // Check if user already exists
    const existingUser = await ctx.db.query('users')
      .withIndex('by_clerk_user_id', (q) => q.eq('clerkUserId', args.clerkUserId))
      .collect();
    
    if (existingUser.length > 0) {
      return existingUser[0]._id;
    }
    
    return await ctx.db.insert('users', args);
  },
});

// Mutation to update a user
export const updateUser = mutation({
  args: {
    id: v.id('users'),
    name: v.optional(v.string()),
    email: v.optional(v.string()),
    role: v.optional(v.union(v.literal('admin'), v.literal('artisan'), v.literal('customer'))),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    return await ctx.db.patch(id, updates);
  },
});