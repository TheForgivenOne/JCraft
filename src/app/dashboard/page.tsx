'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MaterialIcon from '@/components/UI/MaterialIcon';

export default function DashboardPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Mock user data since we're not using Clerk anymore
  const user = { firstName: 'Alex' };
  const isSignedIn = true; // In a real app, you'd manage authentication differently

  if (!isSignedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1b140d] dark:text-white">Access Denied</h1>
          <p className="text-[#9a734c] dark:text-[#d1c2b5] mt-2">Please sign in to access the dashboard</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#1b140d] dark:text-white transition-colors duration-200 min-h-screen flex flex-col">
      {/* Top Navigation */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e5e7eb] dark:border-[#3d2e1f] px-6 lg:px-10 py-3 bg-white dark:bg-[#2d2116] sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 text-primary">
            <div className="size-6">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_330)">
                  <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
                </g>
                <defs>
                  <clipPath id="clip0_6_330">
                    <rect fill="white" height="48" width="48"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-[#1b140d] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] font-display">JCraft</h2>
          </div>
          <div className="hidden md:flex items-center gap-9">
            <Link href="/#explore" className="text-[#1b140d] dark:text-[#d1c2b5] text-sm font-medium hover:text-primary transition-colors">
              Explore
            </Link>
            <Link href="/#workshops" className="text-[#1b140d] dark:text-[#d1c2b5] text-sm font-medium hover:text-primary transition-colors">
              Workshops
            </Link>
            <Link href="/about" className="text-[#1b140d] dark:text-[#d1c2b5] text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
          </div>
        </div>
        <div className="flex flex-1 justify-end gap-6 items-center">
          <label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-[#9a734c] flex border-none bg-[#f3ede7] dark:bg-[#3d2e1f] items-center justify-center pl-4 rounded-l-lg" data-icon="search">
                <MaterialIcon icon="search" />
              </div>
              <input
                className="form-input flex w-full min-w-0 flex-1 border-none bg-[#f3ede7] dark:bg-[#3d2e1f] text-[#1b140d] dark:text-white focus:ring-0 h-full placeholder:text-[#9a734c] px-4 rounded-r-lg text-sm"
                placeholder="Search orders..."
                value=""
              />
            </div>
          </label>
          <Link href="/contact">
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold tracking-[0.015em] hover:bg-opacity-90 transition-all">
              <span>New Commission</span>
            </button>
          </Link>
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80')" }}>
            {/* Placeholder for user profile - would normally be replaced with UserButton from Clerk */}
            <div className="size-10 rounded-full bg-gray-200 border-2 border-primary/20 flex items-center justify-center">
              <span className="text-primary font-bold">A</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar Navigation */}
        <aside className="hidden lg:flex w-64 flex-col border-r border-[#e5e7eb] dark:border-[#3d2e1f] bg-white dark:bg-[#2d2116] p-4 gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary">
              <MaterialIcon icon="dashboard" />
              <p className="text-sm font-medium">Dashboard</p>
            </div>
            <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-[#6b7280] dark:text-[#d1c2b5] hover:bg-background-light dark:hover:bg-[#3d2e1f] rounded-lg transition-colors cursor-pointer">
              <MaterialIcon icon="handyman" />
              <p className="text-sm font-medium">My Commissions</p>
            </Link>
            <Link href="/dashboard/messages" className="flex items-center gap-3 px-3 py-2 text-[#6b7280] dark:text-[#d1c2b5] hover:bg-background-light dark:hover:bg-[#3d2e1f] rounded-lg transition-colors cursor-pointer relative">
              <MaterialIcon icon="chat_bubble" />
              <p className="text-sm font-medium">Messages</p>
              <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-primary"></span>
            </Link>
            <Link href="/dashboard/history" className="flex items-center gap-3 px-3 py-2 text-[#6b7280] dark:text-[#d1c2b5] hover:bg-background-light dark:hover:bg-[#3d2e1f] rounded-lg transition-colors cursor-pointer">
              <MaterialIcon icon="history" />
              <p className="text-sm font-medium">Order History</p>
            </Link>
          </div>
          <div className="mt-auto border-t border-[#e5e7eb] dark:border-[#3d2e1f] pt-4">
            <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2 text-[#6b7280] dark:text-[#d1c2b5] hover:bg-background-light dark:hover:bg-[#3d2e1f] rounded-lg transition-colors cursor-pointer">
              <MaterialIcon icon="settings" />
              <p className="text-sm font-medium">Settings</p>
            </Link>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col min-w-0 max-w-[1200px] mx-auto p-6 lg:p-10 gap-8">
          {/* Page Heading */}
          <div className="flex flex-wrap justify-between items-end gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-[#1b140d] dark:text-white text-3xl font-black leading-tight tracking-[-0.033em] font-display">
                Welcome back, {user?.firstName || 'Alex'}
              </h1>
              <p className="text-[#9a734c] dark:text-[#d1c2b5] text-base font-normal">Your custom Walnut Desk is nearing completion.</p>
            </div>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-[#f3ede7] dark:bg-[#3d2e1f] text-[#1b140d] dark:text-white text-sm font-bold hover:bg-[#e8decb] transition-colors">
              <span>View All Projects</span>
            </button>
          </div>

          {/* Active Commissions */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-[#1b140d] dark:text-white text-xl font-bold font-display">Active Commissions</h2>
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider">1 Project In Progress</span>
            </div>
            <div className="bg-white dark:bg-[#2d2116] rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] overflow-hidden border border-[#e5e7eb] dark:border-[#3d2e1f]">
              <div className="flex flex-col md:flex-row">
                <div
                  className="w-full md:w-2/5 aspect-video md:aspect-auto min-h-[240px] bg-center bg-no-repeat bg-cover"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDUp5D64H5PPKDEEVdN2sFKfmAZ7UQ9CPrjihkZHWmpd2CrAep-LRq8O--64lUbwS4b5A5AdynI5js0nirabXqIH2dqSYV9GggwL3ldR6dTRetw8FpTATce-29xQRPkxetNz5CNl1UWy3ORXEIbuDxlDSkyM_zmuGneatzZ7sxZm4yk0NUj3nBRr1XpDqFSeWZq6k6OQzwApDEttoTwjeDotEhoQ27DnslzwUn17266lFGLDwUwZcVIdWJTbriWtQuxgNok58A_2Ieq')" }}
                ></div>
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-between gap-6">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-[#1b140d] dark:text-white text-2xl font-bold font-display">Walnut Dining Table</h3>
                      <p className="text-[#9a734c] font-medium">Est. Oct 24</p>
                    </div>
                    <div className="flex items-center gap-2 mb-6">
                      <MaterialIcon icon="construction" className="text-primary text-sm" />
                      <p className="text-[#9a734c] dark:text-[#d1c2b5] text-sm">Phase: <span className="text-[#1b140d] dark:text-white font-semibold">Sanding & Polishing</span></p>
                    </div>
                    {/* Progress Tracker */}
                    <div className="space-y-4">
                      <div className="w-full bg-[#f3ede7] dark:bg-[#3d2e1f] h-3 rounded-full overflow-hidden">
                        <div className="bg-primary h-full w-[75%] rounded-full shadow-[0_0_8px_rgba(236,127,19,0.4)]"></div>
                      </div>
                      <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-[#9a734c]">
                        <span className="text-primary">Sourcing</span>
                        <span className="text-primary">Carving</span>
                        <span className="text-primary">Sanding</span>
                        <span className="text-[#d1c2b5]">Finishing</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-[#f3ede7] dark:border-[#3d2e1f]">
                    <button className="flex-1 min-w-[140px] flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-opacity-90 transition-all">
                      <MaterialIcon icon="visibility" className="text-lg" />
                      <span>Full Details</span>
                    </button>
                    <button className="flex-1 min-w-[140px] flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-white dark:bg-transparent border border-[#e5e7eb] dark:border-[#3d2e1f] text-[#1b140d] dark:text-white text-sm font-bold hover:bg-background-light dark:hover:bg-[#3d2e1f] transition-all">
                      <MaterialIcon icon="image" className="text-lg" />
                      <span>Progress Photos</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Messages Section */}
            <section className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-[#1b140d] dark:text-white text-xl font-bold font-display">Craftsman Updates</h2>
                <a className="text-primary text-sm font-bold hover:underline" href="#">Open Portal</a>
              </div>
              <div className="bg-white dark:bg-[#2d2116] rounded-xl border border-[#e5e7eb] dark:border-[#3d2e1f] flex flex-col divide-y divide-[#e5e7eb] dark:divide-[#3d2e1f]">
                <div className="p-4 flex gap-4 hover:bg-background-light dark:hover:bg-[#3d2e1f]/50 transition-colors cursor-pointer">
                  <div
                    className="size-12 rounded-full bg-center bg-cover flex-shrink-0 border-2 border-[#f3ede7] dark:border-[#3d2e1f]"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDniBzVqGH_e8o3DONz3X3rD_OnkvkFpitGRs8ePxZERMj5-Bdq-vNcSbWa_dmchuVSj4zRL2nyED6Ju913dKuIisAcR3R7s8xYrJirg-qkNeFC58xD0LOWbAeLbVMZD-3ojaCHTZ0VCGW1LO1BV3pI-QGX49Bfnn1DXaXOp4W2_3RcQie10t_nuHaXfhcN1eY-y13xnA6ruwl0vjx_f8_HlKp2A6sv5wXOwD8IM1w9MqQf4wIdxZJqTC_D8ZBsRV7SduGyIVNZJeeH')" }}
                  ></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="text-sm font-bold">Julian (Master Craftsman)</h4>
                      <span className="text-[10px] text-[#9a734c] uppercase font-bold">2 hours ago</span>
                    </div>
                    <p className="text-sm text-[#1b140d] dark:text-[#d1c2b5] line-clamp-2">
                      "Just finished the final oil coat on the legs. The grain is looking absolutely stunning. I'll send some more hi-res photos tomorrow."
                    </p>
                  </div>
                </div>
                <div className="p-4 flex gap-4 bg-background-light dark:bg-[#3d2e1f]/30">
                  <div className="flex-1 bg-white dark:bg-[#2d2116] rounded-lg border border-[#e5e7eb] dark:border-[#3d2e1f] px-4 py-2 flex items-center">
                    <input
                      className="w-full border-none bg-transparent focus:ring-0 text-sm text-[#1b140d] dark:text-white px-0"
                      placeholder="Type your reply..."
                      type="text"
                    />
                    <button className="text-primary p-1 hover:bg-primary/10 rounded-full transition-colors">
                      <MaterialIcon icon="send" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* History Section */}
            <section className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-[#1b140d] dark:text-white text-xl font-bold font-display">Acquisition History</h2>
                <a className="text-primary text-sm font-bold hover:underline" href="#">View All</a>
              </div>
              <div className="bg-white dark:bg-[#2d2116] rounded-xl border border-[#e5e7eb] dark:border-[#3d2e1f] overflow-hidden">
                <div className="flex flex-col">
                  <div className="p-4 flex items-center gap-4 hover:bg-background-light dark:hover:bg-[#3d2e1f]/50 transition-colors border-b border-[#e5e7eb] dark:border-[#3d2e1f]">
                    <div
                      className="size-14 rounded-lg bg-center bg-cover flex-shrink-0"
                      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDnwtnvn7oSfWHwuFTTVMcpkkhJPK0ooWKVJgwdRrlzZdr50l609Bme0AGorWysj8KwTt1gTYNQ7HZ_olhb1Yzw_zxXfWn_YuofWWjv4_y3MSIG-serKxnNJe0FV2MudbWOeO0JFBXyV05d22Iz8WL7a2lVOCac2NSWLMOkTjpVfB70CFjFK236-SAXQd7lh0SSNdB35eKCLfpPxIk-7e9Zdw3wSxLD42PGc1dj0Af7kI_QUdVxEHyhxgBFOyCRYiMNVzc3dLYOVU8d')" }}
                    ></div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold truncate">Hand-carved Oak Bowl</h4>
                      <p className="text-xs text-[#9a734c]">Ordered Mar 12, 2023</p>
                    </div>
                    <button className="p-2 text-[#9a734c] hover:text-primary transition-colors">
                      <MaterialIcon icon="download" />
                    </button>
                  </div>
                  <div className="p-4 flex items-center gap-4 hover:bg-background-light dark:hover:bg-[#3d2e1f]/50 transition-colors">
                    <div
                      className="size-14 rounded-lg bg-center bg-cover flex-shrink-0"
                      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBOycTK_8WZz_pYuflCDQxCvfZviCUKa-gQgqZbsf2nDVQs6MP2x-CFDIrz76DfuHnxX_zgIk3kfagYTD-451mqx1nMg7TfIEEnFsMa0fMnCACGx5Yze8MhW67nqeSnZnx-n9VUeFujGOYFrC5QU9Ouat5eiK-1yU82F0EmgYBMV3Xbc0TaADd0KEFXT1STHA6UhiXr7-9gU5l6w6edJG2e0ZuBQir58NvGhRzKdNbkmWkI8DwDmYE4YeVTYBhoRQ9L3Q_8zHSAadM8')" }}
                    ></div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold truncate">Leather Bound Journal</h4>
                      <p className="text-xs text-[#9a734c]">Ordered Nov 05, 2022</p>
                    </div>
                    <button className="p-2 text-[#9a734c] hover:text-primary transition-colors">
                      <MaterialIcon icon="download" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Footer / Support */}
          <footer className="mt-8 py-10 border-t border-[#e5e7eb] dark:border-[#3d2e1f] flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 opacity-60 grayscale">
              <div className="size-6 text-[#1b140d] dark:text-white">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
                </svg>
              </div>
              <p className="text-sm font-bold">JCraft Artisanal Studio</p>
            </div>
            <div className="flex gap-8 text-[#9a734c] text-xs font-medium">
              <a className="hover:text-primary" href="#">Help Center</a>
              <a className="hover:text-primary" href="#">Terms of Service</a>
              <a className="hover:text-primary" href="#">Contact Craftsman</a>
            </div>
            <p className="text-[#9a734c] text-[10px] uppercase font-bold tracking-widest">© 2023 JCraft Studios</p>
          </footer>
        </main>
      </div>
    </div>
  );
}