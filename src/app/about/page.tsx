import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-bold text-center mb-8">About JCraft</h1>
          
          <div className="prose prose-lg mx-auto">
            <p>
              Welcome to JCraft, where traditional craftsmanship meets contemporary design. 
              Founded by a passionate artisan with over a decade of experience, our mission 
              is to create unique, high-quality pieces that stand the test of time.
            </p>
            
            <h2 className="text-2xl font-semibold mt-10 mb-4">Our Story</h2>
            <p>
              JCraft began in a small workshop where attention to detail and dedication to 
              the craft were paramount. What started as a hobby has grown into a full-fledged 
              business serving clients who appreciate the value of handmade excellence.
            </p>
            
            <h2 className="text-2xl font-semibold mt-10 mb-4">Our Process</h2>
            <p>
              Each piece begins with careful selection of materials, followed by meticulous 
              planning and design. Our hands-on approach ensures that every detail meets our 
              high standards of quality and reflects the unique vision of our clients.
            </p>
            
            <h2 className="text-2xl font-semibold mt-10 mb-4">Our Commitment</h2>
            <p>
              We are committed to sustainable practices, ethical sourcing of materials, 
              and maintaining the highest level of craftsmanship. Our work comes with a 
              guarantee of quality and our promise to exceed your expectations.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}