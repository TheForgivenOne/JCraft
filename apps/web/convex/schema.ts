import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    clerkId: v.string(),
    createdAt: v.number(), // Using number to store timestamp (milliseconds since epoch)
  }).index('by_clerk_id', ['clerkId']),
  products: defineTable({
    name: v.string(),
    description: v.string(),
    price: v.number(), // Price in cents
    category: v.string(),
    inventory: v.number(),
    image: v.optional(v.string()), // URL to product image
    createdAt: v.number(), // Using number to store timestamp (milliseconds since epoch)
  }),
  orders: defineTable({
    userId: v.id('users'),
    total: v.number(), // Total in cents
    status: v.union(
      v.literal('pending'),
      v.literal('processing'),
      v.literal('shipped'),
      v.literal('delivered'),
      v.literal('cancelled')
    ),
    createdAt: v.number(), // Using number to store timestamp (milliseconds since epoch)
  }).index('by_user', ['userId']),
  order_items: defineTable({
    orderId: v.id('orders'),
    productId: v.id('products'),
    quantity: v.number(),
    price: v.number(), // Price in cents at time of purchase
  }).index('by_order', ['orderId']),
  projects: defineTable({
    name: v.string(),
    description: v.optional(v.string()),
    ownerId: v.id('users'),
    createdAt: v.number(), // Using number to store timestamp (milliseconds since epoch)
  }).index('by_owner', ['ownerId']),
  tasks: defineTable({
    title: v.string(),
    projectId: v.id('projects'),
    status: v.union(
      v.literal('todo'),
      v.literal('in-progress'),
      v.literal('done')
    ),
  }).index('by_project', ['projectId']),
});
