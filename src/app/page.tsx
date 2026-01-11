import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ImageGallery from '@/components/UI/ImageGallery';

export default function HomePage() {
  // Sample images for the gallery
  const sampleImages = [
    '/placeholder1.jpg',
    '/placeholder2.jpg',
    '/placeholder3.jpg',
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Exceptional Craftsmanship, Tailored to Perfection
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Discover unique, handcrafted items made with passion and precision. Every piece tells a story.
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="/portfolio" 
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
              >
                View Portfolio
              </a>
              <a 
                href="/contact" 
                className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Works</h2>
            <ImageGallery images={sampleImages} />
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">About JCraft</h2>
              <p className="text-gray-600 mb-6">
                With years of experience in traditional craftsmanship, JCraft brings timeless artistry to modern living. 
                Each piece is carefully designed and meticulously crafted to meet the highest standards of quality and beauty.
              </p>
              <a 
                href="/about" 
                className="text-blue-600 font-medium hover:underline"
              >
                Learn More About My Story →
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}