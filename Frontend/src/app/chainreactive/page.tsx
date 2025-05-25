import React from "react";
import Image from 'next/image'
import TransitionWrapper from "../components/TransitionWrapper";
import PageSection from "../components/Pages/PageSection";
import DefaultPage from "../components/Pages/DefaultPage";
import OrgDashboard from "../../../public/assets/Dune/dashboard.webp"




const ChainReactive = () => {

    return (
        <TransitionWrapper>
            <DefaultPage >
                <PageSection theme="light">
                    <PageSection.ConstrainedWidth>
                        <div className="w-full mt-30 flex flex-col ">
                            <span className="flex flex-row gap-4 justify-bottom">
                                <h2 className="w-1/3 text-gray-600">
                                    Chain Reactive
                                </h2>
                                <h3>Designing a Dynamic Online Ordering Platform for Small Businesses</h3>
                            </span>
                        </div>
                        </PageSection.ConstrainedWidth>
                        <PageSection.FullWidth>
                            <div className="flex mt-20 flex-col w-full  h-screen pt-10 pl-10 justify-bottom items-right bg-gray-200 rounded-lg ">
                            <div className="relative  w-full h-full  overflow-hidden p-4 rounded-lg ">
                            <Image src={OrgDashboard} className=" absolute "  alt="Dune Org Dashboard"/>
                            </div>
                            </div>
                        </PageSection.FullWidth>
                        <PageSection.ConstrainedWidth>
                        <div className="w-full mt-30 items-center flex flex-col gap-20">
                            <span className="w-full grid grid-cols-3">
                                <span>
                                    <h3>Role</h3>
                                    <p>Lead Product designer</p>
                                </span>
                                <span>
                                    <h3>Role</h3>
                                    <p>Lead Product designer</p>
                                </span>
                                <span>
                                    <h3>Role</h3>
                                    <p>Lead Product designer</p>
                                </span>
                            </span>
                            <span className="flex flex-row w-full">
                                <span className="w-2/5">
                                    <h2>
                                        Overview
                                    </h2>
                                </span>
                            <span className="w-full flex flex-col gap-4">
                                
                                <p>
                                ChainReactive is a dynamic website builder designed to empower small, independently owned restaurants-especially those in rural communities-to offer seamless, personalized online ordering. As Lead Product Designer and Developer, I owned the vision, strategy, and execution for a new order scheduling system that dramatically improved both business operations and the customer experience.

                                </p>
                                <span className="flex flex-row gap-4">
                            <span className="w-1/2">
                                <h3>
                                    Business Challenge
                                </h3>
                                <p>
                                Local restaurants were struggling with unpredictable order volumes, manual scheduling, and static menus that made resource planning difficult. Customers wanted the flexibility to schedule orders in advance for group events or busy periods, but existing solutions were confusing and failed to connect menu availability and pricing with order timing. The market demanded a system as intuitive and robust as those used by large chains, but tailored for smaller businesses with limited resources.
                                </p>
                            </span>
                            {/* <span className="w-1/2 flex flex-col gap-2">
                                <h3>
                                    My Role
                                </h3>

                                As the only product designer, I owned:
                                <ul>
                                    <li>Product strategy & roadmap (with CEO/CTO/PM)</li>
                                    <li>UX/UI for the entire platform (from onboarding to advanced analytics)</li>
                                    <li>Design system creation (Stillsuit)</li>
                                    <li>Customer/user research (via CISO committee, surveys, and customer success feedback)</li>
                                    <li>Marketing & GTM collateral (sales decks, investor materials, one-pagers)</li>
                                    <li>Mentoring & design advocacy (instilling design thinking in a technical founding team)</li>
                                    <li>Design-to-development workflow (reducing design-to-production time to 2 weeks)</li>
                                </ul>

                            </span> */}
                            </span>
                            </span>
                            
                            </span>
                            
                            <hr></hr>
                            <h3>Approach</h3>
                            <span className=" w-3/4 flex flex-col gap-2">
                                <h3>
                                Research & Discovery
                                </h3>

                                <ul>
                                    <li>User Interviews: Conducted in-depth interviews with restaurant owners and customers to pinpoint workflow bottlenecks and unmet needs-such as the frustration of manually tracking future orders or the inability to see what menu items would be available at different times.                                    </li>
                                    <li>Journey Mapping: Mapped the end-to-end experience for both owners and customers, identifying critical touchpoints where digital solutions could drive efficiency and satisfaction.                                    </li>
                                    <li>Competitive Analysis: Benchmarked Postmates, Uber Eats, Doordash, and others to identify opportunities for clarity, speed, and differentiation.</li>
                                </ul>

                            </span>
                           
                            <span className="w-3/4 flex flex-col gap-2">
                                <h3>
                                Product Strategy & Vision
                                </h3>

                                <ul>
                                    <li>Vision Alignment: Defined a product vision positioning ChainReactive as the most adaptable and user-friendly ordering platform for small businesses.</li>
                                    <li>Roadmap Planning: Collaborated with executive leadership and engineering to prioritize scalable scheduling, dynamic pricing, and real-time menu updates-features often only seen in enterprise platforms.</li>

                                </ul>

                            </span>
                            <span className="w-3/4 flex flex-col gap-2">
                                <h3>
                                    Driving Buy-In & Design Culture
                                </h3>

                                <ul>
                                    <li>Weekly Design Reviews: Established a cadence with leadership for feedback and approvals, shifting the company mindset from “tech-first” to “user-first.”</li>
                                    <li>Mentorship: Coached PMs, engineers, and even founders on design thinking, empathy mapping, and user impact-resulting in faster, more aligned product decisions.</li>

                                </ul>

                            </span>
                            <hr></hr>
                            <span className="w-3/4 flex flex-col gap-2">
                                <h3>
                                    Results & Impact
                                </h3>

                                <ul>
                                    <li>ARR Growth: Helped drive revenue from $400k to over $1M ARR in 12 months, with most new customers coming from referrals.</li>
                                    <li>Customer Success: 32% increase in employee training completion rates; 90% drop in dashboard-related support tickets; CISOs reporting 50% faster risk mitigation.</li>
                                    <li>Product Adoption: Expanded to 15+ Fortune 500 clients; platform cited as a “must-have” by security leaders for its clarity and actionability.</li>
                                    <li>Fundraising & GTM: Designed investor decks and sales materials that directly contributed to a successful $6M seed round.</li>

                                </ul>

                            </span>
                            <hr></hr>
                            <span className="w-3/4 flex flex-col gap-2">
                                <h3>
                                    Reflection
                                </h3>
                                <p>
                                    Working as the sole designer at Dune Security was a masterclass in ownership, prioritization, and cross-functional leadership. I built a future-proof foundation (design system, data storytelling, rapid iteration) that enabled us to scale quickly and deliver real value to both CISOs and end users. If I had more resources, I would have invested even further in micro-interactions and polish-but our focus on speed and impact proved critical in the startup environment.
                                    If you’d like to see examples of the Stillsuit design system, our data visualizations, or the GTM materials that helped us close our seed round, I’m happy to share more.
                                </p>
                            </span>
                        </div>

                    </PageSection.ConstrainedWidth>
                </PageSection>
            </DefaultPage>
        </TransitionWrapper>
    )


}

export default ChainReactive