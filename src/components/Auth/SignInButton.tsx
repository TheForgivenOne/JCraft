'use client';

import { SignInButton, useUser } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';

export default function SignInButtonComponent() {
  const { isSignedIn } = useUser();

  return (
    <>
      {isSignedIn ? (
        <UserButton />
      ) : (
        <SignInButton mode="modal">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Sign In
          </button>
        </SignInButton>
      )}
    </>
  );
}