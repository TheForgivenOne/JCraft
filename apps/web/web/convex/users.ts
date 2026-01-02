import { mutation, query } from './_generated/server';
import { v } from 'convex/values';
import { Id } from './_generated/dataModel';

// Store user in the database when they sign in with Clerk
export const store = mutation({
  args: {},
  handler: async ctx => {
    // Get the user identity from the authentication context
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error('User not authenticated');
    }

    // Check if user already exists
    const existingUser = await ctx.db
      .query('users')
      .withIndex('by_clerk_id', q => q.eq('clerkId', identity.subject))
      .first();

    if (existingUser) {
      return existingUser._id;
    }

    // Create new user
    const userId = await ctx.db.insert('users', {
      name: identity.name || '',
      email: identity.email!,
      clerkId: identity.subject,
      createdAt: Date.now(), // Using number for timestamp
    });

    return userId;
  },
});

// Get current user
export const getCurrentUser = mutation({
  args: {},
  handler: async ctx => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error('User not authenticated');
    }

    const user = await ctx.db
      .query('users')
      .withIndex('by_clerk_id', q => q.eq('clerkId', identity.subject))
      .first();

    return user;
  },
});

// Query to get all users
export const getAll = query({
  args: {},
  handler: async ctx => {
    return await ctx.db.query('users').collect();
  },
});
