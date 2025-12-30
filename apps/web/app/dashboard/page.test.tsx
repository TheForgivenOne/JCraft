import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useQuery } from 'convex/react';
import { useUser } from '@clerk/nextjs';
import DashboardPage from './page';

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
  usePathname: () => '/',
}));

vi.mock('convex/react');
vi.mock('@clerk/nextjs');

describe('DashboardPage', () => {
  beforeEach(() => {
    vi.mocked(useUser).mockReturnValue({
      isSignedIn: true,
      user: {
        firstName: 'John',
        username: 'johndoe',
        fullName: 'John Doe',
        id: '123',
        createdAt: 123,
        updatedAt: 123,
        primaryEmailAddress: {
          id: '123',
          emailAddress: 'test@test.com',
          verification: {
            status: 'verified',
            strategy: 'email_link',
            externalVerificationRedirectURL: null,
            error: null,
            expireAt: 123,
            attempts: 1,
            nonce: null,
          },
          linkedTo: [],
          createdAt: 123,
          updatedAt: 123,
        },
        primaryPhoneNumber: null,
        primaryWeb3Wallet: null,
        phoneNumbers: [],
        web3Wallets: [],
        emailAddresses: [],
        passwordEnabled: false,
        twoFactorEnabled: false,
        unsafeMetadata: {},
        publicMetadata: {},
        externalAccounts: [],
        externalId: null,
        lastSignInAt: null,
        createOrganizationEnabled: true,
      },
      isLoaded: true,
    });
  });

  it('renders the dashboard with mocked orders', () => {
    const mockOrders = [
      {
        _id: '1',
        createdAt: Date.now(),
        status: 'delivered',
        total: 1000,
      },
    ];
    vi.mocked(useQuery).mockReturnValue(mockOrders);

    render(<DashboardPage />);

    expect(
      screen.getByRole('heading', { name: /dashboard/i })
    ).toBeInTheDocument();
    expect(screen.getByText('Total Orders')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
