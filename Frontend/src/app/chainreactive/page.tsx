import React from "react";
import Image from "next/image";
import TransitionWrapper from "../components/TransitionWrapper";
import DefaultPage from "../components/Pages/DefaultPage";

// --- Types ---
type SectionProps = {
  children: React.ReactNode;
  altBg?: boolean;
};

type FullImageProps = {
  src: string;
  alt: string;
};

// --- Components ---
const Section: React.FC<SectionProps> = ({ children, altBg = false }) => (
  <section className={`${altBg ? "bg-gray-50" : "bg-white"} border-t border-gray-100 py-16`}>
    <div className="max-w-3xl mx-auto px-6">{children}</div>
  </section>
);

const FullImage: React.FC<FullImageProps> = ({ src, alt }) => (
  <div className="w-full my-12">
    <div className="relative w-full aspect-[2.5/1] rounded-2xl overflow-hidden shadow-md">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
    </div>
  </div>
);

// --- Cat image placeholders ---
const catImages = [
  "https://cataas.com/cat?width=1200&height=480&10",
  "https://cataas.com/cat?width=1200&height=480&11",
  "https://cataas.com/cat?width=1200&height=480&12",
  "https://cataas.com/cat?width=1200&height=480&13",
  "https://cataas.com/cat?width=1200&height=480&14",
  "https://cataas.com/cat?width=1200&height=480&15",
  "https://cataas.com/cat?width=1200&height=480&16",
];

// --- Main Page ---
const ChainReactive: React.FC = () => (
  <TransitionWrapper>
    <DefaultPage>
      {/* Header */}
      <Section>
        <h1 className="text-5xl font-extrabold tracking-tight mb-6">ChainReactive: Empowering Small Restaurants with Seamless Online Ordering</h1>
        <div className="flex flex-wrap gap-8 text-gray-500 text-base mb-8">
          <span><strong>Role:</strong> Lead Product Designer (Vision, Strategy, Execution)</span>
          <span><strong>Product:</strong> Website builder & order scheduling for small, independently owned restaurants</span>
        </div>
        <p className="text-xl text-gray-700 leading-relaxed font-light mb-2">
          I led the end-to-end design and launch of a new order scheduling system that transformed both business operations and the customer journey, enabling small restaurants to offer a modern, flexible online ordering experience.
        </p>
      </Section>

      <FullImage src={catImages[0]} alt="Before/after user journey map (placeholder)" />

      {/* The Challenge */}
      <Section altBg>
        <h2 className="text-2xl font-bold mb-6">The Challenge</h2>
        <p className="mb-4 text-lg leading-relaxed font-light">
          Local restaurants struggled with unpredictable order volumes, manual scheduling headaches, and static menus that complicated resource planning. Customers wanted to schedule orders ahead for events or busy times, but existing tools were confusing and disconnected menu availability and pricing from order timing.
        </p>
        <blockquote className="border-l-4 border-indigo-400 pl-6 italic text-gray-600 bg-indigo-50/30 py-3 rounded-md mb-2">
          “I wish I could see what’s available before I pick up my order, but the menu never matches the time I want.” – Customer Interview
        </blockquote>
      </Section>

      <FullImage src={catImages[1]} alt="Persona profiles or journey map (placeholder)" />

      {/* Research & Strategy */}
      <Section>
        <h2 className="text-2xl font-bold mb-6">Research & Strategy</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg font-light">
          <li>User Interviews: Conducted in-depth interviews with restaurant owners and customers to uncover workflow bottlenecks and unmet needs.</li>
          <li>Journey Mapping: Identified key moments where digital solutions could drive efficiency and satisfaction.</li>
          <li>Vision Alignment: Positioned ChainReactive as the most adaptable, user-friendly ordering platform for small businesses.</li>
          <li>Roadmap Planning: Prioritized scalable scheduling, dynamic pricing, and real-time menu updates—features typically reserved for enterprise platforms.</li>
        </ul>
      </Section>

      <FullImage src={catImages[2]} alt="Design system documentation or workshop (placeholder)" />

      {/* Cross-Functional Leadership */}
      <Section altBg>
        <h2 className="text-2xl font-bold mb-6">Cross-Functional Leadership</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg font-light">
          <li>Workshops: Facilitated collaborative sessions with engineering, business development, and customer success to co-create solutions and ensure buy-in.</li>
          <li>Design System: Established robust design systems and documentation to support rapid iteration and consistent implementation as the platform scaled.</li>
        </ul>
      </Section>

      <FullImage src={catImages[3]} alt="Screenshots of time selector and admin dashboard (placeholder)" />

      {/* Design & Execution */}
      <Section>
        <h2 className="text-2xl font-bold mb-6">Design & Execution</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg font-light">
          <li>Customer Flow: Developed a streamlined user flow requiring customers to select a pickup or delivery time upfront, surfacing only available menu items and accurate pricing for that window.</li>
          <li>Time Selector: Designed an intuitive dropdown time selector, reducing friction and cutting the average order process from over 10 minutes to under 3 minutes.</li>
          <li>Admin Tools: Built simple, powerful admin tools for business owners to adjust menu items, pricing, and availability by time slot.</li>
          <li>Seamless Integration: Ensured smooth integration of scheduling logic, menu management, and payment systems, matching the quality of best-in-class platforms like Square and Toast.</li>
        </ul>
      </Section>

      <FullImage src={catImages[4]} alt="Analytics dashboard or timeline (placeholder)" />

      {/* Pilot & Iteration */}
      <Section altBg>
        <h2 className="text-2xl font-bold mb-6">Pilot & Iteration</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg font-light">
          <li>Pilot Launch: Rolled out with three partner restaurants, collecting analytics and qualitative feedback to refine the UI and admin dashboard.</li>
          <li>Continuous Improvement: Analyzed order patterns and customer satisfaction data, driving iterative updates such as daily menu changes and dynamic pricing based on demand.</li>
        </ul>
      </Section>

      <FullImage src={catImages[5]} alt="Scorecard of key metrics (placeholder)" />

      {/* Results */}
      <Section>
        <h2 className="text-2xl font-bold mb-6">Results</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg font-light">
          <li>Time-to-Order: Reduced customer time-to-order from over 10 minutes to under 3 minutes.</li>
          <li>Operational Efficiency: Enabled restaurant owners to plan staffing and inventory more accurately, resulting in fewer missed orders and reduced food waste.</li>
          <li>Order Volume: Increased scheduled orders by 60% in the first quarter post-launch.</li>
          <li>Repeat Business: Drove a 30% increase in repeat business from group and event orders.</li>
          <li>Market Expansion: Accelerated platform expansion to new markets, with the scheduling feature emerging as a key differentiator.</li>
        </ul>
      </Section>

      <FullImage src={catImages[6]} alt="Team photo or reflection (placeholder)" />

      {/* Reflection */}
      <Section altBg>
        <h2 className="text-2xl font-bold mb-6">Reflection</h2>
        <p className="text-lg font-light leading-relaxed mb-2">
          Designing and launching ChainReactive’s scheduling system meant aligning diverse stakeholders, balancing operational complexity with user simplicity, and building scalable systems for future growth. This project became a cornerstone of ChainReactive’s value proposition, enabling small businesses to compete digitally and adapt to evolving consumer expectations.
        </p>
        <p className="text-lg font-light leading-relaxed">
          <span className="font-semibold">Lead Designer POV:</span> This experience reinforced my belief in the power of user-centered systems thinking—if I had more time or resources, I would have invested further in predictive analytics for order trends and even more granular menu customization.
        </p>
      </Section>
    </DefaultPage>
  </TransitionWrapper>
);

export default ChainReactive;
