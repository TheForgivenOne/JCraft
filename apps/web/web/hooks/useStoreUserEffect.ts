import { useUser } from '@clerk/nextjs';
import { useConvexAuth } from 'convex/react';
import { useEffect, useState } from 'react';
import { useMutation } from 'convex/react';
import { api } from '../convex/_generated/api';
import { Id } from '../convex/_generated/dataModel';

export function useStoreUserEffect() {
  // Check if Convex is configured
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
  const isConvexConfigured = convexUrl && convexUrl.trim() !== '';

  // All hooks must be called unconditionally
  const { isLoading, isAuthenticated } = useConvexAuth();
  const { user } = useUser();
  const [userId, setUserId] = useState<Id<'users'> | null>(null);
  const storeUser = useMutation(api.users.store);

  // Call the `storeUser` mutation function to store
  // the current user in the `users` table and return the `Id` value.
  useEffect(() => {
    // If Convex is not configured or the user is not logged in don't do anything
    if (!isConvexConfigured || !isAuthenticated) {
      return;
    }
    // Store the user in the database.
    // Recall that `storeUser` gets the user information via the `auth`
    // object on the server. You don't need to pass anything manually here.
    async function createUser() {
      const id = await storeUser();
      setUserId(id);
    }
    createUser();
    return () => setUserId(null);
    // Make sure the effect reruns if the user logs in with
    // a different identity
  }, [isAuthenticated, storeUser, user?.id, isConvexConfigured]);

  // If Convex is not configured, return mock values
  if (!isConvexConfigured) {
    return {
      isLoading: false,
      isAuthenticated: false,
    };
  }

  // Combine the local state with the state from context
  return {
    isLoading: isLoading || (isAuthenticated && userId === null),
    isAuthenticated: isAuthenticated && userId !== null,
  };
}
