import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import MaterialIcon from "@/components/UI/MaterialIcon";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-background-dark/80 via-background-dark/40 to-transparent z-10"></div>
            <img
              alt="Premium Wood Texture"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNmFYx1WnfwM_p_CHssZWyDX7KzIdyLkrHw1ncyriS5LvX5pq48-WLlxLr1ogS0iROItC67ftxQKs0cJ5IhJAAnveVZ7DICYgmBkGYtJfR3lUr2erS3UX4dp_mtsJXFmGmchiMxSvh4zj8kD77C8e5VVGvGnIoaiQwAq0Tw1UoQnakoSL9pjA6gWxDS8k-mu_vCM8H5aZ3EvaTMlLWjERk9RUciH0eXAWGGWfvDrFOcdNG0XcgEqAEcJpkzQ5O9XYVnKjV_V4HB657"
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
                <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                  View Portfolio
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-background-dark transition-all">
                  Our Story
                </button>
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
                  <img
                    alt="Oak Dining Table"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwLsqny4TAJ2-Mb_G5bg3F20sy6JCqftc7m1AWxlvD0FSZi5Ux5AleLR7odR3-Z9Ovletzk9NHl5RItsxrZw-GN16du8oFMpJgqomUSpC3I3_rFPo32ekQnQmRmT_P2FiasEaU3OVzbBewlIj5jqjiRzTw-tIv_wEn0ZLraCrUmdKvDgc2P7fNTgl2spbJLK4-zzs0nHRgPvir2aLks1awa8bo0Hn3VMXzzUv5XtjyBFIgx8_XE8NPkAafYvyuLPNvVQJlOBR0QjO6"
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
                  <img
                    alt="Walnut Credenza"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt9EvM01Pkt9AM8hMZsf5FbmDd5cFVGasvkcjctg5v4P82nLfMh2hoIW9VVgBJwdwnv0zxTBwwhEk9Btt4nhzdGU_scUDFQSN19p95KNAFP0lWvzwBollMSf3Rlup5jaFBBtajpHwNaY0sQjydBoDbCxXexZmgHYx8qhcdZMC-ZJYWZmvydvQCNg6K05L0fOks0vAbLtRqw5a_aNZdx73GDXQy46bbjsKO34Nnn4yzrEE8ijvAUA_KQGaE_59YcmxxHhjbcD6-93zj"
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
                  <img
                    alt="Mahogany Lounge Chair"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8CVO6V7ctlaHCJTZJPyfWlOIzBG0n9h7LjTcrvJWVUoO-KPZoIuSRX6knxjoOylT9iocHqGAdzEvgN-VO9h-drD7eZiLGKf_z0HA6kacVe6AREC3CKbXAK1_tXA-_CRau_TQejv3BXKHNU6E2xmr84pPWeYigxmZ1f04kJEfreMSfBRfsP2AubYJaUfC9G1I74GVQr86XwiVyLDc5z-VG0qFgLM6GlodpXpNY1ufTIVTNhIjBrvsMHmS8q36nwe2sLNOiDpCjBL7F"
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
                  <img
                    alt="Craftsman at Work"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS3t_CCNcNyyFlE0d1Mwe9DW18WateQADAchu6KNI3Zm_anWFvAQb0Dbtu2-JOzBeEBs9P4tjT9L51Xa0iZqRmAlGEk9v69zjtfJjFyaAWkcfU3cpUr1_rPZ0MDPfGutfNoyl3X5HnPGdGoFl4APIbTSk_iR5e609APdjq6kA23a6uyXQ9WD4xu8B8yC_eR4LCjNlv1NpOyCIMxdr7BbZnPnDyBKgRuDt-OHrMrluZTOe53qwITPT2mx42mjPw4grUJYNu4G5kVQyr"
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
                  <div className="size-12 rounded-full bg-stone-300 overflow-hidden">
                    <img
                      alt="Customer"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2oKkVkdZ0eqi3cXHa3nhvOPrkwOqkTCGsG4s8PQrdIGvOc7zyFVhiOxcHxEAzQEIU3cHdsN-noT4Jj43wBu2TF2iK9qvQ14Gu4vDlHZa8aNW-d_8hpLcuCc4T8c1_5jgZIPhJisUyzUGpjS4aLP3cO883jIs5IlFrp0AO-VwChU9XsRR9kzS7gb-sNdrWsPukSgi1Wl47JSB7ITzeCiD2_SwWgzul_iJ-DydLMZ5VIOijUnFbU1tKyONGkeQ1z3p6-FiNG3SBiMBZ"
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
                  <div className="size-12 rounded-full bg-stone-300 overflow-hidden">
                    <img
                      alt="Customer"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjMS6Ai0MaQTxtSWbt426s3l6cdnDGAYXh2mYq0EHavrMfFVcVLQL_vANPsbVDHXt5gBqsAwZsSOf9I83xHaUlau23Mgkw6OhtkqBxyC1CrdOSdS09I9DqU2frFaPYEA2cncxwFly2WsZHMQKY4tTAD9vOxgIqoWH5U4zXdeZaUWmZRvicaErQm93s-u8IZDuNgmiHk34jB0OR48Sk2U3iNYwPwEl2SULyIYYkhYlgwTQXMjmlelf6cXA16rFluifFcbnvw704lOhN"
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
                  <div className="size-12 rounded-full bg-stone-300 overflow-hidden">
                    <img
                      alt="Customer"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMwx6N5L81pX436C1hgh-dCTbaCLbJPjNrY-_3XKXa2WTaZbN-LuoWkh36MB5WHVyPpOqMpI4aNWxyy0GyR3ywVmi8PyHcNAkI7mv6QlTPSebpXzLnP6r5uXAA1saOV3kwraHPTZvIs9WMMIexp_2GMA3IZI_JgXji3E8W62FsCzQhQltHXeJPvTvfXa7rxqlMfjqyTSaVThj16IsCJQSAaFxPC09YmAO7VhDJis5i_dn7nypjZ5OOnemesyy64Wq2r1VwBQVjAnLE"
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
