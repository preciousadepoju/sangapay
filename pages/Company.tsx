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
                                We exist to <span className="text-primary">redefine convenience</span> across the World.
                            </h1>
                        </FadeIn>
                        <FadeIn delay={0.2} direction="up">
                            <p className="text-lg text-slate-500 mb-6 leading-relaxed font-medium">
                                Sanga Eats was built to remove friction from everyday life, delivering what people need, when they need it.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.3} direction="up">
                            <p className="text-lg text-slate-500 mb-6 leading-relaxed font-medium">
                                Through technology and logistics infrastructure, we connect customers, merchants, and riders into a seamless, scalable commerce network.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.4} direction="up">
                            <p className="text-lg text-slate-500 mb-6 leading-relaxed font-medium text-slate-900/80 font-semibold p-4 bg-primary/5 rounded-xl border border-primary/10">
                                Join thousands who trust Sanga Eats to deliver meals, groceries, and everyday essentials in under 30 minutes.
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
                                <p className="text-slate-500 font-medium leading-relaxed">Empowering businesses and transforming daily life through reliable, technology-driven logistics and delivery solutions.</p>
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
                                <p className="text-slate-500 font-medium leading-relaxed">To build a globally recognized delivery network that transforms commerce, creates economic opportunity, and powers communities through technology and reliability.</p>
                            </motion.div>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>
        </main>
    );
};

export default Company;
