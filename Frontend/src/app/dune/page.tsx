import React from "react";
import Image from 'next/image'
import TransitionWrapper from "../components/TransitionWrapper";
import PageSection from "../components/Pages/PageSection";
import DefaultPage from "../components/Pages/DefaultPage";
import OrgDashboard from "../../../public/assets/Dune/dashboard.webp"




const DuneSecurity = () => {

    return (
        <TransitionWrapper>
            <DefaultPage >
                <PageSection theme="light">
                    <PageSection.ConstrainedWidth>
                        <div className="w-full mt-30 flex flex-col ">
                            <span className="flex flex-row gap-4 justify-bottom">
                                <h2 className="w-1/3 text-gray-600">
                                    Dune Security
                                </h2>
                                <h3>Designing the future of User Adaptive Risk Management</h3>
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
                                    Dune Security is a next-gen User Adaptive Risk Management platform that helps Fortune 500 CISOs and SecOps teams proactively reduce human-driven cyber risk. As the sole product designer and a core member of the founding team, I led the complete redesign and evolution of our platform-transforming complex security data into actionable, user-centric workflows and driving company growth from $400k to over $1M ARR in under a year.
                                </p>
                                <span className="flex flex-row gap-4">
                            <span className="w-1/2">
                                <h3>
                                    The Problem
                                </h3>
                                <p>
                                    Security awareness training is broken, especially in the face of AI-powered phishing and deepfakes. CISOs and security teams are overwhelmed by fragmented data from their security stack (IAM, EDR, DLP, SEG) and lack clear, actionable insights to reduce user risk. Existing solutions felt like static report cards, not dynamic tools for prevention and action.
                                </p>
                            </span>
                            <span className="w-1/2 flex flex-col gap-2">
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

                            </span>
                            </span>
                            </span>
                            
                            </span>
                            
                            <hr></hr>
                            <h3>Process & Execution</h3>
                            <span className=" w-3/4 flex flex-col gap-2">
                                <h3>
                                    Understanding the User & Market
                                </h3>

                                <ul>
                                    <li>CISO Committee: Tapped into a group of 50+ CISOs for feedback, surfacing the need for real-time, actionable risk insights-not just compliance checklists.</li>
                                    <li>Customer Success Feedback: Mined weekly check-ins to uncover pain points, such as “I can’t tell which users are putting us most at risk” or “the dashboard feels like a report card, not a control center.”</li>
                                    <li>Competitive Analysis: Benchmarked KnowBe4, Hoxhunt, Wiz, and others to identify opportunities for clarity, speed, and differentiation.</li>
                                </ul>

                            </span>
                            <span className=" w-3/4 flex flex-col gap-2">
                                <h3>
                                    Making Data Actionable
                                </h3>

                                <ul>
                                    <li>Collaboration with Backend: Worked hand-in-hand with engineers to understand raw risk data, then distilled it into 12 key signals (e.g., repeated phishing failures, low training engagement, high-risk permissions).</li>
                                    <li>Unified Risk Score: Designed an algorithm and visualization that let CISOs instantly see their riskiest departments and users, with drill-downs for root cause analysis.</li>
                                    <li>Adaptive Training: Built workflows that auto-assign targeted training to users with high risk scores, reducing manual intervention for security teams.</li>
                                </ul>

                            </span>
                            <span className="w-3/4 flex flex-col gap-2">
                                <h3>
                                    Building for Scale & Usability
                                </h3>

                                <ul>
                                    <li>Design System (Stillsuit): Developed a robust, modular system supporting:
                                        CISO dashboards (org-wide risk, trends, benchmarking)
                                        Employee views (personal risk, training progress)
                                        Accessibility for an older workforce (high-contrast, large type, keyboard navigation)
                                        Reusable data visualizations (heatmaps, timelines, action cards)</li>
                                    <li>Rapid Iteration: Instituted a two-week design-to-production cycle, enabling us to quickly respond to customer feedback-such as adding a “Trending Threats” widget after multiple CISOs requested real-time intelligence.</li>

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

export default DuneSecurity