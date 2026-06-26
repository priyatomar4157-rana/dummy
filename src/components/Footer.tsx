import { Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Leaf className="h-6 w-6 text-emerald-400" />
              <span className="ml-2 font-serif text-2xl font-medium tracking-tight">Botanic Glow</span>
            </div>
            <p className="text-emerald-200/80 mb-6 max-w-sm">
              Nature's Secret to Radiant Skin
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-emerald-100">Quick Links</h4>
            <ul className="space-y-3 text-emerald-200/80">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/organic-skincare-products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/webmap" className="hover:text-white transition-colors">Sitemap Webmap</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-emerald-100">Customer Care</h4>
            <ul className="space-y-3 text-emerald-200/80">
              <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-emerald-800/50 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-emerald-300/60">
          <p>Copyright &copy; 2026 Botanic Glow. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
