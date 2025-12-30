import { query } from './_generated/server';
import { v } from 'convex/values';
import { Id } from './_generated/dataModel';

// Query to get all projects for the current user
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
      .query('projects')
      .withIndex('by_owner', q => q.eq('ownerId', user._id))
      .collect();
  },
});

// Query to get all projects for a user
export const getUserProjects = query({
  args: {
    userId: v.id('users'),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query('projects')
      .withIndex('by_owner', q => q.eq('ownerId', args.userId))
      .collect();
  },
});

// Query to get all tasks for a project
export const getProjectTasks = query({
  args: {
    projectId: v.id('projects'),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query('tasks')
      .withIndex('by_project', q => q.eq('projectId', args.projectId))
      .collect();
  },
});
