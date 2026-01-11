import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    role: v.union(v.literal('admin'), v.literal('artisan'), v.literal('customer')),
    clerkUserId: v.string(), // Link to Clerk user ID
  }).index('by_clerk_user_id', ['clerkUserId']),
  
  portfolio: defineTable({
    title: v.string(),
    description: v.string(),
    imageUrl: v.string(),
    category: v.string(),
    price: v.optional(v.number()),
    userId: v.id('users'), // Reference to user who owns this item
  }).index('by_user', ['userId']),
  
  contacts: defineTable({
    name: v.string(),
    email: v.string(),
    message: v.string(),
    status: v.union(
      v.literal('new'), 
      v.literal('in-progress'), 
      v.literal('resolved')
    ),
  }),
});