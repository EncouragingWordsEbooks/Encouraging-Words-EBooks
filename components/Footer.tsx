
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4 serif italic">Encouraging Words Ebooks</h3>
            <p className="max-w-xs mb-4">
              Providing timeless wisdom and spiritual encouragement for the modern believer. Your journey of faith deserves a companion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-blue-400"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-blue-400"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#/" className="hover:text-white">Home</a></li>
              <li><a href="#/catalog" className="hover:text-white">Our Ebooks</a></li>
              <li><a href="#" className="hover:text-white">Affiliate Program</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <p className="mb-2">Email: info@encouragingwordsebooks.com</p>
            <p>Based in Beautiful Colorado</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Encouraging Words Ebooks. All rights reserved. Registered domain: www.encouragingwordsebooks.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
