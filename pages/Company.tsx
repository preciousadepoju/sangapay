import React from 'react';
import { Target, Users, Globe } from 'lucide-react';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '../components/Animations';
import { motion } from 'framer-motion';

const Company: React.FC = () => {
    return (
        <main className="overflow-x-hidden">
            {/* About Content */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <FadeIn delay={0.1}>
                            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">
                                We're on a mission to <span className="text-primary">redefine convenience.</span>
                            </h1>
                        </FadeIn>
                        <FadeIn delay={0.2} direction="up">
                            <p className="text-lg text-slate-500 mb-6 leading-relaxed font-medium">
                                SangaEats was founded with a simple goal: to make it easier for people to get what they need, when they need it.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.3} direction="up">
                            <p className="text-lg text-slate-500 mb-6 leading-relaxed font-medium">
                                We are building the infrastructure for the future of commerce in Africa, connecting customers, vendors, and riders in a seamless ecosystem.
                            </p>
                        </FadeIn>
                    </div>

                    <StaggerContainer className="grid gap-8">
                        <StaggerItem>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-shadow"
                            >
                                <div className="inline-block p-3 bg-white rounded-xl shadow-sm mb-4">
                                    <Target className="text-primary" size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-slate-900">Our Mission</h3>
                                <p className="text-slate-500 font-medium">To deliver happiness to every doorstep, every day.</p>
                            </motion.div>
                        </StaggerItem>
                        <StaggerItem>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-shadow"
                            >
                                <div className="inline-block p-3 bg-white rounded-xl shadow-sm mb-4">
                                    <Globe className="text-primary" size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-slate-900">Our Vision</h3>
                                <p className="text-slate-500 font-medium">To be the operating system for local commerce across the continent.</p>
                            </motion.div>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>
        </main>
    );
};

export default Company;
