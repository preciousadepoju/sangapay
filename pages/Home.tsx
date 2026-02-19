import React from 'react';
import {
    ArrowRight,
    Clock,
    ShieldCheck,
    Navigation,
    CreditCard,
    Headphones,
    Store,
    Pizza,
    ShoppingBag,
    HeartPulse,
    Star,
    Download,
    Smartphone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '../components/Animations';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    image: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
    <StaggerItem className="h-full">
        <div className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-[2rem] border border-slate-100 transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 group h-full">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-lg font-bold mb-3 text-slate-900">{title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
        </div>
    </StaggerItem>
);

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, image }) => (
    <StaggerItem className="h-full">
        <div className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
            <div className="aspect-[4/3] overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-8 flex-grow flex flex-col">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                    {icon}
                </div>
                <h3 className="text-2xl font-extrabold mb-3 text-slate-900">{title}</h3>
                <p className="text-slate-500 mb-6 leading-relaxed text-sm font-medium flex-grow">{description}</p>
                <button className="flex items-center gap-2 font-bold text-primary hover:gap-3 transition-all text-sm mt-auto">
                    Learn more <ArrowRight size={18} />
                </button>
            </div>
        </div>
    </StaggerItem>
);

const Step: React.FC<{ number: string; title: string; description: string }> = ({ number, title, description }) => (
    <StaggerItem className="relative flex flex-col items-center text-center p-6">
        <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="w-16 h-16 bg-primary text-white text-2xl font-black rounded-full flex items-center justify-center mb-8 shadow-lg shadow-primary/30 relative z-10 border-4 border-white cursor-pointer"
        >
            {number}
        </motion.div>
        <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
        <p className="text-slate-500 text-sm max-w-[200px] leading-relaxed font-medium">{description}</p>
    </StaggerItem>
);

const Home: React.FC = () => {
    return (
        <main className="overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-20 pb-20 lg:pb-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative z-10 text-center lg:text-left">
                        <FadeIn direction="down" delay={0.1}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.1em] mb-8">
                                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }}>
                                    <Star size={14} fill="currentColor" />
                                </motion.div>
                                <span>WORLD’S MOST RELIABLE</span>
                            </div>
                        </FadeIn>

                        <FadeIn direction="left" delay={0.2}>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Your purchase. <br />
                                Your way. <br />
                                <span className="text-primary inline-block">Right away.</span>
                            </h1>
                        </FadeIn>

                        <FadeIn direction="left" delay={0.3}>
                            <p className="text-lg lg:text-xl text-slate-500 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                                SangaEats is committed to delivering food and essential goods with speed, reliability, and innovation, while empowering local businesses, creating sustainable jobs, and building a delivery infrastructure that transforms communities.
                            </p>
                        </FadeIn>

                        <FadeIn direction="up" delay={0.4}>
                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto bg-primary hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-3"
                                >
                                    <Download size={22} strokeWidth={3} /> Download App
                                </motion.button>
                                <Link to="/vendors">
                                    <motion.button
                                        whileHover={{ scale: 1.05, backgroundColor: "rgba(241, 245, 249, 1)" }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full sm:w-auto bg-white border-2 border-slate-100 hover:border-primary/30 px-10 py-4 rounded-xl font-bold text-lg text-slate-600 transition-all flex items-center justify-center gap-2 hover:text-primary"
                                    >
                                        Become a Vendor
                                    </motion.button>
                                </Link>
                            </div>
                        </FadeIn>

                        <FadeIn direction="up" delay={0.5}>
                            <div className="mt-12 pt-12 border-t border-slate-100 flex items-center gap-6 justify-center lg:justify-start">
                                <div className="flex -space-x-4">
                                    {[
                                        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
                                        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces",
                                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
                                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
                                    ].map((src, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5 + (i * 0.1) }}
                                            className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-sm hover:z-10 hover:scale-110 transition-transform"
                                        >
                                            <img src={src} alt="user" className="w-full h-full object-cover" />
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="text-sm font-bold text-slate-500">
                                    <div className="flex items-center gap-1 text-yellow-400 mb-1">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.8 + (i * 0.1) }}
                                            >
                                                <Star size={16} fill="currentColor" />
                                            </motion.div>
                                        ))}
                                    </div>
                                    <span className="text-slate-900">50,000+</span> satisfied customers
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="relative perspective-1000">
                        <motion.div
                            initial={{ opacity: 0, rotateY: -20, x: 100 }}
                            animate={{ opacity: 1, rotateY: 0, x: 0 }}
                            transition={{ duration: 1, delay: 0.2, type: "spring" }}
                            className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white hover:rotate-0 transition-transform duration-700"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"
                                alt="Delicious Delivery"
                                className="w-full h-auto transform hover:scale-105 transition-transform duration-1000"
                            />
                        </motion.div>
                        {/* Background Decorations */}
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/5 rounded-full blur-[100px] -z-10"
                        ></motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <FadeIn direction='right' className="max-w-2xl">
                            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight">Our Services</h2>
                            <p className="text-slate-500 text-lg leading-relaxed font-medium">
                                We' ve built the ultimate logistics platform to handle all your daily needs, from hot meals to business deliveries.
                            </p>
                        </FadeIn>
                        <FadeIn direction='left'>
                            <motion.button
                                whileHover={{ x: 10 }}
                                className="whitespace-nowrap font-bold text-primary flex items-center gap-2 transition-all"
                            >
                                View all services <ArrowRight size={20} />
                            </motion.button>
                        </FadeIn>
                    </div>

                    <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ServiceCard
                            title="Food Delivery"
                            icon={<Pizza size={28} />}
                            description="Your favorite meals from top local restaurants delivered hot to your doorstep."
                            image="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80"
                        />
                        <ServiceCard
                            title="Grocery Store"
                            icon={<ShoppingBag size={28} />}
                            description="Fresh farm produce and daily household essentials delivered within minutes."
                            image="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80"
                        />
                        <ServiceCard
                            title="Essentials"
                            icon={<HeartPulse size={28} />}
                            description="Healthcare items, pharmacy pick-ups, and urgent personal care products."
                            image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80"
                        />
                        <ServiceCard
                            title="Logistics"
                            icon={<Navigation size={28} />}
                            description="Reliable same-day courier service for your personal and business packages."
                            image="https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=600&q=80"
                        />
                    </StaggerContainer>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <FadeIn direction='up'>
                            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight">Built for Reliability</h2>
                            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
                                We take the stress out of delivery so you can focus on what matters most.
                            </p>
                        </FadeIn>
                    </div>
                    <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<Clock size={28} />}
                            title="Lightning Fast"
                            description="Most deliveries arrive in under 30 minutes. We value your time so you never have to wait."
                        />
                        <FeatureCard
                            icon={<ShieldCheck size={28} />}
                            title="Trusted Riders"
                            description="Our riders are thoroughly vetted and trained to handle your items with care and professionalism."
                        />
                        <FeatureCard
                            icon={<Navigation size={28} />}
                            title="Real-time Tracking"
                            description="Watch your delivery's journey from the store to your door with our advanced GPS tracking."
                        />
                        <FeatureCard
                            icon={<CreditCard size={28} />}
                            title="Secure Payments"
                            description="Multiple payment options including card, transfer, and wallet, all secured by top-tier encryption."
                        />
                        <FeatureCard
                            icon={<Headphones size={28} />}
                            title="24/7 Support"
                            description="A dedicated support team ready to help you with any issues instantly via chat or call."
                        />
                        <FeatureCard
                            icon={<Store size={28} />}
                            title="Local Excellence"
                            description="We partner with the best vendors in your city to ensure high quality and support local businesses."
                        />
                    </StaggerContainer>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <FadeIn direction='up'>
                            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight">How it works</h2>
                            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
                                Getting started with SangaEats is as simple as it gets.
                            </p>
                        </FadeIn>
                    </div>
                    <div className="relative">
                        {/* Connector Line (Desktop) */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="hidden lg:block absolute top-8 left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-slate-100 -z-0 origin-center"
                        ></motion.div>

                        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
                            <Step
                                number="1"
                                title="Download App"
                                description="Get the SangaEats app from App Store or Google Play."
                            />
                            <Step
                                number="2"
                                title="Pick your Need"
                                description="Choose from food, groceries, or courier services."
                            />
                            <Step
                                number="3"
                                title="Live Tracking"
                                description="Watch your rider move towards you in real-time."
                            />
                            <Step
                                number="4"
                                title="Receive Items"
                                description="Collect your order and enjoy our premium service."
                            />
                        </StaggerContainer>
                    </div>
                </div>
            </section>

            {/* App Download Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <ScaleIn>
                        <div className="bg-primary rounded-[3rem] px-8 py-20 lg:p-24 relative overflow-hidden group">
                            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                                <div>
                                    <FadeIn delay={0.2} direction='left'>
                                        <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
                                            <span className="font-brand">SangaEats</span> in <br />your pocket.
                                        </h2>
                                        <p className="text-xl text-slate-400 mb-12 max-w-lg leading-relaxed font-medium">
                                            Experience the fastest, most reliable delivery service. Real-time updates, secure payments, and premium support.
                                        </p>
                                    </FadeIn>
                                    <div className="flex flex-wrap gap-4">
                                        <motion.button
                                            whileHover={{ scale: 1.05, y: -5 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-white text-slate-900 px-8 py-4 rounded-xl font-black flex items-center gap-3 shadow-xl cursor-pointer"
                                        >
                                            <Smartphone size={24} /> App Store
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.05, y: -5 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-white text-slate-900 px-8 py-4 rounded-xl font-black flex items-center gap-3 shadow-xl cursor-pointer"
                                        >
                                            <Smartphone size={24} /> Play Store
                                        </motion.button>
                                    </div>
                                </div>
                                <div className="relative flex justify-center lg:justify-end">
                                    <motion.div
                                        initial={{ y: 50, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.4, type: "spring" }}
                                        className="w-full max-w-[320px] bg-slate-800 rounded-[3rem] p-3 shadow-2xl border-4 border-slate-700 hover:rotate-2 transition-transform duration-500"
                                    >
                                        <div className="aspect-[9/19.5] rounded-[2.5rem] bg-slate-100 overflow-hidden relative">
                                            <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80" alt="SwiftDrop App" className="w-full h-full object-cover opacity-80" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl text-center border border-white/50">
                                                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                                                        <Navigation className="text-white" size={24} strokeWidth={3} />
                                                    </div>
                                                    <h4 className="font-black text-slate-900 text-lg font-brand">SangaEats</h4>
                                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Downloading...</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                            {/* Background Decoration */}
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                                className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-0 translate-x-1/2 -translate-y-1/2"
                            ></motion.div>
                            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] -z-0 -translate-x-1/2 translate-y-1/2"></div>
                        </div>
                    </ScaleIn>
                </div>
            </section>
        </main>
    );
};

export default Home;
