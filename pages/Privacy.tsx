import React from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Animations';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const Privacy: React.FC = () => {
    return (
        <main className="overflow-x-hidden bg-slate-50 min-h-screen">
            <section className="pt-32 pb-20 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <FadeIn>
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Privacy Policy</h1>
                        <p className="text-lg text-slate-500 font-medium mb-4">Effective Date: [Insert Date]</p>
                        <div className="flex items-center gap-2 text-primary font-bold bg-primary/10 px-4 py-2 rounded-full w-fit mb-12">
                            <Shield size={18} />
                            <span>NDPR & Nigeria Data Protection Act Compliant</span>
                        </div>
                    </FadeIn>

                    <StaggerContainer className="space-y-12">
                        <StaggerItem>
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    SangaEats Nigeria Limited ("SangaEats," "we," "us") is committed to protecting personal data in compliance with:
                                </p>
                                <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-600">
                                    <li>Nigeria Data Protection Regulation (NDPR) 2019</li>
                                    <li>Nigeria Data Protection Act 2023</li>
                                    <li>Applicable CBN and FCCPC regulations</li>
                                </ul>
                            </section>
                        </StaggerItem>

                        <StaggerItem>
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Data We Collect</h2>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                        <h3 className="font-bold text-slate-900 mb-3">A. Customers</h3>
                                        <ul className="space-y-2 text-sm text-slate-600">
                                            <li>• Name</li>
                                            <li>• Phone number</li>
                                            <li>• Email</li>
                                            <li>• Delivery address</li>
                                            <li>• Payment details</li>
                                            <li>• Device/IP information</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                        <h3 className="font-bold text-slate-900 mb-3">B. Riders</h3>
                                        <ul className="space-y-2 text-sm text-slate-600">
                                            <li>• Name & Phone number</li>
                                            <li>• BVN/NIN (where required)</li>
                                            <li>• Driver's license</li>
                                            <li>• Vehicle details</li>
                                            <li>• Bank details</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                        <h3 className="font-bold text-slate-900 mb-3">C. Merchants</h3>
                                        <ul className="space-y-2 text-sm text-slate-600">
                                            <li>• Business name</li>
                                            <li>• CAC registration</li>
                                            <li>• TIN (if applicable)</li>
                                            <li>• Bank details</li>
                                            <li>• Business address</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </StaggerItem>

                        <StaggerItem>
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Legal Basis for Processing</h2>
                                <p className="text-slate-600 leading-relaxed mb-4">We process personal data based on:</p>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    {['Contract performance', 'Legal compliance', 'Legitimate business interest', 'User consent'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </StaggerItem>

                        <StaggerItem>
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Purpose of Processing</h2>
                                <p className="text-slate-600 leading-relaxed">We use data to facilitate orders, process payments, verify identity (KYC), prevent fraud, improve platform services, and comply with Nigerian laws.</p>
                            </section>
                        </StaggerItem>

                        <StaggerItem>
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Sharing</h2>
                                <p className="text-slate-600 leading-relaxed mb-4">We may share data with payment processors (e.g., licensed PSPs), logistics partners, regulatory authorities, and law enforcement (where legally required). We do not sell personal data.</p>
                            </section>
                        </StaggerItem>

                        <StaggerItem>
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Data Retention</h2>
                                <p className="text-slate-600 leading-relaxed">Personal data is retained only as long as necessary for contract fulfillment, legal and tax compliance, and fraud prevention.</p>
                            </section>
                        </StaggerItem>

                        <StaggerItem>
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Data Subject Rights</h2>
                                <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                                    <p className="text-slate-700 mb-4 font-medium">Under NDPR and Nigeria Data Protection Act, users may:</p>
                                    <ul className="grid sm:grid-cols-2 gap-3 text-slate-600 mb-6">
                                        <li>• Request access to personal data</li>
                                        <li>• Request correction</li>
                                        <li>• Request deletion</li>
                                        <li>• Withdraw consent</li>
                                    </ul>
                                    <div className="flex items-center gap-2 text-primary font-bold text-sm">
                                        <FileText size={16} />
                                        <span>File complaint with the Nigeria Data Protection Commission (NDPC)</span>
                                    </div>
                                    <p className="mt-4 text-sm text-slate-500">Requests may be sent to: <a href="mailto:privacy@SangaEats.ng" className="text-primary hover:underline">privacy@SangaEats.ng</a></p>
                                </div>
                            </section>
                        </StaggerItem>

                        <StaggerItem>
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Security Measures</h2>
                                <p className="text-slate-600 leading-relaxed mb-4">We implement encryption, secure server infrastructure, access control policies, KYC verification, and fraud monitoring systems.</p>
                            </section>
                        </StaggerItem>

                        <StaggerItem>
                            <section className="grid sm:grid-cols-2 gap-8">
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3">9. Cross-Border Transfers</h2>
                                    <p className="text-slate-600 text-sm leading-relaxed">Where data is transferred outside Nigeria, such transfer shall comply with NDPR cross-border data transfer requirements.</p>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3">10. Data Protection Officer</h2>
                                    <p className="text-slate-600 text-sm leading-relaxed">SangaEats shall designate a Data Protection Officer (DPO). Contact: <a href="mailto:privacy@SangaEats.ng" className="text-primary hover:underline">privacy@SangaEats.ng</a></p>
                                </div>
                            </section>
                        </StaggerItem>

                        <StaggerItem>
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-3">11. Policy Updates</h2>
                                <p className="text-slate-600 leading-relaxed">We may update this Policy periodically. Continued use of the Platform constitutes acceptance.</p>
                            </section>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>
        </main>
    );
};

export default Privacy;
