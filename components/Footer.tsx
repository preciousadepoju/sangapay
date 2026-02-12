import React from 'react';
import { Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { StaggerContainer, StaggerItem } from './Animations';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6">
                <StaggerContainer className="grid grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
                    <StaggerItem className="col-span-2">
                        <Link to="/" className="flex items-center gap-2 mb-6 group">
                            <motion.div
                                whileHover={{ rotate: 10, scale: 1.1 }}
                                className="w-8 h-8 flex items-center justify-center transition-transform"
                            >
                                <img src={logo} alt="SANGAPAY Logo" className="w-full h-full object-contain" />
                            </motion.div>
                            <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-primary transition-colors font-brand">SANGAPAY</span>
                        </Link>
                        <p className="text-slate-500 mb-8 max-w-sm font-medium text-sm leading-relaxed">
                            Empowering businesses and making lives easier through world-class logistics and delivery solutions.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { name: "Twitter", path: "M24 4.557..." }, // Simplify for brevity in animation logic if needed, but keeping full paths
                                { name: "Instagram", path: "M12 2.163..." }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ y: -5, borderColor: '#0ea5e9', color: '#0ea5e9' }}
                                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-200 transition-colors text-slate-400"
                                >
                                    <span className="sr-only">{social.name}</span>
                                    {/* Using simplified SVGs for the example or keeping original */}
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        {social.name === "Twitter" ? (
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                        ) : (
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        )}
                                    </svg>
                                </motion.a>
                            ))}
                        </div>
                    </StaggerItem>

                    {[
                        { title: "Company", links: [{ name: "About Us", to: "/company" }, { name: "Careers", href: "#" }, { name: "Blog", href: "#" }] },
                        { title: "Products", links: [{ name: "Vendors", to: "/vendors" }, { name: "Riders", to: "/riders" }, { name: "Store", href: "#" }] },
                        { title: "Support", links: [{ name: "Help Center", href: "#" }, { name: "FAQs", href: "#" }] },
                        { title: "Legal", links: [{ name: "Terms", href: "#" }, { name: "Privacy", href: "#" }] }
                    ].map((section, idx) => (
                        <StaggerItem key={idx} className="col-span-1">
                            <h4 className="font-bold text-slate-900 mb-6 text-sm">{section.title}</h4>
                            <ul className="space-y-3">
                                {section.links.map((link: any, i) => (
                                    <li key={i}>
                                        {link.to ? (
                                            <Link to={link.to} className="text-slate-500 hover:text-primary transition-colors text-sm font-medium hover:underline">{link.name}</Link>
                                        ) : (
                                            <a href={link.href} className="text-slate-500 hover:text-primary transition-colors text-sm font-medium hover:underline">{link.name}</a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-400 text-xs font-medium">
                        &copy; {new Date().getFullYear()} SANGAPAY Technologies Inc. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <span className="text-slate-400 text-xs font-bold cursor-pointer hover:text-primary transition-colors">English (US)</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
