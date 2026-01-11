import Link from "next/link";
import MaterialIcon from "@/components/UI/MaterialIcon";

export default function Footer() {
  return (
    <footer className="bg-deep-oak text-stone-300 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-white">
            <MaterialIcon icon="carpenter" className="text-primary text-3xl" />
            <span className="text-2xl font-bold tracking-tight">JCraft</span>
          </div>
          <p className="text-sm leading-relaxed">
            Artisanal excellence from the heart of the mountains. Crafting
            generations of memories through wood.
          </p>
          <div className="flex gap-4">
            <a className="hover:text-primary transition-colors" href="#">
              <MaterialIcon icon="public" />
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              <MaterialIcon icon="camera" />
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              <MaterialIcon icon="mail" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Navigation</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-primary">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <Link href="#" className="hover:text-primary">
                Care Guide
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary">
                Shipping Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary">
                Warranty
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="text-white font-bold mb-2">Join Our Newsletter</h4>
          <p className="text-xs">Get a peek behind the workshop doors.</p>
          <div className="flex">
            <input
              className="bg-stone-800 border-none rounded-l-lg px-4 py-3 text-sm focus:ring-1 focus:ring-primary w-full"
              placeholder="Email address"
              type="email"
            />
            <button className="bg-primary text-white px-4 rounded-r-lg hover:bg-primary/90 transition-colors">
              <MaterialIcon icon="chevron_right" />
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-20 pt-8 border-t border-stone-800 text-xs flex flex-col md:flex-row justify-between gap-4">
        <p>© 2024 JCraft Artisanal Furniture. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
