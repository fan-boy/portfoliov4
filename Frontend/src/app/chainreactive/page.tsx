'use client'
import React, { useEffect } from "react";
import TransitionWrapper from "../components/TransitionWrapper";
import DefaultPage from "../components/Pages/DefaultPage";
import PageSection from "../components/Pages/PageSection";
import Divider from "../components/Miscelaneous/Divider";
import UnifiedMedia from "../components/Miscelaneous/UnifiedMedia";
import { useChat } from "../context/ChatContext";
import AnimatedBlobs from "../components/AnimatedBlobs";

import ChainDashboard from "../../../public/assets/ChainReactive/hero.webp";
import MenuExample from "../../../public/assets/ChainReactive/menu-example.webp";
// import AdminDashboard from "../../../public/assets/ChainReactive/admin-dashboard.webp";
// import PizzaBuilder from "../../../public/assets/ChainReactive/pizza-builder.webp";
// import OrderFlow from "../../../public/assets/ChainReactive/order-flow.webp";
// import Cafe from "../../../public/assets/ChainReactive/cafe-example.webp";
// import Thai from "../../../public/assets/ChainReactive/thai-example.webp";

const ChainReactive: React.FC = () => {
  const { chatOpen } = useChat();
  useEffect(() => {
    if (chatOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = '' };
  }, [chatOpen]);

  const chainGradient = "#f6fafd";

  return (
    <TransitionWrapper>
      {!chatOpen && (
        <AnimatedBlobs expanded={false} loading={false} />
      )}
      <DefaultPage>
        <PageSection>
          <div className="w-full flex flex-col gap-16">
            {/* Header/Intro */}
            <PageSection.FullWidth>
              <div className="w-10/12 mt-48 flex">
                <span className="w-4/12">
                  <h2 className="tracking-tight text-fontsecondary">ChainReactive</h2>
                </span>
                <span className="w-8/12">
                  <h2 className="tracking-tight text-fontprimary">
                    Designing a POS-Integrated Website Builder for Small Businesses
                  </h2>
                </span>
              </div>
              <div className="w-10/12 flex flex mb-6">
                <span className="w-4/12"></span>
                <span className="w-8/12 flex flex-row gap-4 text-fontsecondary mb-8 mt-3">
                  <span>2020-2022,</span>
                  <span>Product Design, Research, Systems Design, Full-Stack Development</span>
                </span>
              </div>
              <UnifiedMedia
                src={ChainDashboard}
                bg
                gradient={chainGradient}
                alt="ChainReactive platform dashboard"
                imgWidth={1200}
                imgHeight={630}
              />
            </PageSection.FullWidth>

            {/* Summary */}
            <PageSection.ConstrainedWidth>
              <span className="flex flex-col gap-16">
                <span className="leading-relaxed mb-2 p-8 mt-12 flex flex-col gap-4 bg-gray-50 rounded-lg">
                  <h3>Summary</h3>
                  <h4 className="text-fontprimary">
                    As the founding designer and developer, I transformed an internal business need into a scalable platform used by dozens of small businesses. Partnering with our CEO—a backend architect who built our POS—I led the creation of an integrated online ordering system that enabled restaurants to launch branded, real-time, POS-synced ordering websites in minutes, addressing rapid digital transformation challenges during COVID-19.
                  </h4>
                </span>
              </span>
            </PageSection.ConstrainedWidth>
            {/* Background & Opportunity */}
            <PageSection.ConstrainedWidth>
              <span>
                <h2 className="text-fontprimary mb-6">Background & Opportunity</h2>
                <p className="mb-4 text-fontsecondary leading-relaxed">
                  COVID forced small businesses—especially in smaller towns—to digitize quickly, but existing platforms either charged high fees, lacked POS integration, or were too complex for non-technical business owners. As our CEO's spouse operated one of the first client restaurants, we saw first-hand the need for rapid, seamless transitions from in-person to online ordering.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-fontsecondary mb-4">
                  <li>Manual website/menu updates were time-consuming and error-prone</li>
                  <li>Delivery-focused solutions carried high commission rates and required technical onboarding</li>
                  <li>Staff shortages made phone order management and in-restaurant customer service difficult</li>
                </ul>
              </span>
            </PageSection.ConstrainedWidth>
            {/* Platform Overview */}
            <PageSection.ConstrainedWidth>
              <span>
                <h2 className="text-fontprimary mb-6">Product Solution: Platform Overview</h2>
                <ul className="list-disc pl-6 space-y-2 text-fontsecondary mb-4">
                  <li>Dynamic Website Generator: Used data from our POS to auto-generate custom-branded websites and sync menus, pricing, and item availability in real time.</li>
                  <li>2-Step Ordering Flow: Simplified customer interface, enabling order placement in less than a minute.</li>
                  <li>Unified Admin: Businesses used a single dashboard to manage both online and in-store orders.</li>
                  <li>QR Ordering: Enabled in-restaurant, contactless ordering via QR codes.</li>
                  <li>Payment Integration: Stripe-powered checkout with saved payments for repeat customers.</li>
                </ul>
              </span>
            </PageSection.ConstrainedWidth>

            {/* For Business Owners & Customers */}
            <PageSection.ConstrainedWidth>
              <span>
                <h3 className="mt-5 mb-2 text-fontprimary">For Business Owners:</h3>
                <ul className="list-disc pl-6 space-y-2 text-fontsecondary mb-2">
                  <li>Setup required no technical expertise—10 minutes from onboarding to live branded online menu, no manual double-entry.</li>
                </ul>
                <h3 className="mt-5 mb-2 text-fontprimary">For Customers:</h3>
                <ul className="list-disc pl-6 space-y-2 text-fontsecondary mb-6">
                  <li>Easy visual browsing, instant repeat ordering, real-time pickup estimates, frictionless mobile-first interface.</li>
                </ul>
              </span>
            </PageSection.ConstrainedWidth>
            <PageSection.FullWidth>
              <UnifiedMedia
                src={MenuExample}
                bg
                gradient={chainGradient}
                alt="Menu automation example"
                imgWidth={1200}
                imgHeight={630}
              />
            </PageSection.FullWidth>

            {/* Go-to-Market Strategy */}
            <Divider />
            <PageSection.ConstrainedWidth>
              <span>
                <h2 className="text-fontprimary mb-6">Go-to-Market Strategy</h2>
                <p className="mb-4 text-fontsecondary leading-relaxed">
                  Initially offered as a free add-on to our POS during beta, the platform quickly proved value in reducing labor demands and increasing order volume. After demonstrating ROI and ease of use, the offering transitioned to a paid model, with scalable pricing based on usage and feature set.
                </p>
              </span>
            </PageSection.ConstrainedWidth>

            {/* Business Impact & Results */}
            <Divider />
            <PageSection.ConstrainedWidth>
              <span>
                <h2 className="text-fontprimary mb-6">Business Impact & Results</h2>
                <ul className="list-disc pl-6 space-y-2 text-fontsecondary mb-2">
                  <li>Enabled over 40 small businesses to digitize order management during the height of the pandemic.</li>
                  <li>Average client revenue increased by 30–40% per month after rollout.</li>
                  <li>Order completion times dropped below 60 seconds.</li>
                  <li>Customer re-order rates exceeded 85% within 30 days.</li>
                  <li>Staff saved an average of 15 hours per week on order processing and menu updates.</li>
                </ul>
              </span>
            </PageSection.ConstrainedWidth>

            {/* Key Advantages */}
            <Divider />
            <PageSection.ConstrainedWidth>
              <span>
                <h2 className="text-fontprimary mb-6">Key Advantages</h2>
                <ul className="list-disc pl-6 space-y-2 text-fontsecondary mb-2">
                  <li>Direct POS Integration: Real-time updates reduced manual errors and increased operational efficiency.</li>
                  <li>Constraint-Driven Design: Limited templates ensured all websites were fast and mobile-optimized.</li>
                  <li>Scalable System: Single codebase supported diverse business types and locations, including international expansion.</li>
                  <li>Customer-Led Roadmap: Continuous feedback loops informed platform enhancements, prioritizing usability and measurable business value.</li>
                </ul>
              </span>
            </PageSection.ConstrainedWidth>

            {/* Reflection */}
            <Divider />
            <PageSection.ConstrainedWidth>
              <span>
                <h2 className="text-fontprimary mb-6">Reflection</h2>
                <p className="mb-4 text-fontsecondary leading-relaxed">
                  By identifying an authentic need within our existing customer base and leveraging core technical infrastructure, we quickly scaled a solution that blended operational efficiency with user-centric simplicity. Bringing the platform to market—starting from a real-world pain point—ensured we delivered clear ROI, ease of use, and business continuity for our small business customers.
                </p>
              </span>
            </PageSection.ConstrainedWidth>
          </div>
        </PageSection>
      </DefaultPage>
    </TransitionWrapper>
  );
};

export default ChainReactive;
