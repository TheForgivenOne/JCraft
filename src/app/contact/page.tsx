import Header from "@/components/Header/Header";
import ContactForm from "@/components/Contact/ContactForm";
import MaterialIcon from "@/components/UI/MaterialIcon";

export default function ContactPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#1b140d] dark:text-[#f3ede7] min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col items-center py-10 px-4">
        <div className="max-w-[1200px] w-full">
          {/* Page Heading */}
          <div className="flex flex-col gap-3 p-4 mb-8">
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-[#1b140d] dark:text-white">
              Contact JCraft — Custom Commissions
            </h1>
            <p className="text-[#9a734c] dark:text-[#c5a383] text-lg max-w-2xl">
              Let&apos;s bring your vision to life with artisanal craftsmanship.
              Tell us about your project and we&apos;ll get back to you within
              48 hours.
            </p>
          </div>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-4">
            {/* Left Column: Contact Form */}
            <div className="flex flex-col gap-6 bg-white dark:bg-[#2d2116] p-8 rounded-xl shadow-sm border border-[#e7dbcf] dark:border-[#3a2d21]">
              <h2 className="text-2xl font-bold text-[#1b140d] dark:text-white mb-2">
                Start Your Commission
              </h2>
              <ContactForm />
            </div>

            {/* Right Column: Info & Map */}
            <div className="flex flex-col gap-8">
              {/* Map Section */}
              <div className="w-full rounded-xl overflow-hidden border border-[#e7dbcf] dark:border-[#3a2d21] h-[300px] relative">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCddokkmW26zJKMatCEXh_S8ZIzZ7iNCGsTlnvY3J3_QINs3Ih0rRybOFmJhFgI262KaepStj3SjUBmUugd3UyQKxZdtupH2_ez8OigsNIH3-NriD4skbXcUZw_LLDp7a8jwdPHeOWnKNTXSjERMozH0EIOm4P2JxzLlkeVE067QeQchIeVXilnI-3H0QnOkjqfjYU3_vP9x2rSLsTGsqYYwj1hxG579wOycF0zarjPMA5aUlM8uzcKDdxKenD_42GbEtuXkhX24shc"
                  alt="A clean map showing the workshop location in a city"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                <div className="absolute bottom-4 left-4 bg-white dark:bg-[#1b140d] px-4 py-2 rounded-lg shadow-md text-sm font-bold flex items-center gap-2">
                  <MaterialIcon icon="location_on" className="text-primary" />
                  420 Artisans Way, Portland, OR
                </div>
              </div>

              {/* Business Hours & Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-[#2d2116] p-6 rounded-xl border border-[#e7dbcf] dark:border-[#3a2d21]">
                  <div className="flex items-center gap-2 mb-4">
                    <MaterialIcon icon="schedule" className="text-primary" />
                    <h3 className="font-bold text-lg">Studio Hours</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-[#9a734c] dark:text-[#c5a383]">
                    <li className="flex justify-between">
                      <span>Mon - Fri</span>
                      <span className="font-semibold text-[#1b140d] dark:text-white">
                        9:00 AM - 6:00 PM
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-semibold text-[#1b140d] dark:text-white">
                        10:00 AM - 4:00 PM
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-semibold text-[#1b140d] dark:text-white">
                        Closed
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-[#2d2116] p-6 rounded-xl border border-[#e7dbcf] dark:border-[#3a2d21]">
                  <div className="flex items-center gap-2 mb-4">
                    <MaterialIcon
                      icon="contact_support"
                      className="text-primary"
                    />
                    <h3 className="font-bold text-lg">Direct Contact</h3>
                  </div>
                  <div className="space-y-3">
                    <a
                      className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                      href="tel:+15035550123"
                    >
                      <MaterialIcon icon="call" className="text-lg" />
                      +1 (503) 555-0123
                    </a>
                    <a
                      className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                      href="mailto:hello@jcraft.studio"
                    >
                      <MaterialIcon icon="mail" className="text-lg" />
                      hello@jcraft.studio
                    </a>
                  </div>
                </div>
              </div>

              {/* Social & Proof */}
              <div className="flex flex-col gap-4 mt-2">
                <p className="text-sm font-bold uppercase tracking-widest text-[#9a734c]">
                  Follow the Craft
                </p>
                <div className="flex gap-4">
                  <a
                    className="size-12 rounded-full bg-white dark:bg-[#2d2116] border border-[#e7dbcf] dark:border-[#3a2d21] flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                    href="#"
                  >
                    <svg
                      className="size-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                    </svg>
                  </a>
                  <a
                    className="size-12 rounded-full bg-white dark:bg-[#2d2116] border border-[#e7dbcf] dark:border-[#3a2d21] flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                    href="#"
                  >
                    <svg
                      className="size-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.463 17.311c-.468 0-.85-.382-.85-.85 0-.468.382-.85.85-.85s.85.382.85.85c0 .468-.382.85-.85.85zm1.34-1.733c-.115-.191-.248-.341-.396-.45l.138-.309c.023-.053.058-.095.104-.127.046-.032.099-.048.159-.048.12 0 .224.032.312.096.088.064.132.148.132.252 0 .104-.044.188-.132.252-.088.064-.194.096-.317.096v.238zm-11.803-11.578c1.373 0 2.486 1.113 2.486 2.486s-1.113 2.486-2.486 2.486-2.486-1.113-2.486-2.486 1.113-2.486 2.486-2.486zm15.003 13.917h-12.003v-4h12.003v4zm0-6h-12.003v-4h12.003v4z"></path>
                    </svg>
                  </a>
                  <a
                    className="size-12 rounded-full bg-white dark:bg-[#2d2116] border border-[#e7dbcf] dark:border-[#3a2d21] flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                    href="#"
                  >
                    <svg
                      className="size-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="mt-auto p-4 bg-primary/10 border-l-4 border-primary rounded-r-lg">
                <p className="text-xs italic leading-relaxed text-[#1b140d] dark:text-[#f3ede7]">
                  &quot;Quality means doing it right when no one is looking.
                  Every JCraft piece is built to outlast its owners.&quot;
                  <br />
                  <span className="font-bold not-italic mt-2 block">
                    — Jacob, Master Craftsman
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="py-8 px-10 text-center border-t border-[#e7dbcf] dark:border-[#3a2d21]">
        <p className="text-sm text-[#9a734c]">
          © 2024 JCraft Artisanal Workshop. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
