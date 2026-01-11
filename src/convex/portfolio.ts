import { mutation, query } from './_generated/server';
import { v } from 'convex/values';

// Query to get all portfolio items
export const getItems = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query('portfolio').collect();
  },
});

// Query to get a specific portfolio item by ID
export const getItemById = query({
  args: {
    id: v.id('portfolio'),
  },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// Mutation to create a new portfolio item
export const createItem = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    imageUrl: v.string(),
    category: v.string(),
    price: v.optional(v.number()),
    userId: v.id('users'),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert('portfolio', args);
  },
});

// Mutation to update a portfolio item
export const updateItem = mutation({
  args: {
    id: v.id('portfolio'),
    title: v.optional(v.string()),
    description: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    category: v.optional(v.string()),
    price: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    return await ctx.db.patch(id, updates);
  },
});

// Mutation to delete a portfolio item
export const deleteItem = mutation({
  args: {
    id: v.id('portfolio'),
  },
  handler: async (ctx, args) => {
    return await ctx.db.delete(args.id);
  },
});