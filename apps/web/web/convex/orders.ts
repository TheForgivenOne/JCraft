import { query, mutation } from './_generated/server';
import { v } from 'convex/values';
import { Id } from './_generated/dataModel';

// Query to get all orders for the current user
export const getForUser = query({
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

    return await ctx.db
      .query('orders')
      .withIndex('by_user', q => q.eq('userId', user._id))
      .collect();
  },
});

// Query to get a specific order by ID
export const getById = query({
  args: {
    orderId: v.id('orders'),
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

    // Get the order and verify it belongs to the user
    const order = await ctx.db.get(args.orderId);
    if (!order || order.userId !== user._id) {
      throw new Error("Order not found or doesn't belong to user");
    }

    return order;
  },
});

// Mutation to create a new order
export const create = mutation({
  args: {
    total: v.number(),
    items: v.array(
      v.object({
        productId: v.id('products'),
        quantity: v.number(),
        price: v.number(),
      })
    ),
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

    // Create the order
    const orderId = await ctx.db.insert('orders', {
      userId: user._id,
      total: args.total,
      status: 'pending',
      createdAt: Date.now(),
    });

    // Create order items
    for (const item of args.items) {
      await ctx.db.insert('order_items', {
        orderId: orderId,
        productId: item.productId,
        quantity: item.quantity,
        price: item.price,
      });
    }

    return orderId;
  },
});

// Mutation to update an order status
export const updateStatus = mutation({
  args: {
    orderId: v.id('orders'),
    status: v.union(
      v.literal('pending'),
      v.literal('processing'),
      v.literal('shipped'),
      v.literal('delivered'),
      v.literal('cancelled')
    ),
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

    // Get the order and verify it belongs to the user
    const order = await ctx.db.get(args.orderId);
    if (!order || order.userId !== user._id) {
      throw new Error("Order not found or doesn't belong to user");
    }

    // Update the order status
    await ctx.db.patch(args.orderId, {
      status: args.status,
    });

    return args.orderId;
  },
});
