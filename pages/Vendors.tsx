import React from 'react';
import { Store, TrendingUp, Users, PieChart, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '../components/Animations';

const Vendors: React.FC = () => {
    return (
        <main className="overflow-x-hidden">
            {/* Vendors Hero */}
            <section className="relative pt-24 pb-32 bg-primary overflow-hidden text-white">
                <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <FadeIn delay={0.1}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-black uppercase tracking-[0.1em] mb-8">
                                <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}>
                                    <Store size={14} />
                                </motion.div>
                                <span>For Partners</span>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2} direction="left">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight">
                                Grow your business <br /> <span className="text-white/60">exponentially.</span>
                            </h1>
                        </FadeIn>
                        <FadeIn delay={0.3} direction="up">
                            <p className="text-xl text-blue-100 mb-12 max-w-lg leading-relaxed font-medium">
                                Reach thousands of new customers and manage your orders effortlessly with our partner dashboard.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.4} direction="up">
                            <motion.button
                                whileHover={{ scale: 1.05, x: 10 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-black/10 transition-all active:scale-95 flex items-center justify-center gap-2 hover:bg-slate-50"
                            >
                                Become a Partner <ChevronRight size={20} />
                            </motion.button>
                        </FadeIn>
                    </div>
                    <div className="relative perspective-1000">
                        <motion.img
                            initial={{ opacity: 0, rotateY: 30, x: 50 }}
                            animate={{ opacity: 1, rotateY: 3, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            whileHover={{ rotateY: 0, scale: 1.02 }}
                            src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800&q=80"
                            alt="Happy Business Owner"
                            className="rounded-[3rem] shadow-2xl border-8 border-white/10 rotate-3 hover:rotate-0 transition-transform duration-700 w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* How it helps */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <StaggerContainer className="grid md:grid-cols-3 gap-12">
                        <StaggerItem>
                            <div className="text-center group">
                                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <Users size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-slate-900">Reach More Customers</h3>
                                <p className="text-slate-500 leading-relaxed font-medium">
                                    Put your menu in front of thousands of hungry customers in your area who are looking for exactly what you serve.
                                </p>
                            </div>
                        </StaggerItem>
                        <StaggerItem>
                            <div className="text-center group">
                                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <TrendingUp size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-slate-900">Increase Revenue</h3>
                                <p className="text-slate-500 leading-relaxed font-medium">
                                    Our partners see an average of 30% increase in revenue within the first 3 months of joining SANGAPAY.
                                </p>
                            </div>
                        </StaggerItem>
                        <StaggerItem>
                            <div className="text-center group">
                                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <PieChart size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-slate-900">Data Insights</h3>
                                <p className="text-slate-500 leading-relaxed font-medium">
                                    Get access to powerful analytics to understand your customers better and optimize your menu.
                                </p>
                            </div>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <FadeIn direction="up">
                        <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 text-slate-900 tracking-tight">Ready to scale your business?</h2>
                        <p className="text-slate-500 text-xl mb-12 font-medium">Join over 5,000 restaurants and stores growing with SANGAPAY.</p>
                    </FadeIn>
                    <ScaleIn delay={0.2}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary hover:bg-blue-700 text-white px-12 py-5 rounded-2xl font-black text-xl shadow-xl shadow-primary/30 transition-all flex items-center justify-center gap-3 mx-auto"
                        >
                            Start Partner Application
                        </motion.button>
                    </ScaleIn>
                </div>
            </section>
        </main>
    );
};

export default Vendors;
