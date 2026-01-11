import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import PortfolioGrid from '@/components/Portfolio/PortfolioGrid';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-12">Our Portfolio</h1>
          <PortfolioGrid />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}