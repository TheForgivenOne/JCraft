import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import MaterialIcon from "@/components/UI/MaterialIcon";

export default function PortfolioPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#1b140d] dark:text-[#fcfaf8] transition-colors duration-300 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-20 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 mb-6">
          <a className="text-[#9a734c] text-sm hover:underline" href="#">
            Home
          </a>
          <MaterialIcon
            icon="chevron_right"
            className="text-sm text-[#9a734c]"
          />
          <span className="text-sm font-semibold">Portfolio</span>
        </nav>

        {/* Page Heading */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              Our Craftsmanship
            </h1>
            <p className="text-lg text-[#9a734c] leading-relaxed">
              A curated collection of handmade goods, blending traditional
              techniques with modern aesthetics. Each piece tells a story of
              patience and precision.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-lg bg-[#f3ede7] dark:bg-[#3d2e21] text-sm font-semibold flex items-center gap-2">
              <MaterialIcon icon="sort" className="text-lg" /> Sort by: Latest
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Navigation */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="flex flex-col gap-8 sticky top-24">
              {/* Categories Section */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#9a734c] mb-4">
                  Categories
                </h3>
                <div className="flex flex-col gap-1">
                  <a
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary text-white shadow-lg shadow-primary/20"
                    href="#"
                  >
                    <MaterialIcon icon="grid_view" className="text-xl" />
                    <span className="text-sm font-semibold">All Works</span>
                  </a>
                  <a
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#f3ede7] dark:hover:bg-[#3d2e21] transition-colors"
                    href="#"
                  >
                    <MaterialIcon icon="chair" className="text-xl" />
                    <span className="text-sm font-medium">Furniture</span>
                  </a>
                  <a
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#f3ede7] dark:hover:bg-[#3d2e21] transition-colors"
                    href="#"
                  >
                    <MaterialIcon icon="lightbulb" className="text-xl" />
                    <span className="text-sm font-medium">Lighting</span>
                  </a>
                  <a
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#f3ede7] dark:hover:bg-[#3d2e21] transition-colors"
                    href="#"
                  >
                    <MaterialIcon icon="nest_eco_leaf" className="text-xl" />
                    <span className="text-sm font-medium">Home Decor</span>
                  </a>
                  <a
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#f3ede7] dark:hover:bg-[#3d2e21] transition-colors"
                    href="#"
                  >
                    <MaterialIcon icon="construction" className="text-xl" />
                    <span className="text-sm font-medium">Tools</span>
                  </a>
                </div>
              </div>

              {/* Materials Section */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#9a734c] mb-4">
                  Materials
                </h3>
                <div className="flex flex-col gap-1">
                  <label className="flex items-center gap-3 px-3 py-2 cursor-pointer group">
                    <input
                      defaultChecked={true}
                      className="rounded border-[#9a734c] text-primary focus:ring-primary"
                      type="checkbox"
                    />
                    <span className="text-sm group-hover:text-primary transition-colors">
                      Reclaimed Oak
                    </span>
                  </label>
                  <label className="flex items-center gap-3 px-3 py-2 cursor-pointer group">
                    <input
                      className="rounded border-[#9a734c] text-primary focus:ring-primary"
                      type="checkbox"
                    />
                    <span className="text-sm group-hover:text-primary transition-colors">
                      Wrought Iron
                    </span>
                  </label>
                  <label className="flex items-center gap-3 px-3 py-2 cursor-pointer group">
                    <input
                      className="rounded border-[#9a734c] text-primary focus:ring-primary"
                      type="checkbox"
                    />
                    <span className="text-sm group-hover:text-primary transition-colors">
                      Aged Brass
                    </span>
                  </label>
                  <label className="flex items-center gap-3 px-3 py-2 cursor-pointer group">
                    <input
                      className="rounded border-[#9a734c] text-primary focus:ring-primary"
                      type="checkbox"
                    />
                    <span className="text-sm group-hover:text-primary transition-colors">
                      Full-Grain Leather
                    </span>
                  </label>
                </div>
              </div>

              <button className="mt-4 w-full py-3 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 shadow-lg shadow-primary/25 active:scale-95 transition-all">
                Clear All Filters
              </button>
            </div>
          </aside>

          {/* Grid Section */}
          <div className="flex-1">
            {/* Active Filter Chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              <div className="flex items-center gap-2 bg-[#f3ede7] dark:bg-[#3d2e21] px-3 py-1.5 rounded-full text-xs font-bold">
                RECLAIMED OAK
                <button className="hover:text-primary transition-colors">
                  <MaterialIcon icon="close" className="text-sm" />
                </button>
              </div>
              <div className="flex items-center gap-2 bg-[#f3ede7] dark:bg-[#3d2e21] px-3 py-1.5 rounded-full text-xs font-bold">
                FURNITURE
                <button className="hover:text-primary transition-colors">
                  <MaterialIcon icon="close" className="text-sm" />
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group craft-card relative flex flex-col overflow-hidden bg-white dark:bg-[#2b2118] rounded-xl border border-[#f3ede7] dark:border-[#3d2e21] hover:shadow-2xl hover:shadow-primary/5 transition-all">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4-U-Yb0bqCh2tJkEYso3r-445_XMXJxEjFE0PeNPMK-47qRCr1dsfjGqcg-gkp84yEVt_ExyOFbnQ4dTAzgqDsmGHHAwAnOIEiurrv4S2o9GYjcjAYwgrqhnWMaJ5SmYgE2Upx2pYSnKxFMvY6ocvqIuzD1GbJg1g4Rkawl-QkfFI_6R7UYK1bedVj_Ix9WCrCP_2I2VEvFup8h6CQ1yKeFYBTabpDX7TgrhzfbJpkzm9OXQ1UY5jyPfFEVRmDX5Ve6v3FNY7gnaJ"
                    alt="Handcrafted oak dining table detailed view"
                  />
                  <div className="hover-overlay absolute inset-0 bg-primary/20 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-[#1b140d] px-6 py-3 rounded-lg font-bold shadow-xl hover:bg-primary hover:text-white transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold tracking-widest text-[#9a734c] uppercase">
                    Woodworking
                  </span>
                  <h3 className="text-lg font-bold mt-1 mb-2">
                    Live Edge Dining Table
                  </h3>
                  <p className="text-sm text-[#9a734c] line-clamp-2 leading-relaxed">
                    Hand-selected reclaimed oak with natural edges, preserved
                    with organic oil finish.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group craft-card relative flex flex-col overflow-hidden bg-white dark:bg-[#2b2118] rounded-xl border border-[#f3ede7] dark:border-[#3d2e21] hover:shadow-2xl hover:shadow-primary/5 transition-all">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVcL2qTecgUdnFICwfDRj6YUpT4-dAh5Ckjg4FP_OTzQRLCtu_5dZcYyG7kgaGYgODBfDRH3nVWOFvAKIlidKrz78mHUSo8lLK5zhiOZK31tD-nm8RZicQn0VZvLzdPAAwDg6fyHNGEp-FI-ijOo986QiJXRP7_8YePb9NxQ5ZIFK-m5XWoNZ7gKqb2sxXpANdpPPftEAFJKNahwBegaX0dBGjjrbxhwigLxgGGJCOMQXeKMWO-M0HOrpL3XrU_y_o4pY8ClFeRRBM"
                    alt="Minimalist forged iron wall sconce lighting"
                  />
                  <div className="hover-overlay absolute inset-0 bg-primary/20 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-[#1b140d] px-6 py-3 rounded-lg font-bold shadow-xl hover:bg-primary hover:text-white transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold tracking-widest text-[#9a734c] uppercase">
                    Metalwork
                  </span>
                  <h3 className="text-lg font-bold mt-1 mb-2">
                    Forged Steel Sconce
                  </h3>
                  <p className="text-sm text-[#9a734c] line-clamp-2 leading-relaxed">
                    Minimalist lighting fixture crafted from hand-forged steel
                    and antiqued brass.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group craft-card relative flex flex-col overflow-hidden bg-white dark:bg-[#2b2118] rounded-xl border border-[#f3ede7] dark:border-[#3d2e21] hover:shadow-2xl hover:shadow-primary/5 transition-all">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXJsoJZ0Lc0EFB-4Bo754okDQSiBQQDMHVErIPRkW4zXS3IirTfHyn6j7d7i8aGbExDMwXvKXZ-YMZUGSNVWci_iGp--XdI4t9XJcPunBm2O7DbYetTZgjMBNOkIgigI_ldS4YxNSbU7M72QkuL-luIql0cYq2S-7h_Jo63Ly9-Ds6bkib3t8Es3I7T2ZTTq2hezFFn6vYcXX_-z7uJrr6GH6yxyCjr2B4DZXa2Nmj84lU6ruKXaEF7VB-7bpMjhvJMEupH3aDQw6D"
                    alt="Stitched leather artisan satchel bag"
                  />
                  <div className="hover-overlay absolute inset-0 bg-primary/20 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-[#1b140d] px-6 py-3 rounded-lg font-bold shadow-xl hover:bg-primary hover:text-white transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold tracking-widest text-[#9a734c] uppercase">
                    Leather
                  </span>
                  <h3 className="text-lg font-bold mt-1 mb-2">
                    Artisan Leather Satchel
                  </h3>
                  <p className="text-sm text-[#9a734c] line-clamp-2 leading-relaxed">
                    Full-grain vegetable tanned leather, hand-stitched with
                    waxed linen thread.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="group craft-card relative flex flex-col overflow-hidden bg-white dark:bg-[#2b2118] rounded-xl border border-[#f3ede7] dark:border-[#3d2e21] hover:shadow-2xl hover:shadow-primary/5 transition-all">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEUmYK-vDdBxlrg8gqvhCeMOYVZkNZJG6rfP6Z2y1NAu0Odr_8WKTITa8LqMTGbGoWJP13XYX0FWaiL6mfsP4Uf78Xqsnn8I2tudA0ZmwxaUcoTSwmahCPSJi-ij81AYruVQlQpvdtNgWH-qjJhxE-3a8EryzU2vZi5vrpO8QSvUmogOX4WGj-7c9bvl98hJZ7CxRq4BwLEM6UKy2vP2aGQjcYdSrqNlK5-eoMCFF0PmEqn-PYP-R_7cIoY4T750ogwViwBuErVY_W"
                    alt="Brushed brass tabletop minimalist clock"
                  />
                  <div className="hover-overlay absolute inset-0 bg-primary/20 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-[#1b140d] px-6 py-3 rounded-lg font-bold shadow-xl hover:bg-primary hover:text-white transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold tracking-widest text-[#9a734c] uppercase">
                    Home Decor
                  </span>
                  <h3 className="text-lg font-bold mt-1 mb-2">
                    Aged Brass Desk Clock
                  </h3>
                  <p className="text-sm text-[#9a734c] line-clamp-2 leading-relaxed">
                    Solid brass case with a brushed finish and silent Japanese
                    movement.
                  </p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="group craft-card relative flex flex-col overflow-hidden bg-white dark:bg-[#2b2118] rounded-xl border border-[#f3ede7] dark:border-[#3d2e21] hover:shadow-2xl hover:shadow-primary/5 transition-all">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbIn1suhN25D96iu0dRdrhEoXQhkjkl3qpWdVOPYCF2fREWTsTfuySYsTefNlOyJb419lzIp3qjyXx93i2wghoA9rSh0OPqP-_eRty64eRvVbOm8zbA_iPhgntdAYestpvdUNgiKyQHllIdpzxkY-922HF5eqKyc-FIf2zIoTN39nn09QfShP0C2dMnlghZa6r2jxSmq-yCOcS7dMrcKQIEPMZwwkppPBwDiOr6N4Tm_xO9UfAgwzxl16lyr8HahhkWo6xdmsPv2TT"
                    alt="Sculptural wooden lounge chair design"
                  />
                  <div className="hover-overlay absolute inset-0 bg-primary/20 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-[#1b140d] px-6 py-3 rounded-lg font-bold shadow-xl hover:bg-primary hover:text-white transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold tracking-widest text-[#9a734c] uppercase">
                    Furniture
                  </span>
                  <h3 className="text-lg font-bold mt-1 mb-2">
                    Sculptural Lounge Chair
                  </h3>
                  <p className="text-sm text-[#9a734c] line-clamp-2 leading-relaxed">
                    Ergonomic design carved from a single block of premium
                    walnut wood.
                  </p>
                </div>
              </div>

              {/* Card 6 */}
              <div className="group craft-card relative flex flex-col overflow-hidden bg-white dark:bg-[#2b2118] rounded-xl border border-[#f3ede7] dark:border-[#3d2e21] hover:shadow-2xl hover:shadow-primary/5 transition-all">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3yBziLiCOnshXB0O45_sbYFbwjYVKIrU131utBP5niySPS9kcsdhKveQbJne9V_cgX3azs26fBPyXxVu2NATmHXtNSGCmyy5ahb-7-_CtJdRJP7llAbGguF3ghWiHKe1aK8S9DH1Zcnj73_7f-WJqyMIrFk7P6OeB6aJVrP7oiqRMyEf7urDERV14Zvx6W5BVXemJECN6mq9pmQ5XgQMEYDWr5Nt_1FFKkx0GMarTP1xRVXc9VvV-CAzxrPOkz9PC9FWKWD0UmcG8"
                    alt="Traditional handmade chisels on wood workbench"
                  />
                  <div className="hover-overlay absolute inset-0 bg-primary/20 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-[#1b140d] px-6 py-3 rounded-lg font-bold shadow-xl hover:bg-primary hover:text-white transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold tracking-widest text-[#9a734c] uppercase">
                    Tools
                  </span>
                  <h3 className="text-lg font-bold mt-1 mb-2">
                    Master Chisel Set
                  </h3>
                  <p className="text-sm text-[#9a734c] line-clamp-2 leading-relaxed">
                    High-carbon steel blades with ergonomic ash handles for
                    precision work.
                  </p>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="mt-16 flex justify-center items-center gap-4">
              <button
                className="size-10 rounded-lg flex items-center justify-center border border-[#f3ede7] dark:border-[#3d2e21] hover:bg-[#f3ede7] transition-colors disabled:opacity-50"
                disabled
              >
                <MaterialIcon icon="chevron_left" />
              </button>
              <div className="flex items-center gap-2">
                <button className="size-10 rounded-lg flex items-center justify-center bg-primary text-white font-bold">
                  1
                </button>
                <button className="size-10 rounded-lg flex items-center justify-center hover:bg-[#f3ede7] dark:hover:bg-[#3d2e21] font-medium">
                  2
                </button>
                <button className="size-10 rounded-lg flex items-center justify-center hover:bg-[#f3ede7] dark:hover:bg-[#3d2e21] font-medium">
                  3
                </button>
                <span className="mx-2">...</span>
                <button className="size-10 rounded-lg flex items-center justify-center hover:bg-[#f3ede7] dark:hover:bg-[#3d2e21] font-medium">
                  12
                </button>
              </div>
              <button className="size-10 rounded-lg flex items-center justify-center border border-[#f3ede7] dark:border-[#3d2e21] hover:bg-[#f3ede7] dark:hover:bg-[#3d2e21] transition-colors">
                <MaterialIcon icon="chevron_right" />
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
