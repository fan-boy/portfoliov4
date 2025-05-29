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
  <section className={`${altBg ? "bg-gray-50" : "bg-background"} border-t border-gray-100 py-16`}>
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
  "https://cataas.com/cat?width=1200&height=480&31",
  "https://cataas.com/cat?width=1200&height=480&32",
  "https://cataas.com/cat?width=1200&height=480&33",
  "https://cataas.com/cat?width=1200&height=480&34",
  "https://cataas.com/cat?width=1200&height=480&35",
  "https://cataas.com/cat?width=1200&height=480&36",
  "https://cataas.com/cat?width=1200&height=480&37",
];

// --- Main Page ---
const UniversityPark: React.FC = () => (
  <TransitionWrapper>
    <DefaultPage>
      {/* Header */}
      <Section>
        <h1 className="text-5xl font-extrabold tracking-tight mb-6">University Park: Designing a Digital Platform for Collective Sustainability</h1>
        <div className="flex flex-wrap gap-8 text-gray-500 text-base mb-8">
          <span><strong>Role:</strong> Lead Product Designer – Vision, Strategy, and Execution</span>
        </div>
        <p className="text-xl text-gray-700 leading-relaxed font-light mb-2">
          University Park, an innovative residential community, set out to transform sustainability from a distant aspiration into a vibrant, everyday reality. As Lead Product Designer, I spearheaded the creation of a digital platform that inspires, educates, and activates residents—combining behavioral science, gamification, and community engagement to spark measurable, lasting change.
        </p>
      </Section>

      <FullImage src={catImages[0]} alt="Community engagement visual (placeholder)" />

      {/* The Challenge */}
      <Section altBg>
        <h2 className="text-2xl font-bold mb-6">The Challenge</h2>
        <p className="mb-4 text-lg leading-relaxed font-light">
          How do you motivate hundreds of households, spanning ages and backgrounds, to not just learn about sustainability but to make it a visible, rewarding, and shared part of daily life? The platform had to be intuitive for all users, scalable for future growth, and robust enough to support both resident participation and committee oversight.
        </p>
      </Section>

      <FullImage src={catImages[1]} alt="Resident interviews and insights (placeholder)" />

      {/* Discovery & Research */}
      <Section >
        <h2 className="text-2xl font-bold mb-6">Discovery & Research</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg font-light mb-4">
          <li>Resident Insights: Conducted interviews and surveys across the community to understand motivations, digital fluency, and barriers. Residents wanted practical, actionable tips and opportunities to celebrate small wins together.</li>
          <li>Expert Collaboration: Partnered with sustainability experts and benchmarked leading eco-communities, drawing on models that blend education, shared resources, and accessible design.</li>
          <li>Committee Workshops: Worked closely with the Sustainability Committee to clarify needs around data collection, engagement, and program management.</li>
        </ul>
      </Section>

      <FullImage src={catImages[2]} alt="Persona mapping and card sorting (placeholder)" />

      {/* Strategy & Information Architecture */}
      <Section altBg>
        <h2 className="text-2xl font-bold mb-6">Strategy & Information Architecture</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg font-light mb-4">
          <li>Persona Mapping & Card Sorting: Facilitated workshops to define clear, intuitive structures for sustainability topics and resources.</li>
          <li>Community-First Features: Prioritized peer-to-peer support, knowledge sharing, and visible progress—mirroring best practices in sustainable community design.</li>
          <li>Dual Experience Flows: Crafted tailored journeys for residents (actionable practices, progress tracking, community connection) and admins (real-time insights, easy content management, scalable program tools).</li>
        </ul>
      </Section>

      <FullImage src={catImages[3]} alt="Design sprint or gamification visual (placeholder)" />

      {/* Design & Prototyping */}
      <Section>
        <h2 className="text-2xl font-bold mb-6">Design & Prototyping</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg font-light mb-4">
          <li>Design Sprints: Led four rapid ideation sprints, iterating on features and interfaces based on resident and committee feedback.</li>
          <li>Gamification: Introduced leveling, digital badges, and physical rewards (plaques, community merchandise) to drive engagement, inspired by successful green apps and platforms.</li>
          <li>Community Forum: Designed a digital space for residents to share progress, ask questions, and celebrate achievements—fostering belonging and shared purpose.</li>
          <li>Admin Dashboards: Built intuitive editing tools and real-time analytics for committee members, ensuring accessibility for non-technical users and supporting future growth.</li>
        </ul>
      </Section>

      <FullImage src={catImages[4]} alt="Usability testing or onboarding flow (placeholder)" />

      {/* Testing & Iteration */}
      <Section altBg>
        <h2 className="text-2xl font-bold mb-6">Testing & Iteration</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg font-light mb-4">
          <li>Usability Testing: Ran multiple rounds with residents of all ages. Early feedback led to a clearer onboarding flow and a prominent “Our Mission” section to ground the platform’s purpose.</li>
          <li>Navigation Refinement: Simplified information architecture, making it easy for residents to find relevant actions and track their impact.</li>
          <li>Visual Engagement: Streamlined profile pages to showcase personal and community progress, balancing gamification to appeal to both families and adults.</li>
        </ul>
      </Section>

      <FullImage src={catImages[5]} alt="Platform dashboard or community progress (placeholder)" />

      {/* Final Solution */}
      <Section>
        <h2 className="text-2xl font-bold mb-6">Final Solution</h2>
        <h3 className="text-lg font-semibold mt-4 mb-2">For Residents:</h3>
        <ul className="list-disc pl-6 space-y-2 text-lg font-light mb-4">
          <li>Seamless onboarding with clear value propositions.</li>
          <li>Curated library of sustainability practices with actionable steps and community-sourced tips.</li>
          <li>Gamified progress tracking, recognition, and an active community forum.</li>
        </ul>
        <h3 className="text-lg font-semibold mt-4 mb-2">For Admins:</h3>
        <ul className="list-disc pl-6 space-y-2 text-lg font-light mb-4">
          <li>Real-time dashboards to monitor participation, impact, and program health.</li>
          <li>Simple tools for updating content, launching new challenges, and managing household activity.</li>
          <li>Scalable design system ready for future initiatives.</li>
        </ul>
      </Section>

      <FullImage src={catImages[6]} alt="Impact or community celebration (placeholder)" />

      {/* Impact */}
      <Section altBg>
        <h2 className="text-2xl font-bold mb-6">Impact</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg font-light mb-4">
          <li>The platform became the central hub for University Park’s sustainability movement, driving measurable increases in engagement and eco-friendly behaviors.</li>
          <li>The Sustainability Committee gained powerful new tools for managing, tracking, and celebrating progress, freeing up time for strategic initiatives.</li>
          <li>The project established a replicable model for other communities seeking to foster sustainability through digital design and resident empowerment.</li>
        </ul>
      </Section>

      {/* Reflection */}
      <Section>
        <h2 className="text-2xl font-bold mb-6">Reflection</h2>
        <p className="mb-4 text-lg font-light leading-relaxed">
          This project was a masterclass in aligning community values, behavioral science, and digital product design. By listening deeply, prototyping quickly, and iterating with real users, we built a platform that not only educates but also mobilizes and connects an entire community around a shared mission for sustainable living.
        </p>
        <p className="text-lg font-light leading-relaxed">
          Interested in the design system, gamification flows, or admin dashboards that powered this transformation? Let’s connect—I’m happy to share more.
        </p>
      </Section>
    </DefaultPage>
  </TransitionWrapper>
);

export default UniversityPark;
