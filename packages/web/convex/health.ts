import { query } from './_generated/server';

// A simple test query to verify Convex is working
export const healthCheck = query({
  args: {},
  handler: async ctx => {
    return { status: 'ok', timestamp: Date.now() };
  },
});
