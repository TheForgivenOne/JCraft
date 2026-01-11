import { mutation } from './_generated/server';
import { v } from 'convex/values';

// Mutation to create a new contact message
export const create = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert('contacts', {
      name: args.name,
      email: args.email,
      message: args.message,
      status: 'new',
    });
  },
});