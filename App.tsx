
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookSalesPage from './components/BookSalesPage';
import { BOOKS } from './constants';
import { getInspiration } from './services/geminiService';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-30" 
            alt="Worship Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 serif leading-tight">Words that heal, inspire, and anchor.</h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light italic">
              Experience transformative Christian literature designed for your modern spiritual journey.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#/catalog" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:scale-105">
                Explore Catalog
              </a>
              <a href="#/inspiration" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold transition-all border border-white/30">
                Daily Inspiration
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books Grid */}
      <section className="py-20 bg-white" id="featured">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 serif mb-4 italic">Our Current Collection</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Selected titles crafted to provide deep spiritual insight and encouragement for every stage of your walk with God.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {BOOKS.map((book) => (
              <div key={book.id} className="group cursor-pointer" onClick={() => window.location.hash = `#/book/${book.id}`}>
                <div className="relative overflow-hidden rounded-xl shadow-lg transition-all group-hover:shadow-2xl mb-4 h-[400px]">
                  <img 
                    src={book.coverImage} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    alt={book.title} 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-blue-900 font-bold shadow">
                    ${book.price}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-800 transition-colors">{book.title}</h3>
                <p className="text-sm text-slate-500 italic mb-2 leading-tight">{book.subtitle}</p>
                <div className="flex items-center space-x-1 text-yellow-500 text-xs">
                  {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                  <span className="text-slate-400 ml-2">(4.9)</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publisher Mission */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="mb-12">
            <i className="fas fa-dove text-6xl text-blue-800 opacity-20"></i>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 serif">Building a Digital Library of Hope</h2>
          <p className="text-xl text-slate-700 leading-relaxed mb-12">
            At Encouraging Words Ebooks, we believe that the right word at the right time can change a life. Our mission is to bridge the gap between ancient biblical wisdom and modern digital convenience, providing you with high-quality, inspiring content available anywhere, anytime.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h4 className="font-bold text-blue-800 mb-2">Instant Delivery</h4>
              <p className="text-sm text-slate-500">Download your ebooks immediately after purchase. No waiting, no shipping costs.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h4 className="font-bold text-blue-800 mb-2">Multi-Format</h4>
              <p className="text-sm text-slate-500">Optimized for Kindle, iPad, Android, and Desktop reading experiences.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h4 className="font-bold text-blue-800 mb-2">Secure Payments</h4>
              <p className="text-sm text-slate-500">Trusted Stripe integration ensures your financial safety and privacy.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const InspirationPage: React.FC = () => {
  const [mood, setMood] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mood) return;
    setLoading(true);
    const res = await getInspiration(mood);
    setResult(res);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="p-12 text-center bg-blue-900 text-white">
          <h1 className="text-4xl font-bold serif mb-4 italic">Daily Inspiration</h1>
          <p className="opacity-80">How are you feeling today? Let us find a word of encouragement for you.</p>
        </div>
        <div className="p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-slate-700 font-bold mb-2">Describe your current heart state...</label>
              <textarea 
                className="w-full h-32 px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="e.g., I'm feeling overwhelmed with work and searching for peace..."
                value={mood}
                onChange={(e) => setMood(e.target.value)}
              />
            </div>
            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-blue-800 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-900 transition-all disabled:opacity-50 flex items-center justify-center space-x-3"
            >
              {loading ? <><i className="fas fa-spinner fa-spin"></i><span>Consulting the Word...</span></> : <><span>Get Encouragement</span><i className="fas fa-heart"></i></>}
            </button>
          </form>

          {result && (
            <div className="mt-12 p-8 bg-blue-50 rounded-2xl border border-blue-100 animate-in fade-in duration-500">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <i className="fas fa-quote-left mr-3 opacity-50"></i>
                For You Today:
              </h3>
              <p className="text-slate-800 text-lg leading-relaxed italic mb-6">
                {result}
              </p>
              <div className="pt-6 border-t border-blue-200">
                 <p className="text-sm font-bold text-blue-700 uppercase tracking-widest mb-4">Recommended Reading</p>
                 <div className="flex flex-wrap gap-2">
                    {BOOKS.slice(0, 2).map(b => (
                      <a key={b.id} href={`#/book/${b.id}`} className="px-4 py-2 bg-white border border-blue-200 rounded-full text-sm text-blue-800 hover:bg-blue-800 hover:text-white transition-colors">
                        {b.title}
                      </a>
                    ))}
                 </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CatalogPage: React.FC = () => {
  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 serif mb-12 text-center">Full Ebook Catalog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {BOOKS.map(book => (
             <div key={book.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col">
                <div className="h-64 relative overflow-hidden">
                   <img src={book.coverImage} className="w-full h-full object-cover" alt={book.title} />
                   <div className="absolute top-4 left-4">
                      {book.categories.map(c => <span key={c} className="bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase mr-1 text-blue-800">{c}</span>)}
                   </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                   <h3 className="text-2xl font-bold text-slate-900 mb-2">{book.title}</h3>
                   <p className="text-slate-500 italic text-sm mb-4">{book.subtitle}</p>
                   <p className="text-slate-600 mb-6 text-sm line-clamp-3">{book.description}</p>
                   <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50">
                      <span className="text-2xl font-bold text-blue-800">${book.price}</span>
                      <a href={`#/book/${book.id}`} className="bg-slate-900 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-800 transition-colors">
                         View Funnel
                      </a>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    if (route.startsWith('#/book/')) {
      const bookId = route.replace('#/book/', '');
      return <BookSalesPage bookId={bookId} />;
    }

    switch (route) {
      case '#/inspiration':
        return <InspirationPage />;
      case '#/catalog':
        return <CatalogPage />;
      case '#/':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
