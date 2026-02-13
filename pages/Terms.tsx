import React from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Animations';
import { ScrollText, ShieldCheck, AlertTriangle } from 'lucide-react';

const Terms: React.FC = () => {
    return (
        <main className="overflow-x-hidden bg-slate-50 min-h-screen">
            <section className="pt-32 pb-20 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <FadeIn>
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Terms of Services</h1>
                        <div className="flex items-center gap-2 text-primary font-bold bg-primary/10 px-4 py-2 rounded-full w-fit mb-12">
                            <ScrollText size={18} />
                            <span>Effective Date: [Insert Date]</span>
                        </div>
                    </FadeIn>

                    <StaggerContainer className="space-y-12">
                        {/* 1. About SangaEats */}
                        <StaggerItem>
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. About SangaEats</h2>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    SangaEats is a technology platform that connects customers who order food or goods, restaurants and merchants (“Merchants”), and independent delivery partners (“Riders”).
                                </p>
                                <p className="text-slate-600 leading-relaxed font-medium bg-slate-50 p-4 rounded-xl border-l-4 border-primary">
                                    SangaEats is not a restaurant, food manufacturer, or delivery company. We provide a digital marketplace that facilitates transactions between independent parties.
                                </p>
                            </section>
                        </StaggerItem>

                        {/* 2. Eligibility */}
                        <StaggerItem>
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Eligibility</h2>
                                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                    <li>Be at least 18 years old</li>
                                    <li>Have the legal capacity to enter a contract under Nigerian law</li>
                                    <li>Provide accurate and complete registration information</li>
                                </ul>
                                <p className="text-slate-500 text-sm mt-2">We may suspend or terminate accounts that violate these Terms.</p>
                            </section>
                        </StaggerItem>

                        {/* 3. User Accounts */}
                        <StaggerItem>
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Accounts</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-emerald-50/50 p-5 rounded-xl border border-emerald-100">
                                        <h3 className="font-bold text-emerald-900 mb-2">You are responsible for:</h3>
                                        <ul className="text-sm text-emerald-800 space-y-1">
                                            <li>• Maintaining confidentiality of your login credentials</li>
                                            <li>• All activities under your account</li>
                                            <li>• Providing accurate delivery details</li>
                                        </ul>
                                    </div>
                                    <div className="bg-red-50/50 p-5 rounded-xl border border-red-100">
                                        <h3 className="font-bold text-red-900 mb-2">You agree not to:</h3>
                                        <ul className="text-sm text-red-800 space-y-1">
                                            <li>• Create false accounts</li>
                                            <li>• Use another person’s identity</li>
                                            <li>• Use the platform for unlawful activities</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </StaggerItem>

                        {/* 4. Orders & Payments */}
                        <StaggerItem>
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Orders & Payments</h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-2">4.1 Placing Orders</h3>
                                        <p className="text-slate-600 text-sm">When you place an order, you enter into a contract directly with the Merchant. SangaEats acts as an intermediary. All food preparation, quality, ingredients, and hygiene standards are the responsibility of the Merchant.</p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-2">4.2 Pricing</h3>
                                        <p className="text-slate-600 text-sm">Prices displayed on the Platform may include item price, delivery fee, service fee, and taxes. Prices may change without notice.</p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-2">4.3 Payments</h3>
                                        <p className="text-slate-600 text-sm">We may process payments via debit cards, bank transfers, wallet systems, and third-party providers. All payment processing complies with Central Bank of Nigeria (CBN) regulations. SangaEats does not store full card details.</p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-2">4.4 Refunds</h3>
                                        <p className="text-slate-600 text-sm">Refunds may be issued for order not delivered, wrong item delivered, or confirmed food quality issues. Refund decisions are at SangaEats’s reasonable discretion after investigation.</p>
                                    </div>
                                </div>
                            </section>
                        </StaggerItem>

                        {/* 5. Delivery Services */}
                        <StaggerItem>
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Delivery Services</h2>
                                <p className="text-slate-600 mb-4">Delivery is performed by independent Riders. SangaEats does not employ Riders, control their routes, or guarantee delivery times. We are not liable for delays caused by traffic, weather, or force majeure.</p>
                            </section>
                        </StaggerItem>

                        {/* 6. Merchant Terms */}
                        <StaggerItem>
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Merchant Terms</h2>
                                <p className="text-slate-600 mb-4">Merchants using SangaEats agree to comply with Nigerian food safety regulations, maintain required business licenses, follow hygiene and health standards, and provide accurate menu listings. SangaEats reserves the right to remove any Merchant that violates Nigerian law or customer safety standards.</p>
                            </section>
                        </StaggerItem>

                        {/* 7. Rider Terms */}
                        <StaggerItem>
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Rider Terms</h2>
                                <p className="text-slate-600 mb-4">Riders are independent contractors and must possess valid identification, have legal right to operate in Nigeria, maintain required vehicle documentation, and follow road safety laws. SangaEats may suspend Riders who engage in fraud, deliver unsafe behavior, or violate platform policies.</p>
                            </section>
                        </StaggerItem>

                        {/* 8. Cancellations */}
                        <StaggerItem>
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Cancellations</h2>
                                <p className="text-slate-600 mb-4">Customers may cancel orders before the Merchant accepts the order (no penalty). After acceptance, cancellations may incur a fee. Merchants may cancel orders due to unavailability or operational issues. SangaEats reserves final discretion in disputes.</p>
                            </section>
                        </StaggerItem>

                        {/* 9. Prohibited Conduct */}
                        <StaggerItem>
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Prohibited Conduct</h2>
                                <div className="flex gap-4 items-start bg-red-50 p-4 rounded-xl">
                                    <AlertTriangle className="text-red-500 shrink-0 mt-1" />
                                    <p className="text-slate-700 text-sm">You may not use the Platform for illegal purposes, harass Riders or Merchants, manipulate reviews, attempt fraud, or interfere with platform security. Violations may result in suspension or legal action under Nigerian law.</p>
                                </div>
                            </section>
                        </StaggerItem>

                        {/* 10. Intellectual Property */}
                        <StaggerItem>
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Intellectual Property</h2>
                                <p className="text-slate-600 mb-4">All content on the Platform including logos, branding, software, and designs are owned by SangaEats or licensed to us. You may not reproduce or modify our intellectual property without written consent.</p>
                            </section>
                        </StaggerItem>

                        {/* 11. Data Protection & Privacy */}
                        <StaggerItem>
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Data Protection & Privacy</h2>
                                <p className="text-slate-600 mb-4">SangaEats complies with Nigeria Data Protection Regulation (NDPR) 2019 and Nigeria Data Protection Act. We collect and process personal data lawfully, fairly, and transparently. Users have the right to access, correct, and delete their data. See our Privacy Policy for full details.</p>
                            </section>
                        </StaggerItem>

                        {/* 12. Limitation of Liability */}
                        <StaggerItem>
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Limitation of Liability</h2>
                                <p className="text-slate-600 mb-4">To the fullest extent permitted under Nigerian law, SangaEats is not liable for food quality issues, allergic reactions, Merchant/Rider misconduct, or delays. Our total liability shall not exceed the amount paid for the disputed order.</p>
                            </section>
                        </StaggerItem>

                        {/* 13. Indemnification */}
                        <StaggerItem>
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Indemnification</h2>
                                <p className="text-slate-600 mb-4">You agree to indemnify SangaEats against claims arising from your misuse of the Platform, violation of these Terms, or breach of Nigerian law.</p>
                            </section>
                        </StaggerItem>

                        {/* 14. Dispute Resolution */}
                        <StaggerItem>
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Dispute Resolution</h2>
                                <p className="text-slate-600 mb-2"><strong>14.1 Governing Law:</strong> These Terms are governed by the laws of the Federal Republic of Nigeria.</p>
                                <p className="text-slate-600 mb-4"><strong>14.2 Dispute Process:</strong> Disputes shall first be resolved through internal complaint resolution, then mediation (if required), and finally Nigerian courts of competent jurisdiction. Jurisdiction: Lagos State, Nigeria.</p>
                            </section>
                        </StaggerItem>

                        {/* 15. Force Majeure */}
                        <StaggerItem>
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">15. Force Majeure</h2>
                                <p className="text-slate-600 mb-4">SangaEats shall not be liable for delays caused by government restrictions, network failures, civil unrest, flooding, pandemics, or any event beyond reasonable control.</p>
                            </section>
                        </StaggerItem>

                        {/* 16. Amendments */}
                        <StaggerItem>
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">16. Amendments</h2>
                                <p className="text-slate-600 mb-4">We may update these Terms from time to time. Users will be notified via in-app notification, email, or website update. Continued use constitutes acceptance.</p>
                            </section>
                        </StaggerItem>

                        {/* 17. Termination */}
                        <StaggerItem>
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">17. Termination</h2>
                                <p className="text-slate-600 mb-4">We may suspend or terminate your account if you breach these Terms, engage in fraud, or pose risk to the platform. Users may delete their account at any time.</p>
                            </section>
                        </StaggerItem>

                        {/* 18. Contact Information */}
                        <StaggerItem>
                            <section className="bg-slate-900 text-white p-8 rounded-[2rem]">
                                <h2 className="text-2xl font-bold mb-6">18. Contact Information</h2>
                                <div className="space-y-4">
                                    <p className="font-bold text-lg">SangaEats</p>
                                    <p className="text-slate-300">Registered Address: [Insert Address]</p>
                                    <p className="text-slate-300">CAC Registration Number: [Insert CAC Number]</p>
                                    <p className="text-slate-300">Email: <a href="mailto:support@SangaEats.com" className="text-primary hover:text-white transition-colors">support@SangaEats.com</a></p>
                                    <p className="text-slate-300">Phone: [Insert Phone Number]</p>
                                </div>
                            </section>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>
        </main>
    );
};

export default Terms;
