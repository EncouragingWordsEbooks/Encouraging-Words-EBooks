
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#/" className="flex items-center space-x-2">
              <span className="text-2xl text-blue-800"><i className="fas fa-dove"></i></span>
              <span className="font-bold text-xl tracking-tight text-slate-800 serif">Encouraging Words</span>
            </a>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#/" className="text-slate-600 hover:text-blue-700 transition-colors font-medium">Home</a>
            <a href="#/catalog" className="text-slate-600 hover:text-blue-700 transition-colors font-medium">All Books</a>
            <a href="#/inspiration" className="text-slate-600 hover:text-blue-700 transition-colors font-medium">Daily Inspiration</a>
          </div>
          <div className="flex items-center space-x-4">
             <button className="bg-blue-800 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-900 transition-all shadow-sm">
                Join Community
             </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
