'use client'
import React, { useEffect } from "react";
import TransitionWrapper from "../components/TransitionWrapper";
import DefaultPage from "../components/Pages/DefaultPage";
import PageSection from "../components/Pages/PageSection";
import Divider from "../components/Miscelaneous/Divider";
import UnifiedMedia from "../components/Miscelaneous/UnifiedMedia";
import { useChat } from "../context/ChatContext";
import AnimatedBlobs from "../components/AnimatedBlobs";

// Reusing ChainReactive image assets as placeholders:
import UparkDashboard from "../../../public/assets/UniversityPark/hero.webp";
import Research from "../../../public/assets/UniversityPark/research.webp";
//import cardsort from "../../../public/assets/UniversityPark/cardsort.webp";
import midfi from "../../../public/assets/UniversityPark/mid-fi.webp";
import gamification from "../../../public/assets/UniversityPark/gamification.webp";
import admin from "../../../public/assets/UniversityPark/admin.webp";
// import MenuExample from "../../../public/assets/ChainReactive/menu-example.webp";
// import AdminDashboard from "../../../public/assets/ChainReactive/admin-dashboard.webp";
// import PizzaBuilder from "../../../public/assets/ChainReactive/pizza-builder.webp";
// import OrderFlow from "../../../public/assets/ChainReactive/order-flow.webp";
// import Cafe from "../../../public/assets/ChainReactive/cafe-example.webp";
// import Thai from "../../../public/assets/ChainReactive/thai-example.webp";

const uparkGradient = "#f6fafd";

const UniversityPark: React.FC = () => {
  const { chatOpen } = useChat();
  useEffect(() => {
    if (chatOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = '' };
  }, [chatOpen]);

  return (
    <TransitionWrapper>
      {!chatOpen && (
        <AnimatedBlobs expanded={false} loading={false} />
      )}
      <DefaultPage>
        <PageSection>
          <div className="w-full flex flex-col gap-16">
            {/* Header */}
            <PageSection.FullWidth>
              <div className="w-10/12 mt-48 flex">
                <span className="w-4/12">
                  <h2 className="tracking-tight text-fontsecondary">University Park </h2>
                </span>
                <span className="w-8/12">
                  <h2 className="tracking-tight text-fontprimary">
                    Designing a Digital Hub to Drive Community-Wide Sustainable Action
                  </h2>
                </span>
              </div>
              <div className="w-10/12 flex flex mb-6">
                <span className="w-4/12"></span>
                <span className="w-6/12 flex flex-row gap-4 text-fontsecondary mb-8 mt-3">
                  <span>2023-2024,</span>
                  <span>Product Design, Research, Systems Design</span>
                </span>
              </div>
              <UnifiedMedia
                src={UparkDashboard}
                alt="University Park Sustainability Platform hero"
                bg
                gradient={uparkGradient}
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
                    As lead product designer, I partnered with University Park’s Sustainability Committee to conceive, design, and deliver a digital platform that engages residents in sustainable practices and fosters a collaborative, action-driven community. The platform enables education, gamified learning, actionable challenges, and data-driven oversight, making sustainability a shared goal rather than an abstract concept.
                  </h4>
                </span>
              </span>
            </PageSection.ConstrainedWidth>
            {/* Background & Opportunity */}
            <PageSection.ConstrainedWidth>
              <span>
                <h2 className="text-fontprimary mb-6">Background & Opportunity</h2>
                <p className="mb-4 text-fontsecondary leading-relaxed">
                  University Park sought to move beyond awareness and enable every resident to take tangible steps toward sustainable living. Facing fragmented information, lackluster community engagement, and diverse motivation levels, the town needed a unifying platform that could educate, incentivize, and empower its residents—while providing the Sustainability Committee with actionable insights.
                </p>
                <blockquote className="border-l-4 border-indigo-400 pl-6 italic text-gray-600 bg-indigo-50/30 py-3 rounded-md mb-2">
                  “How might we empower all residents of University Park to adopt and sustain eco-friendly practices, while building a sense of community around environmental stewardship?”
                </blockquote>
              </span>
            </PageSection.ConstrainedWidth>
            {/* Research & Analysis */}
            <PageSection.ConstrainedWidth>
              <span>
                <h2 className="text-fontprimary mb-6">Research & Analysis</h2>
                <ul className="list-disc pl-6 space-y-2 text-fontsecondary mb-4">
                  <li>Market Research: Benchmarked global sustainability solutions, then tailored for local (UPark) needs.</li>
                  <li>Expert Interviews: Consulted with sustainability leaders and neighboring committees to learn best practices.</li>
                  <li>Persona Definition: Mapped both resident users (seeking practical, bite-sized sustainability actions) and “Green Team” admins (focused on oversight and data-driven interventions).</li>
                </ul>
              </span>
              <UnifiedMedia
                src={Research}
                alt="Persona board/research visual"
                bg={false}
                gradient={uparkGradient}
                imgWidth={1200}
                imgHeight={630}
              />
            </PageSection.ConstrainedWidth>
           
            {/* Information Architecture & Conceptual Design */}
            <PageSection.ConstrainedWidth>
              <span>
                <h2 className="text-fontprimary mb-6">Information Architecture & Conceptual Design</h2>
                <ul className="list-disc pl-6 space-y-2 text-fontsecondary mb-4">
                  <li>Conducted card sorting with real and proxy users to define a clear, intuitive information architecture for practices, badges, and community tools.</li>
                  <li>Explored divergent low-fidelity sketches and voted on features to converge on a vision.</li>
                  <li>Developed mid-fidelity wireframes to prototype core user flows for early feedback.</li>
                </ul>
               
              </span>
            </PageSection.ConstrainedWidth>
            <PageSection.FullWidth>
            {/* <UnifiedMedia
                  src={cardsort}
                  alt="Wireframes and sketch progression"
                  bg={false}
                  gradient={uparkGradient}
                  
                /> */}
                <UnifiedMedia
                  src={midfi}
                  alt="Wireframes and sketch progression"
                  bg={false}
                  gradient={uparkGradient}
                  
                />
             </PageSection.FullWidth>
            {/* Behavioral Motivation & Engagement */}
            <PageSection.ConstrainedWidth>
              <span>
                <h2 className="text-fontprimary mb-6">Behavioral Motivation & Engagement</h2>
                <ul className="list-disc pl-6 space-y-2 text-fontsecondary mb-24">
                  <li>Gamification Layer: Integrated badges, points, leveling to spur action—backed by habit formation research.</li>
                  <li>Physical Rewards: Proposed real-life incentives (e.g. garden plaques, merch) as tangible status markers.</li>
                  <li>Continuous Engagement: Recurring challenges and frequent community-driven events.</li>
                  <li>Community Forum: Peer support and public celebration of sustainable wins.</li>
                </ul>
                <UnifiedMedia
                  src={gamification}
                  alt="Gamification/User profile sample"
                  bg={false}
                  gradient={uparkGradient}
                  imgWidth={1200}
                  imgHeight={630}
                />
               
              </span>
            </PageSection.ConstrainedWidth>
            <PageSection.FullWidth>
            <UnifiedMedia
                  src={"/assets/universitypark/communitypost.mp4"}
                  alt="Gamification/User profile sample"
                  containerPadding="p-24"
                  bg = {false}
                  imgWidth={1200}
                  imgHeight={630}
                />
            </PageSection.FullWidth>
            {/* Design System & Visual Consistency */}
            <PageSection.ConstrainedWidth>
              <span>
                <h2 className="text-fontprimary mb-6">Design System & Visual Consistency</h2>
                <ul className="list-disc pl-6 space-y-2 text-fontsecondary mb-4">
                  <li>Built a new design system to enable the entire team to collaborate efficiently and enforce UI/UX coherence.</li>
                  <li>Utilized group workshops and voting to select an engaging, accessible visual language for a diverse audience.</li>
                </ul>
               
              </span>
            
            </PageSection.ConstrainedWidth>
            {/* <PageSection.FullWidth>
            <UnifiedMedia
                  src={Thai}
                  alt="Design system collage"
                  bg
                  gradient={uparkGradient}
                  imgWidth={1200}
                  imgHeight={630}
                />
            </PageSection.FullWidth> */}
            {/* User Testing & Iteration */}
            <PageSection.ConstrainedWidth>
              <span>
                <h2 className="text-fontprimary mb-6">User Testing & Iteration</h2>
                <ul className="list-disc pl-6 space-y-2 text-fontsecondary mb-4">
                  <li>Usability sessions with 7 residents revealed clarity and navigation issues, mixed reactions on gamification.</li>
                  <li>Key improvements: Added onboarding and a “Mission” section, clarified IA, simplified gamification explanations and dashboards.</li>
                </ul>
                {/* <UnifiedMedia
                  src={Cafe}
                  alt="Onboarding/pages visual"
                  bg
                  gradient={uparkGradient}
                  imgWidth={1200}
                  imgHeight={630}
                /> */}
              </span>
            </PageSection.ConstrainedWidth>
            {/* Final Platform Experience */}
            <Divider />
            <PageSection.ConstrainedWidth>
              <span>
                <h2 className="text-fontprimary mb-6">Final Platform Experience</h2>
                <p className="mb-4 text-fontsecondary leading-relaxed">
                  Multifaceted platform acting as a sustainability hub—offering educational resources, gamified practices, a supportive forum, and simple admin tools for the Green Team.
                </p>
                
              </span>
              <PageSection.FullWidth>
              <UnifiedMedia
                  src={"/assets/UniversityPark/OnboardingFlow.mp4"}
                  alt="High-fi practices page"
                  bg={false}
                  containerPadding="p-24"
                  gradient={uparkGradient}
                  imgWidth={1200}
                  imgHeight={630}
                />
              </PageSection.FullWidth>
            </PageSection.ConstrainedWidth>
            {/* Admin Tools */}
            <PageSection.ConstrainedWidth>
              <span>
                <h2 className="text-fontprimary mb-6">Admin Tools</h2>
                <p className="mb-4 text-fontsecondary leading-relaxed">
                  Designed a clear WYSIWYG admin dashboard allowing non-technical committee members to update pages, review sustainability metrics, and track resident participation.
                </p>
              
              </span>
            
            </PageSection.ConstrainedWidth>
            <PageSection.FullWidth>
            <UnifiedMedia
                  src={admin}
                  alt="Admin dashboard UI"
                  bg
                  padding="p-24"
                  gradient={uparkGradient}
                  
                />
            </PageSection.FullWidth>
            {/* Outcome & Impact */}
            <Divider />
            <PageSection.ConstrainedWidth>
              <span>
                <h2 className="text-fontprimary mb-6">Outcome & Impact</h2>
                <ul className="list-disc pl-6 space-y-2 text-fontsecondary mb-4">
                  <li>Delivered a community-wide digital solution that educated, motivated, and measured sustainable action across resident personas.</li>
                  <li>Enabled the Sustainability Committee to target interventions and showcase community progress with real data.</li>
                </ul>
              </span>
            </PageSection.ConstrainedWidth>
            {/* Reflection & Learnings */}
            <Divider />
            <PageSection.ConstrainedWidth>
              <span>
                <h2 className="text-fontprimary mb-6">Reflection & Learnings</h2>
                <ul className="list-disc pl-6 space-y-2 text-fontsecondary mb-4">
                  <li>Balance is key: Gamification drives action, but must be carefully tuned to avoid feeling superficial.</li>
                  <li>Onboarding and clarity: Clear communication of mission and mechanics accelerates adoption and impactful use.</li>
                  <li>Co-building with users: Constant iteration with real residents ensured relevance and engagement at every step.</li>
                </ul>
              </span>
            </PageSection.ConstrainedWidth>
          </div>
        </PageSection>
      </DefaultPage>
    </TransitionWrapper>
  );
};

export default UniversityPark;
