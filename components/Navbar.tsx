import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/sangapay.png';



const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Customers', path: '/' },
    { name: 'Vendors', path: '/vendors' },
    { name: 'Riders', path: '/riders' },
    { name: 'Company', path: '/company' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100/50 supports-[backdrop-filter]:bg-white/60"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="h-16 flex items-center justify-center"
          >
            <img src={logo} alt="SangaEats Logo" className="h-[255px] w-[255px] object-contain" />
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-sm font-bold transition-colors py-2 ${isActive ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}
              >
                {item.name}
                {isActive && (
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                    layoutId="underline"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {/* Hover effect for non-active items, kept subtle or removed to emphasize active sliding */}
                {!isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/20 scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100 group-hover:scale-x-100 peer-hover:scale-x-100 pointer-events-none opacity-0 hover:opacity-100" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-xl shadow-primary/20 transition-all active:scale-95"
          >
            Get the App
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <motion.div
            initial={false}
            animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 p-6 space-y-4 shadow-xl z-50 overflow-hidden"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={item.path}
                  className={`block text-lg font-bold py-3 border-b border-slate-50 hover:pl-2 transition-all ${location.pathname === item.path ? 'text-primary pl-2' : 'hover:text-primary'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full bg-primary text-white py-4 rounded-xl font-bold mt-4 shadow-lg shadow-primary/20 active:scale-95 transition-transform"
            >
              Get the App
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
