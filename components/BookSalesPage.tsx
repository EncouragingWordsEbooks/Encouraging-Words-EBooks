
import React, { useState, useEffect } from 'react';
import { Book } from '../types';
import { BOOKS } from '../constants';

interface BookSalesPageProps {
  bookId: string;
}

const BookSalesPage: React.FC<BookSalesPageProps> = ({ bookId }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  
  const book = BOOKS.find(b => b.id === bookId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [bookId]);

  if (!book) return <div className="p-20 text-center">Book not found.</div>;

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section / Sales Funnel Start */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-4 uppercase tracking-wider">
                Now Available Worldwide
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                {book.title}
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 font-light italic">
                {book.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                <button 
                  onClick={() => setShowCheckout(true)}
                  className="bg-blue-800 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-900 transition-all shadow-xl hover:scale-105"
                >
                  Buy Ebook for ${book.price}
                </button>
                <button 
                  onClick={() => setShowPreview(true)}
                  className="bg-white text-blue-800 border-2 border-blue-800 px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-50 transition-all"
                >
                  Read Introduction Free
                </button>
              </div>
              <p className="mt-4 text-sm text-slate-500 flex items-center justify-center lg:justify-start">
                <i className="fas fa-lock mr-2 text-green-600"></i> Secure Payment via Stripe
              </p>
            </div>
            <div className="flex justify-center relative">
              <div className="w-64 h-96 md:w-80 md:h-[480px] bg-slate-200 rounded-lg shadow-2xl relative overflow-hidden group">
                <img src={book.coverImage} alt={book.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
              <div className="absolute -z-10 -top-10 -left-10 w-48 h-48 bg-gold-100 rounded-full blur-3xl opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Trust */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 font-medium mb-8">AS FEATURED IN</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
             <span className="text-xl font-bold">Christian Daily</span>
             <span className="text-xl font-bold">Faith Weekly</span>
             <span className="text-xl font-bold">The Gospel News</span>
             <span className="text-xl font-bold">Grace Today</span>
          </div>
        </div>
      </section>

      {/* The Problem & Solution */}
      <section className="py-20 max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why you need this book today</h2>
          <div className="w-20 h-1.5 bg-blue-800 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
            <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
              <i className="fas fa-times-circle mr-2"></i> The Struggle
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Feeling disconnected, overwhelmed by the pace of life, and struggling to find consistent time for your spiritual health? You're not alone.
            </p>
          </div>
          <div className="bg-green-50 p-8 rounded-3xl border border-green-100">
            <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
              <i className="fas fa-check-circle mr-2"></i> The Result
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Experience a renewed sense of purpose, deep internal peace, and a practical toolkit to keep your faith vibrant regardless of your circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 serif">What's Inside Your Copy</h2>
            <p className="text-slate-400">Transformative content designed for your soul's growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {book.benefits.map((benefit, i) => (
              <div key={i} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors">
                <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center text-blue-400 mb-6">
                  <i className={`fas fa-${['star', 'book-open', 'heart', 'anchor'][i % 4]} text-xl`}></i>
                </div>
                <p className="text-lg font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 serif italic">Readers are saying...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {book.testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 relative">
                <i className="fas fa-quote-left absolute top-4 left-4 text-blue-100 text-4xl"></i>
                <p className="text-slate-700 italic mb-6 relative z-10 leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center text-white font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-sm text-slate-500">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky CTA for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 z-40 flex space-x-2">
         <button 
           onClick={() => setShowCheckout(true)}
           className="flex-1 bg-blue-800 text-white py-3 rounded-lg font-bold shadow-lg"
         >
           Get Ebook
         </button>
         <button 
           onClick={() => setShowPreview(true)}
           className="px-4 py-3 border border-blue-800 rounded-lg text-blue-800"
         >
           Preview
         </button>
      </div>

      {/* Final CTA */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 bg-white rounded-3xl p-12 border-2 border-dashed border-slate-200">
           <h2 className="text-3xl font-bold mb-4">Start Your Journey Today</h2>
           <p className="text-slate-600 mb-8">Join thousands of readers who have found encouragement in {book.author}'s work.</p>
           <button 
             onClick={() => setShowCheckout(true)}
             className="bg-blue-800 text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-blue-900 transition-all shadow-xl"
           >
             Order Your Digital Copy - ${book.price}
           </button>
           <p className="mt-6 text-sm text-slate-400">Instant digital download. Access on any device.</p>
        </div>
      </section>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl max-h-[80vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-blue-50">
              <h3 className="text-2xl font-bold serif italic text-blue-900">Introduction</h3>
              <button onClick={() => setShowPreview(false)} className="text-slate-400 hover:text-slate-600 text-2xl">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="p-8 overflow-y-auto leading-relaxed text-slate-700 text-lg">
              <p className="mb-4 font-bold text-slate-900 text-xl italic text-center">"{book.subtitle}"</p>
              <div className="whitespace-pre-wrap">{book.introduction}</div>
              <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                <h4 className="font-bold text-slate-900 mb-2">Want to keep reading?</h4>
                <p className="text-sm mb-4">Get the full ebook instantly and start your transformation.</p>
                <button 
                  onClick={() => { setShowPreview(false); setShowCheckout(true); }}
                  className="bg-blue-800 text-white px-6 py-2 rounded-lg font-bold"
                >
                  Buy Now - ${book.price}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Checkout Modal (Mock Stripe) */}
      {showCheckout && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-6 bg-blue-800 text-white flex justify-between items-center">
              <h3 className="text-xl font-bold">Secure Checkout</h3>
              <button onClick={() => setShowCheckout(false)} className="text-white/70 hover:text-white">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-center space-x-4 mb-8">
                <img src={book.coverImage} className="w-16 h-24 object-cover rounded shadow" alt="" />
                <div>
                  <h4 className="font-bold">{book.title}</h4>
                  <p className="text-slate-500">Digital Edition (EPUB/PDF)</p>
                  <p className="text-blue-800 font-bold">${book.price}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Email Address</label>
                  <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Card Details</label>
                  <div className="relative">
                    <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none pl-12" placeholder="XXXX XXXX XXXX XXXX" />
                    <i className="fas fa-credit-card absolute left-4 top-3 text-slate-400"></i>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="MM/YY" />
                  <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="CVC" />
                </div>
                <button 
                  onClick={() => alert("This is a demonstration. Integration with Stripe is pre-configured on the real server!")}
                  className="w-full bg-blue-800 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-900 transition-all flex items-center justify-center space-x-2 shadow-lg"
                >
                  <i className="fas fa-lock"></i>
                  <span>Complete Purchase</span>
                </button>
              </div>
              
              <div className="mt-6 flex justify-center items-center space-x-4 grayscale opacity-60 scale-75">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" className="h-6" alt="Stripe" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-6" alt="PayPal" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookSalesPage;
