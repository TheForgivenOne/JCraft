import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ContactForm from '@/components/Contact/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-bold text-center mb-8">Contact JCraft</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-6">
                Have a custom project in mind or questions about our services? 
                Reach out to us using the form, and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">info@jcraft.example</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600">(123) 456-7890</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900">Location</h3>
                  <p className="text-gray-600">123 Craft Avenue<br />Artisan City, AC 12345</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}