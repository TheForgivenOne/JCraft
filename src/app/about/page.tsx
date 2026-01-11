import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import MaterialIcon from "@/components/UI/MaterialIcon";

export default function AboutPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#1b140d] dark:text-[#f3ede7] font-display min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-10">
          <div className="flex flex-col gap-6 py-12 md:py-20 lg:flex-row items-center lg:gap-16">
            <div
              className="w-full lg:w-1/2 aspect-[4/5] bg-center bg-no-repeat bg-cover rounded-xl shadow-2xl"
              style={{
                backgroundImage: "url('/images/image_9.jpg')",
              }}
            ></div>
            <div className="flex flex-col gap-8 w-full lg:w-1/2">
              <div className="flex flex-col gap-4">
                <span className="text-primary font-bold tracking-widest uppercase text-sm">
                  Since 2015
                </span>
                <h1 className="text-[#1b140d] dark:text-white text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
                  Crafting Heritage with Heart
                </h1>
                <p className="text-[#1b140d]/80 dark:text-[#f3ede7]/80 text-lg md:text-xl font-normal leading-relaxed">
                  Our story began in a small garage with a single set of chisels
                  and a vision to create goods that last generations. We believe
                  the soul of an object is born in the workshop, through the
                  patient hands of the maker.
                </p>
              </div>
              <div className="flex gap-4">
                <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold transition-all hover:scale-105">
                  <span>Meet the Team</span>
                </button>
                <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 border-2 border-primary/20 text-primary text-base font-bold transition-all hover:bg-primary/10">
                  <span>The Journal</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* The Journey Section */}
        <section className="bg-cream/30 dark:bg-white/5 py-20">
          <div className="max-w-[960px] mx-auto px-10">
            <div className="text-center mb-16">
              <h2 className="text-[#1b140d] dark:text-white text-4xl font-bold leading-tight tracking-tight">
                The Journey
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
            </div>
            {/* Timeline Component */}
            <div className="grid grid-cols-[40px_1fr] gap-x-8 px-4">
              {/* Item 1 */}
              <div className="flex flex-col items-center gap-1">
                <div className="bg-primary aspect-square rounded-full size-6 flex items-center justify-center text-white shadow-lg">
                  <MaterialIcon icon="history" className="text-[14px]" />
                </div>
                <div className="w-[2px] bg-clay/30 h-16 grow"></div>
              </div>
              <div className="flex flex-1 flex-col pb-10">
                <p className="text-primary text-sm font-bold tracking-wider uppercase mb-1">
                  2015
                </p>
                <p className="text-[#1b140d] dark:text-white text-xl font-bold leading-normal">
                  The First Workshop
                </p>
                <p className="text-clay dark:text-clay/80 text-base font-normal leading-relaxed mt-2">
                  Founded in a small barn in Oregon, JCraft started with a focus
                  on custom leather journals and hand-carved desk accessories.
                </p>
              </div>
              {/* Item 2 */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-[2px] bg-clay/30 h-6"></div>
                <div className="bg-forest aspect-square rounded-full size-6 flex items-center justify-center text-white shadow-lg">
                  <MaterialIcon icon="groups" className="text-[14px]" />
                </div>
                <div className="w-[2px] bg-clay/30 h-16 grow"></div>
              </div>
              <div className="flex flex-1 flex-col pb-10">
                <p className="text-primary text-sm font-bold tracking-wider uppercase mb-1">
                  2018
                </p>
                <p className="text-[#1b140d] dark:text-white text-xl font-bold leading-normal">
                  Expanding the Team
                </p>
                <p className="text-clay dark:text-clay/80 text-base font-normal leading-relaxed mt-2">
                  We moved to our current studio and welcomed three master
                  craftsmen, allowing us to venture into furniture and luxury
                  lifestyle goods.
                </p>
              </div>
              {/* Item 3 */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-[2px] bg-clay/30 h-6"></div>
                <div className="bg-primary aspect-square rounded-full size-6 flex items-center justify-center text-white shadow-lg">
                  <MaterialIcon icon="public" className="text-[14px]" />
                </div>
              </div>
              <div className="flex flex-1 flex-col">
                <p className="text-primary text-sm font-bold tracking-wider uppercase mb-1">
                  2022
                </p>
                <p className="text-[#1b140d] dark:text-white text-xl font-bold leading-normal">
                  Global Recognition
                </p>
                <p className="text-clay dark:text-clay/80 text-base font-normal leading-relaxed mt-2">
                  Honored with the &quot;Sustainability in Craft&quot; award and
                  started shipping our handmade collections to over 40
                  countries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-24">
          <div className="max-w-[1200px] mx-auto px-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div className="max-w-2xl">
                <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">
                  How we work
                </h2>
                <h3 className="text-[#1b140d] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
                  Our Process
                </h3>
                <p className="text-clay dark:text-clay/80 text-lg mt-4">
                  We take the long way around. No shortcuts, just pure
                  dedication to the craft.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="group bg-white dark:bg-white/5 p-8 rounded-xl border border-cream dark:border-white/10 hover:border-primary transition-all shadow-sm hover:shadow-xl">
                <div className="size-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <MaterialIcon
                    icon="eco"
                    className="text-primary group-hover:text-white text-3xl"
                  />
                </div>
                <span className="text-clay text-xs font-bold uppercase tracking-widest mb-2 block">
                  Step 01
                </span>
                <h4 className="text-xl font-bold mb-3 text-forest dark:text-white">
                  Source
                </h4>
                <p className="text-clay dark:text-clay/80 text-sm leading-relaxed">
                  We hand-select premium, sustainably harvested materials from
                  local suppliers who share our ethics.
                </p>
              </div>
              {/* Step 2 */}
              <div className="group bg-white dark:bg-white/5 p-8 rounded-xl border border-cream dark:border-white/10 hover:border-primary transition-all shadow-sm hover:shadow-xl">
                <div className="size-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <MaterialIcon
                    icon="architecture"
                    className="text-primary group-hover:text-white text-3xl"
                  />
                </div>
                <span className="text-clay text-xs font-bold uppercase tracking-widest mb-2 block">
                  Step 02
                </span>
                <h4 className="text-xl font-bold mb-3 text-forest dark:text-white">
                  Design
                </h4>
                <p className="text-clay dark:text-clay/80 text-sm leading-relaxed">
                  Every piece is sketched and prototyped until form and function
                  reach perfect equilibrium.
                </p>
              </div>
              {/* Step 3 */}
              <div className="group bg-white dark:bg-white/5 p-8 rounded-xl border border-cream dark:border-white/10 hover:border-primary transition-all shadow-sm hover:shadow-xl">
                <div className="size-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <MaterialIcon
                    icon="handyman"
                    className="text-primary group-hover:text-white text-3xl"
                  />
                </div>
                <span className="text-clay text-xs font-bold uppercase tracking-widest mb-2 block">
                  Step 03
                </span>
                <h4 className="text-xl font-bold mb-3 text-forest dark:text-white">
                  Build
                </h4>
                <p className="text-clay dark:text-clay/80 text-sm leading-relaxed">
                  Slow-made by hand using traditional techniques. We don&apos;t
                  rush excellence.
                </p>
              </div>
              {/* Step 4 */}
              <div className="group bg-white dark:bg-white/5 p-8 rounded-xl border border-cream dark:border-white/10 hover:border-primary transition-all shadow-sm hover:shadow-xl">
                <div className="size-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <MaterialIcon
                    icon="verified"
                    className="text-primary group-hover:text-white text-3xl"
                  />
                </div>
                <span className="text-clay text-xs font-bold uppercase tracking-widest mb-2 block">
                  Step 04
                </span>
                <h4 className="text-xl font-bold mb-3 text-forest dark:text-white">
                  Finish
                </h4>
                <p className="text-clay dark:text-clay/80 text-sm leading-relaxed">
                  Hand-applied natural oils and waxes protect and highlight the
                  natural beauty of the material.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section (Bento Style) */}
        <section className="bg-forest py-24 text-white">
          <div className="max-w-[1200px] mx-auto px-10">
            <div className="text-center mb-16">
              <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-4">
                Our Core Values
              </h2>
              <h3 className="text-4xl md:text-5xl font-black">
                Built for the long run
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Sustainability */}
              <div className="md:col-span-2 bg-white/10 p-10 rounded-2xl flex flex-col justify-between hover:bg-white/15 transition-colors">
                <div className="mb-12">
                  <MaterialIcon
                    icon="recycling"
                    className="text-4xl text-primary mb-4"
                  />
                  <h4 className="text-2xl font-bold mb-4">Sustainability</h4>
                  <p className="text-white/70 text-lg leading-relaxed max-w-lg">
                    We use 100% plastic-free packaging and ethically sourced
                    timber. Our commitment is to leave the workshop—and the
                    world—better than we found it.
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="px-3 py-1 bg-white/10 rounded text-xs font-bold uppercase tracking-tighter">
                    FSC Certified
                  </span>
                  <span className="px-3 py-1 bg-white/10 rounded text-xs font-bold uppercase tracking-tighter">
                    Zero Waste
                  </span>
                </div>
              </div>
              {/* Quality */}
              <div className="bg-primary p-10 rounded-2xl flex flex-col justify-center text-white hover:scale-[1.02] transition-transform">
                <MaterialIcon icon="diamond" className="text-5xl mb-6" />
                <h4 className="text-2xl font-bold mb-4">Timeless Quality</h4>
                <p className="text-white/90 text-base leading-relaxed">
                  We don&apos;t believe in disposability. Every product comes
                  with a lifetime guarantee on craftsmanship.
                </p>
              </div>
              {/* Community */}
              <div className="bg-clay p-10 rounded-2xl flex flex-col justify-center text-white">
                <MaterialIcon icon="handshake" className="text-5xl mb-6" />
                <h4 className="text-2xl font-bold mb-4">Community Focused</h4>
                <p className="text-white/90 text-base leading-relaxed">
                  We mentor local apprentices, keeping heritage crafts alive for
                  the next generation of makers.
                </p>
              </div>
              {/* Tradition */}
              <div className="md:col-span-2 bg-cream text-[#1b140d] p-10 rounded-2xl flex items-center gap-10">
                <div className="flex-1">
                  <h4 className="text-2xl font-bold mb-4">
                    Honoring Tradition
                  </h4>
                  <p className="text-forest/70 text-lg leading-relaxed">
                    While we embrace modern utility, we never forget the
                    techniques of the masters who came before us. Hand-dovetail
                    joints and saddle stitching are our signature.
                  </p>
                </div>
                <div
                  className="hidden lg:block w-48 h-32 bg-center bg-cover rounded-lg"
                  style={{
                    backgroundImage: "url('/images/image_10.jpg')",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 text-center">
          <div className="max-w-[800px] mx-auto px-10">
            <h2 className="text-[#1b140d] dark:text-white text-4xl font-bold mb-8">
              Own a piece of the story.
            </h2>
            <p className="text-clay text-lg mb-10">
              Explore our seasonal collections or request a custom commission
              today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-primary text-white font-bold py-4 px-10 rounded-lg hover:opacity-90 transition-all text-lg">
                Shop the Collection
              </button>
              <button className="border-2 border-primary text-primary font-bold py-4 px-10 rounded-lg hover:bg-primary/5 transition-all text-lg">
                Contact the Studio
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
