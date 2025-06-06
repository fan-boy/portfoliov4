import React from "react";

import TransitionWrapper from "../components/TransitionWrapper";
import DefaultPage from "../components/Pages/DefaultPage";
import OrgDashboard from "../../../public/assets/Dune/dashboard.webp";
import before from "../../../public/assets/Dune/before.webp";

import PageSection from "../components/Pages/PageSection";
import FullImage from "../components/Pages/FullImage";



// --- Main Page ---
const ChainReactive: React.FC = () => (
  <TransitionWrapper>
    <DefaultPage>
      {/* Header */}
      <PageSection>
        <div className="w-full flex flex-col gap-16">
          <PageSection.FullWidth>
            <div className="w-10/12 mt-48 flex flex ">
              <span className="w-4/12">
                <h2 className="text-fontsecondary tracking-tight ">Chain Reactive</h2>
              </span>
              <span className="w-8/12">
                <h2 className="text-fontprimary tracking-tight ">Empowering Small Restaurants with Seamless Online Ordering</h2>
              </span>


            </div>
            <div className="w-10/12 flex flex mb-6">

              <span className="w-4/12">
                {/* <h2 className="text-4xl font-extrabold text-gray-500 tracking-tight mb-6">Dune Security</h2> */}
              </span>
              <span className=" flex flex-row gap-4 text-fontsecondary mb-8 mt-3">
                <span>2021-2022</span>
                <span>Product Design, Research, Product Strategy, Web Developement</span>

              </span>

            </div>
            
            <FullImage src={OrgDashboard} alt="Collage of fragmented dashboards (placeholder)" />
          </PageSection.FullWidth>
          <PageSection.ConstrainedWidth>
            <span className="flex flex-col gap-16">
             
              <span className="leading-relaxed mb-2 p-8 mt-12 flex flex-col gap-4 bg-gray-50 rounded-lg">
                <h3>Summary</h3>
                <h4 className="text-fontprimary ">
                I led the end-to-end design and launch of a new order scheduling system that transformed both business operations and the customer journey, enabling small restaurants to offer a modern, flexible online ordering experience.
                </h4>

              </span>
        
              <span>
                <h2 className="text-fontprimary mb-6">The Challenge</h2>
                <p className="mb-4 text-fontsecondary leading-relaxed ">
                Local restaurants struggled with unpredictable order volumes, manual scheduling headaches, and static menus that complicated resource planning. Customers wanted to schedule orders ahead for events or busy times, but existing tools were confusing and disconnected menu availability and pricing from order timing.
                </p>
                <blockquote className="border-l-4 border-indigo-400 pl-6 italic text-gray-600 bg-indigo-50/30 py-3 rounded-md mb-2">
                “I wish I could see what’s available before I pick up my order, but the menu never matches the time I want.” – Customer Interview
                </blockquote>
              </span>
            </span>

          </PageSection.ConstrainedWidth>
          <PageSection.FullWidth>
            <div className="w-full">
              <FullImage src={before} alt="Roadmap snapshot or prioritization matrix (placeholder)" />
            </div>
          </PageSection.FullWidth>
          <div className="w-full flex flex-col gap-16">
          <PageSection.ConstrainedWidth>
            <span className="w-full flex items-left flex-col">
              <h2 className="text-fontprimary mb-6">Research & Strategy</h2>
              <ul className="list-disc pl-6 space-y-2 text-lg text-fontsecondary leading-relaxed mb-4">
                <li>User Interviews: Conducted in-depth interviews with restaurant owners and customers to uncover workflow bottlenecks and unmet needs.</li>
                <li>Journey Mapping: Identified key moments where digital solutions could drive efficiency and satisfaction.</li>
          <li>Vision Alignment: Positioned ChainReactive as the most adaptable, user-friendly ordering platform for small businesses.</li>
          <li>Roadmap Planning: Prioritized scalable scheduling, dynamic pricing, and real-time menu updates—features typically reserved for enterprise platforms.</li>
              </ul>
            </span>
           </PageSection.ConstrainedWidth>
           {/* <PageSection.FullWidth>
            <span className="w-full flex flex-col gap-4">
              
              

              <span className=" grid grid-cols-4 gap-4">
              <span className="p-5 bg-green-100 rounded-lg">↑ Employee training completion rates</span>
              <span className="p-5 bg-green-100 rounded-lg">↓ Dashboard-related support tickets</span>
              <span className="p-5 bg-green-100 rounded-lg">Expansion to new enterprise clients</span>
              <span className="p-5 bg-green-100 rounded-lg">Faster time-to-production for new features</span>
              
        
              </span>
             
            </span>
            </PageSection.FullWidth> */}
            </div>
          <PageSection.FullWidth>
            <div className="w-full">
              <FullImage src={OrgDashboard} alt="Roadmap snapshot or prioritization matrix (placeholder)" />
            </div>
          </PageSection.FullWidth>
          <PageSection.ConstrainedWidth>
            <span className="w-full flex flex-col">
              <h2 className="text-fontprimary mb-6">Cross-Functional Leadership</h2>
              <p className="mb-4 text-fontsecondary leading-relaxed">
              Workshops: Facilitated collaborative sessions with engineering, business development, and customer success to co-create solutions and ensure buy-in.
              </p>
              <p className="mb-4 text-fontsecondary leading-relaxed">
              Design System: Established robust design systems and documentation to support rapid iteration and consistent implementation as the platform scaled.
              </p>
            </span>
          </PageSection.ConstrainedWidth>
          <PageSection.FullWidth>
            <div className="w-full">
              <FullImage src={OrgDashboard} alt="Roadmap snapshot or prioritization matrix (placeholder)" />
            </div>
          </PageSection.FullWidth>
          <PageSection.ConstrainedWidth>
            <span className="w-full flex flex-col">
              <h2 className="text-fontprimary mb-6">Design & Execution</h2>
              <ul className="list-disc pl-6 space-y-2 text-fontsecondary leading-relaxed mb-4">
              <li>Customer Flow: Developed a streamlined user flow requiring customers to select a pickup or delivery time upfront, surfacing only available menu items and accurate pricing for that window.</li>
          <li>Time Selector: Designed an intuitive dropdown time selector, reducing friction and cutting the average order process from over 10 minutes to under 3 minutes.</li>
          <li>Admin Tools: Built simple, powerful admin tools for business owners to adjust menu items, pricing, and availability by time slot.</li>
          <li>Seamless Integration: Ensured smooth integration of scheduling logic, menu management, and payment systems, matching the quality of best-in-class platforms like Square and Toast.</li>
              </ul>
              {/* <blockquote className="border-l-4 border-indigo-400 pl-6 italic text-gray-600 bg-indigo-50/30 py-3 rounded-md mb-2">
                “The dashboard feels like a report card, not a control center.”
              </blockquote> */}
            </span>
          </PageSection.ConstrainedWidth>
          <PageSection.FullWidth>
            <div className="w-full">
              <FullImage src={OrgDashboard} alt="Roadmap snapshot or prioritization matrix (placeholder)" />
            </div>
          </PageSection.FullWidth>
          <PageSection.ConstrainedWidth>
            <span className="w-full flex flex-col">
              <h2 className="text-fontprimary mb-6">Pilot & Iteration</h2>
              <h3 className="text-fontprimary  mt-4 mb-2">Making Data Actionable</h3>
              <ul className="list-disc pl-6 space-y-2 text-fontsecondary leading-relaxed mb-4">
              <li>Pilot Launch: Rolled out with three partner restaurants, collecting analytics and qualitative feedback to refine the UI and admin dashboard.</li>
              <li>Continuous Improvement: Analyzed order patterns and customer satisfaction data, driving iterative updates such as daily menu changes and dynamic pricing based on demand.</li>
              </ul>
              {/* <h3 className="text-lg font-semibold mt-4 mb-2">Building for Scale & Usability: The Stillsuit Design System</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg font-light mb-4">
                <li>Developed the “Stillsuit” design system to standardize UI components and documentation, reducing onboarding time for new engineers by 50%.</li>
                <li>Supported both CISO dashboards (org-wide risk, benchmarking) and employee views (personal risk, training progress), with accessibility for an older workforce.</li>
              </ul>
              <h3 className="text-lg font-semibold mt-4 mb-2">Iteration & Feedback Loops</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg font-light">
                <li>Instituted a two-week design-to-production cycle for rapid iteration.</li>
                <li>Incorporated customer feedback quickly, e.g., adding a “Trending Threats” widget after multiple CISO requests.</li>
              </ul> */}
            </span>
          </PageSection.ConstrainedWidth>
          <PageSection.FullWidth>
            <div className="w-full">
              <FullImage src={OrgDashboard} alt="Roadmap snapshot or prioritization matrix (placeholder)" />
            </div>
          </PageSection.FullWidth>
          <PageSection.ConstrainedWidth>
            <span className="w-full flex flex-col">
              <h2 className="text-fontprimary mb-6">Results</h2>
              <ul className="list-disc pl-6 space-y-2 text-fontsecondary leading-relaxed mb-4">
              <li>Time-to-Order: Reduced customer time-to-order from over 10 minutes to under 3 minutes.</li>
          <li>Operational Efficiency: Enabled restaurant owners to plan staffing and inventory more accurately, resulting in fewer missed orders and reduced food waste.</li>
          <li>Order Volume: Increased scheduled orders by 60% in the first quarter post-launch.</li>
          <li>Repeat Business: Drove a 30% increase in repeat business from group and event orders.</li>
          <li>Market Expansion: Accelerated platform expansion to new markets, with the scheduling feature emerging as a key differentiator.</li>
              </ul>
            </span>
          </PageSection.ConstrainedWidth>
          <PageSection.FullWidth>
            <div className="w-full">
              <FullImage src={OrgDashboard} alt="Roadmap snapshot or prioritization matrix (placeholder)" />
            </div>
          </PageSection.FullWidth>
          <PageSection.ConstrainedWidth>
            <span className="w-full flex flex-col">
              <h2 className="text-fontprimary mb-6">Reflection</h2>
              <p className="mb-4 text-fontsecondary leading-relaxed">
              Designing and launching ChainReactive’s scheduling system meant aligning diverse stakeholders, balancing operational complexity with user simplicity, and building scalable systems for future growth. This project became a cornerstone of ChainReactive’s value proposition, enabling small businesses to compete digitally and adapt to evolving consumer expectations.
              </p>
              
            </span>
         
            <span className="w-full flex flex-col mt-12">
              <h2 className="text-fontprimary mb-6">Lead Designer POV</h2>
              <p className="mb-4 text-fontsecondary leading-relaxed leading-relaxed">
              This experience reinforced my belief in the power of user-centered systems thinking—if I had more time or resources, I would have invested further in predictive analytics for order trends and even more granular menu customization.
              </p>
            </span>
          </PageSection.ConstrainedWidth>
        </div>
      </PageSection>
    </DefaultPage>
  </TransitionWrapper>
);

export default ChainReactive;
