import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import MaterialIcon from "@/components/UI/MaterialIcon";
import Button from "@/components/UI/Button";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-background-dark/80 via-background-dark/40 to-transparent z-10"></div>
            <Image
              alt="Premium Wood Texture"
              className="w-full h-full object-cover"
              src="/images/image_1.jpg"
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 w-full">
            <div className="max-w-2xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-bold uppercase tracking-wider">
                <MaterialIcon icon="verified" className="text-sm" />
                Master Artisans since 1994
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
                Crafted with Soul, <br /> Built for Generations
              </h1>
              <p className="text-lg lg:text-xl text-stone-200 font-light leading-relaxed max-w-lg">
                Bespoke furniture and artisanal goods, handmade with precision
                in our mountain workshop.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  variant="primary"
                  size="lg"
                  className="px-8 py-4 text-lg"
                >
                  View Portfolio
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg border-2 border-white text-white hover:bg-white hover:text-background-dark"
                >
                  Our Story
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Award Banner */}
        <div className="bg-deep-oak dark:bg-stone-900 py-8 border-y border-stone-800">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around items-center gap-8 opacity-70 grayscale contrast-125">
            <div className="flex items-center gap-2 text-stone-400">
              <MaterialIcon icon="workspace_premium" className="text-4xl" />
              <span className="text-xs font-bold uppercase tracking-widest">
                Global Design Award 2023
              </span>
            </div>
            <div className="flex items-center gap-2 text-stone-400">
              <MaterialIcon icon="eco" className="text-4xl" />
              <span className="text-xs font-bold uppercase tracking-widest">
                Sustainable Forestry Certified
              </span>
            </div>
            <div className="flex items-center gap-2 text-stone-400">
              <MaterialIcon icon="handyman" className="text-4xl" />
              <span className="text-xs font-bold uppercase tracking-widest">
                Master Craftsman Guild
              </span>
            </div>
          </div>
        </div>

        {/* Featured Works Carousel Header */}
        <section className="py-20 bg-background-light dark:bg-background-dark">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">
                  Our Collection
                </span>
                <h2 className="text-4xl font-black text-deep-oak dark:text-stone-100 tracking-tight">
                  Featured Works
                </h2>
              </div>
              <div className="flex gap-2">
                <button className="size-12 rounded-full border border-stone-300 dark:border-stone-700 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <MaterialIcon icon="arrow_back" />
                </button>
                <button className="size-12 rounded-full border border-stone-300 dark:border-stone-700 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <MaterialIcon icon="arrow_forward" />
                </button>
              </div>
            </div>
            {/* Carousel Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-stone-200">
                  <Image
                    alt="Oak Dining Table"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src="/images/image_2.jpg"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-background-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white/90 text-background-dark px-6 py-3 rounded-lg font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-stone-500 text-sm font-medium">
                    Solid White Oak
                  </p>
                  <h3 className="text-xl font-bold text-deep-oak dark:text-stone-100">
                    Nordic Dining Table
                  </h3>
                </div>
              </div>
              {/* Card 2 */}
              <div className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-stone-200">
                  <Image
                    alt="Walnut Credenza"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src="/images/image_3.jpg"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-background-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white/90 text-background-dark px-6 py-3 rounded-lg font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-stone-500 text-sm font-medium">
                    American Black Walnut
                  </p>
                  <h3 className="text-xl font-bold text-deep-oak dark:text-stone-100">
                    Executive Credenza
                  </h3>
                </div>
              </div>
              {/* Card 3 */}
              <div className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-stone-200">
                  <Image
                    alt="Mahogany Lounge Chair"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src="/images/image_4.jpg"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-background-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white/90 text-background-dark px-6 py-3 rounded-lg font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-stone-500 text-sm font-medium">
                    Hand-polished Mahogany
                  </p>
                  <h3 className="text-xl font-bold text-deep-oak dark:text-stone-100">
                    Artisan Lounge Chair
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24 bg-stone-100 dark:bg-background-dark wood-texture-overlay">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    alt="Craftsman at Work"
                    className="w-full h-full object-cover"
                    src="/images/image_5.jpg"
                    fill
                    sizes="(max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-2xl hidden md:block shadow-xl max-w-[240px]">
                  <p className="text-white text-3xl font-black italic">
                    &quot;Every knot tells a story.&quot;
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="text-primary font-bold uppercase tracking-widest text-sm">
                    Philosophy
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-black text-deep-oak dark:text-stone-100 leading-tight">
                    The JCraft Method
                  </h2>
                  <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
                    Our philosophy focuses on sustainability, slow-crafting, and
                    using locally sourced timber to create pieces that last a
                    lifetime. We don&apos;t believe in shortcuts, only soul.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white dark:bg-stone-800 rounded-xl shadow-sm border border-stone-200 dark:border-stone-700">
                    <MaterialIcon
                      icon="nature"
                      className="text-primary mb-3 text-3xl"
                    />
                    <h4 className="font-bold text-lg mb-1">Eco-Sourcing</h4>
                    <p className="text-sm text-stone-500">
                      Only reclaimed or sustainably felled local hardwoods.
                    </p>
                  </div>
                  <div className="p-6 bg-white dark:bg-stone-800 rounded-xl shadow-sm border border-stone-200 dark:border-stone-700">
                    <MaterialIcon
                      icon="timer"
                      className="text-primary mb-3 text-3xl"
                    />
                    <h4 className="font-bold text-lg mb-1">Slow-Craft</h4>
                    <p className="text-sm text-stone-500">
                      Each piece spends up to 120 hours in our hands.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-background-light dark:bg-background-dark overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">From Our Patrons</h2>
              <div className="flex justify-center gap-1 text-primary">
                <MaterialIcon icon="star" className="fill-1" />
                <MaterialIcon icon="star" className="fill-1" />
                <MaterialIcon icon="star" className="fill-1" />
                <MaterialIcon icon="star" className="fill-1" />
                <MaterialIcon icon="star" className="fill-1" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-stone-50 dark:bg-stone-900 rounded-2xl italic border-t-4 border-primary">
                <p className="text-lg text-stone-700 dark:text-stone-300 mb-6">
                  &quot;The walnut credenza is the centerpiece of our home. You
                  can still smell the fresh oil and wood months later. Truly an
                  heirloom piece.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-full bg-stone-300 overflow-hidden relative">
                    <Image
                      alt="Customer"
                      src="/images/image_6.jpg"
                      fill
                      sizes="48px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Julian R.</p>
                    <p className="text-xs text-stone-500">Interior Designer</p>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-stone-50 dark:bg-stone-900 rounded-2xl italic border-t-4 border-primary">
                <p className="text-lg text-stone-700 dark:text-stone-300 mb-6">
                  &quot;Finding furniture that balances modern aesthetics with
                  traditional joinery is rare. JCraft mastered both. The
                  dovetails are flawless.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-full bg-stone-300 overflow-hidden relative">
                    <Image
                      alt="Customer"
                      src="/images/image_7.jpg"
                      fill
                      sizes="48px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Marcus V.</p>
                    <p className="text-xs text-stone-500">Home Owner</p>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-stone-50 dark:bg-stone-900 rounded-2xl italic border-t-4 border-primary">
                <p className="text-lg text-stone-700 dark:text-stone-300 mb-6">
                  &quot;Sustainability was my priority. Knowing where my table
                  came from and the name of the artisan who built it makes all
                  the difference.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-full bg-stone-300 overflow-hidden relative">
                    <Image
                      alt="Customer"
                      src="/images/image_8.jpg"
                      fill
                      sizes="48px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Elena G.</p>
                    <p className="text-xs text-stone-500">Eco-Consultant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
