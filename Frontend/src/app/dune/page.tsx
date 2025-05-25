import React from "react";
import Image from "next/image";
import TransitionWrapper from "../components/TransitionWrapper";
import PageSection from "../components/Pages/PageSection";
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
  "https://cataas.com/cat?width=1200&height=480&21",
  "https://cataas.com/cat?width=1200&height=480&22",
  "https://cataas.com/cat?width=1200&height=480&23",
  "https://cataas.com/cat?width=1200&height=480&24",
  "https://cataas.com/cat?width=1200&height=480&25",
  "https://cataas.com/cat?width=1200&height=480&26",
  "https://cataas.com/cat?width=1200&height=480&27",
];

// --- Main Page ---
const DuneSecurity: React.FC = () => (
  <TransitionWrapper>
    <DefaultPage>
      {/* Header */}
      <Section>
        <h1 className="text-5xl font-extrabold tracking-tight mb-6">Dune Security: Redefining User Adaptive Risk Management</h1>
        <div className="flex flex-wrap gap-8 text-gray-500 text-base mb-8">
          <span><strong>Role:</strong> Lead Product Designer, Founding Team</span>
          <span><strong>Year:</strong> 2023–2024</span>
          <span><strong>Team:</strong> CEO, CTO, PM, Engineers</span>
          <span><strong>Product:</strong> User Adaptive Risk Management for Fortune 500 CISOs & SecOps</span>
        </div>
        <p className="text-xl text-gray-700 leading-relaxed font-light mb-2">
          As the sole product designer, I led a ground-up redesign of Dune Security’s platform—transforming fragmented, complex security data into actionable, user-centric workflows. My work not only improved the product experience but also drove strategic shifts in how the company positioned, sold, and scaled the platform.
        </p>
      </Section>

      <FullImage src={catImages[0]} alt="Collage of fragmented dashboards (placeholder)" />

      {/* The Challenge */}
      <Section altBg>
        <h2 className="text-2xl font-bold mb-6">The Challenge</h2>
        <p className="mb-4 text-lg leading-relaxed font-light">
          Security awareness training was failing to keep pace with AI-powered threats. CISOs and security teams were overwhelmed by fragmented data (IAM, EDR, DLP, SEG) and lacked actionable insights to reduce human-driven cyber risk. Existing tools felt like static report cards, not dynamic control centers for prevention and action.
        </p>
        <blockquote className="border-l-4 border-indigo-400 pl-6 italic text-gray-600 bg-indigo-50/30 py-3 rounded-md mb-2">
          “I can’t tell which users are putting us most at risk.” – Fortune 500 CISO
        </blockquote>
      </Section>

      <FullImage src={catImages[1]} alt="Roadmap snapshot or prioritization matrix (placeholder)" />

      {/* Hypotheses & Success Metrics */}
      <Section>
        <h2 className="text-2xl font-bold mb-6">Hypotheses & Success Metrics</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg font-light mb-4">
          <li>Real-time, actionable risk insights (vs. compliance checklists) will increase CISO engagement and drive faster risk mitigation.</li>
          <li>Adaptive, automated training will raise employee completion rates and reduce manual workload for security teams.</li>
          <li>A unified design system will speed up development and improve platform consistency.</li>
        </ul>
        <ul className="list-disc pl-6 space-y-2 text-lg font-light">
          <li>↑ Employee training completion rates</li>
          <li>↓ Dashboard-related support tickets</li>
          <li>Expansion to new enterprise clients</li>
          <li>Faster time-to-production for new features</li>
        </ul>
      </Section>

      <FullImage src={catImages[2]} alt="User quotes, persona profiles, or affinity maps (placeholder)" />

      {/* Business & Product Strategy */}
      <Section altBg>
        <h2 className="text-2xl font-bold mb-6">Business & Product Strategy</h2>
        <p className="mb-4 text-lg leading-relaxed font-light">
          I co-created the product roadmap with the CEO and CTO, using a RICE scoring model to prioritize features that balanced user impact and engineering effort. For example, we launched the adaptive training module before advanced analytics, as user interviews revealed immediate pain around manual interventions. This accelerated customer value and improved our sales narrative.
        </p>
        <p className="mb-4 text-lg leading-relaxed font-light">
          I also worked closely with the GTM team, translating user research into sales enablement materials and product messaging. The new risk score visualization became a core part of our sales pitch, helping the GTM team clearly articulate ROI to prospects and close deals more effectively.
        </p>
      </Section>

      <FullImage src={catImages[3]} alt="Wireframes or flow diagrams of the risk score dashboard (placeholder)" />

      {/* User Research & Insights */}
      <Section>
        <h2 className="text-2xl font-bold mb-6">User Research & Insights</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg font-light mb-4">
          <li>CISO Committee: Tapped 50+ CISOs for feedback—highlighting the need for real-time, actionable insights.</li>
          <li>Customer Success Feedback: Weekly check-ins surfaced core pain points and usability issues.</li>
          <li>Competitive Analysis: Benchmarked KnowBe4, Hoxhunt, Wiz, and others for opportunities in clarity, speed, and differentiation.</li>
        </ul>
        <blockquote className="border-l-4 border-indigo-400 pl-6 italic text-gray-600 bg-indigo-50/30 py-3 rounded-md mb-2">
          “The dashboard feels like a report card, not a control center.”
        </blockquote>
      </Section>

      <FullImage src={catImages[4]} alt="Design system documentation or onboarding guide (placeholder)" />

      {/* Design Process */}
      <Section altBg>
        <h2 className="text-2xl font-bold mb-6">Design Process</h2>
        <h3 className="text-lg font-semibold mt-4 mb-2">Making Data Actionable</h3>
        <ul className="list-disc pl-6 space-y-2 text-lg font-light mb-4">
          <li>Collaborated with backend engineers to distill raw risk data into 12 key signals (e.g., repeated phishing failures, low training engagement).</li>
          <li>Designed a unified risk score and visualization for instant identification of riskiest users/departments, with drill-downs for root cause analysis.</li>
          <li>Built adaptive workflows to auto-assign targeted training, reducing manual intervention.</li>
        </ul>
        <h3 className="text-lg font-semibold mt-4 mb-2">Building for Scale & Usability: The Stillsuit Design System</h3>
        <ul className="list-disc pl-6 space-y-2 text-lg font-light mb-4">
          <li>Developed the “Stillsuit” design system to standardize UI components and documentation, reducing onboarding time for new engineers by 50%.</li>
          <li>Supported both CISO dashboards (org-wide risk, benchmarking) and employee views (personal risk, training progress), with accessibility for an older workforce.</li>
        </ul>
        <h3 className="text-lg font-semibold mt-4 mb-2">Iteration & Feedback Loops</h3>
        <ul className="list-disc pl-6 space-y-2 text-lg font-light">
          <li>Instituted a two-week design-to-production cycle for rapid iteration.</li>
          <li>Incorporated customer feedback quickly, e.g., adding a “Trending Threats” widget after multiple CISO requests.</li>
        </ul>
      </Section>

      <FullImage src={catImages[5]} alt="Decision matrix or flowchart showing major pivots (placeholder)" />

      {/* Key Decisions & Pivots */}
      <Section>
        <h2 className="text-2xl font-bold mb-6">Key Decisions & Pivots</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg font-light mb-4">
          <li>Shifted from static reporting to dynamic, actionable dashboards based on CISO committee feedback.</li>
          <li>Prioritized adaptive training workflows to address low engagement and high manual workload.</li>
          <li>Invested in a robust design system early to enable rapid scaling and consistent experience.</li>
        </ul>
      </Section>

      <FullImage src={catImages[6]} alt="Slide from sales deck or GTM materials (placeholder)" />

      {/* Org-Level Impact */}
      <Section altBg>
        <h2 className="text-2xl font-bold mb-6">Org-Level Impact</h2>
        <p className="mb-4 text-lg leading-relaxed font-light">
          My design work led to a strategic shift in how Dune Security viewed and communicated user risk. The new risk score visualization fundamentally changed how the GTM team positioned the product, making user risk transparent and actionable. This clarity enabled sales to articulate value more effectively, directly influencing both sales messaging and future roadmap priorities.
        </p>
        <blockquote className="border-l-4 border-indigo-400 pl-6 italic text-gray-600 bg-indigo-50/30 py-3 rounded-md mb-2">
          “The new dashboard made it so much easier to show prospects exactly how Dune reduces risk—our sales conversations are now much more compelling.” – GTM Lead
        </blockquote>
      </Section>

      {/* Outcomes & Impact */}
      <Section>
        <h2 className="text-2xl font-bold mb-6">Outcomes & Impact</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg font-light mb-4">
          <li>32% increase in employee training completion</li>
          <li>90% drop in dashboard-related support tickets</li>
          <li>Expanded to 15+ Fortune 500 clients; platform cited as a “must-have” by security leaders</li>
          <li>Designed investor decks and sales materials that helped close a $6M seed round</li>
        </ul>
      </Section>

      {/* Reflection */}
      <Section altBg>
        <h2 className="text-2xl font-bold mb-6">Reflection & Learnings</h2>
        <p className="mb-4 text-lg font-light leading-relaxed">
          Working as the sole designer was a masterclass in ownership, prioritization, and cross-functional leadership. Building the design system and rapid feedback loops enabled us to scale quickly and deliver real value. With more resources, I would have invested further in micro-interactions and visual polish—but focusing on speed and user impact was critical in our startup phase.
        </p>
      </Section>
    </DefaultPage>
  </TransitionWrapper>
);

export default DuneSecurity;
