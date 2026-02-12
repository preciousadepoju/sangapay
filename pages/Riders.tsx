import React from 'react';
import { Bike, DollarSign, Clock, Shield, Smartphone, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from '../components/Animations';

const Riders: React.FC = () => {
    return (
        <main className="overflow-x-hidden">
            {/* Riders Hero */}
            <section className="relative pt-24 pb-32 bg-slate-900 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900/80 to-slate-900"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <FadeIn delay={0.1}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black uppercase tracking-[0.1em] mb-8">
                                <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                                    <Bike size={14} />
                                </motion.div>
                                <span>Become a Captain</span>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2} direction="left">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
                                Earn money on <br /><span className="text-emerald-400">your terms.</span>
                            </h1>
                        </FadeIn>
                        <FadeIn delay={0.3} direction="up">
                            <p className="text-xl text-slate-400 mb-12 max-w-lg leading-relaxed font-medium">
                                Join the fastest growing delivery network. Set your own schedule, get paid weekly, and keep 100% of your tips.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.4} direction="up">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.05, gap: '12px' }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-emerald-500 hover:bg-emerald-600 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
                                >
                                    Sign Up Now <ChevronRight size={20} />
                                </motion.button>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Rider Benefits */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <FadeIn direction="up">
                            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight">Why Ride with SangaEats?</h2>
                            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
                                We offer the best rates and support in the industry.
                            </p>
                        </FadeIn>
                    </div>

                    <StaggerContainer className="grid md:grid-cols-3 gap-8">
                        <StaggerItem className="h-full">
                            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-emerald-500/30 transition-all group h-full hover:shadow-xl hover:shadow-emerald-500/5">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-emerald-500 shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <DollarSign size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900">Competitive Earnings</h3>
                                <p className="text-slate-500 leading-relaxed font-medium">
                                    Earn more with our low commission rates and keep 100% of the tips you make.
                                </p>
                            </div>
                        </StaggerItem>
                        <StaggerItem className="h-full">
                            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-emerald-500/30 transition-all group h-full hover:shadow-xl hover:shadow-emerald-500/5">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-emerald-500 shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Clock size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900">Flexible Hours</h3>
                                <p className="text-slate-500 leading-relaxed font-medium">
                                    You are the boss. Work whenever you want, as much or as little as you like.
                                </p>
                            </div>
                        </StaggerItem>
                        <StaggerItem className="h-full">
                            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-emerald-500/30 transition-all group h-full hover:shadow-xl hover:shadow-emerald-500/5">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-emerald-500 shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Shield size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900">Insurance Coverage</h3>
                                <p className="text-slate-500 leading-relaxed font-medium">
                                    We' ve got you covered with accident insurance on every trip you make.
                                </p>
                            </div>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>

            {/* Requirements */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <FadeIn direction="right">
                                <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 tracking-tight">What do you need?</h2>
                                <ul className="space-y-6">
                                    {['Valid Driver\'s License', 'Vehicle Registration', 'Proof of Insurance', 'Smartphone (iOS or Android)'].map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex items-center gap-4 text-lg font-bold text-slate-300 group"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-900 transition-colors">
                                                <Shield size={16} />
                                            </div>
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                            </FadeIn>
                        </div>
                        <div className="relative">
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
                                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                                className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full"
                            ></motion.div>
                            <ScaleIn delay={0.2}>
                                <div className="bg-slate-800 p-10 rounded-[3rem] border border-slate-700 relative z-10 hover:border-emerald-500/30 transition-colors">
                                    <h3 className="text-2xl font-bold mb-6">Download Rider App</h3>
                                    <p className="text-slate-400 mb-8 font-medium">Get the app and start your application today.</p>
                                    <div className="flex flex-col gap-4">
                                        <motion.button
                                            whileHover={{ scale: 1.02, x: 5 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="bg-white text-slate-900 px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-emerald-50 transition-colors"
                                        >
                                            <Smartphone size={20} /> Download for iOS
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.02, x: 5 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="bg-transparent border border-slate-600 text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-slate-700 transition-colors"
                                        >
                                            <Smartphone size={20} /> Download for Android
                                        </motion.button>
                                    </div>
                                </div>
                            </ScaleIn>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Riders;
