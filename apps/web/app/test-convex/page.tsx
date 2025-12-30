'use client';

import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';

export default function TestConvexPage() {
  const health = useQuery(api.health.healthCheck);

  return (
    <div className="p-4">
      <h1>Convex Health Check</h1>
      <p>Status: {health ? health.status : 'Loading...'}</p>
      {health && (
        <p>Timestamp: {new Date(health.timestamp).toLocaleString()}</p>
      )}
    </div>
  );
}
