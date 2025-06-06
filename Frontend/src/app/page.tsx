"use client"
import Image from "next/image";
import Link from "next/link";
import TransitionWrapper from "./components/TransitionWrapper";
import DuneOrgDashboard from "../../public/assets/Dune/dashboard.webp";
import UniversityParkUserProfile from "../../public/assets/UniversityPark/userprofile.webp";
import { motion } from "framer-motion";
import AnimatedBackground from "./components/AnimatedGradient";
// import Cat1 from "../../public/assets/UniversityPark/hero.webp";
// import Cat2 from "../../public/assets/ChainReactive/hero.webp";

const projects = [
  {
    title: "Dune Security",
    subtitle: "Redefining user-adaptive risk management for Fortune 500 CISOs.",
    href: "/dune",
    image: DuneOrgDashboard,
    imageAlt: "Dune Security dashboard preview",
  },
  {
    title: "University Park",
    subtitle: "A digital platform for collective sustainability and community engagement.",
    href: "/universitypark",
    image: UniversityParkUserProfile,
    imageAlt: "University Park platform preview",
  },
  {
    title: "ChainReactive",
    subtitle: "Empowering small restaurants with seamless online ordering.",
    href: "/chainreactive",
    image: DuneOrgDashboard,
    imageAlt: "ChainReactive ordering system preview",
  },
];

export default function Home() {
  return (
    <>
    <div className="bg-background" style={{ position: "relative", zIndex: 1 }}>
    <TransitionWrapper>
      {/* Hero Section */}
      <section className="w-full mt-48 ">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-start gap-6 font-sans">
          <span className=" flex flex-col gap-6">
          <h3 className=" text-fontsecondary font-regular  tracking-wide">Aaditya Shete</h3>
          <h1 className=" tracking-tight text-fontprimary font-medium  leading-tight">
            Designing systems that scale with clarity.
          </h1>
          <div className=" text-fontsecondary ">
            <h4>A product designer blending visual clarity with AI-first workflows.</h4>
            <h4>Currently at <span className="font-medium text-fontprimary">Dune Security</span>.</h4>
          </div>
          </span>
        </div>
      </section>

      <section className="w-full mt-24 py-16">
        <div className="flex flex-col gap-32 max-w-6xl mx-auto px-6">
          {projects.map((project) => (
           <motion.div
           key={project.title}
           whileHover="hover"
           initial="initial"
           className="group"
         >
           <Link href={project.href} style={{ textDecoration: "none" }}>
             <div className="flex flex-col gap-8 w-full">
               {/* Text Block */}
               <div className="flex-1 flex flex-col md:flex-row w-full justify-between items-start md:pt-8">
                 <h2 className="text-2xl md:text-3xl mb-2 font-medium text-fontsecondary">{project.title}</h2>
                 <p className="text-lg w-1/2 md:text-xl font-light mb-4 text-fontprimary">{project.subtitle}</p>
               </div>
               {/* Image Box */}
               <div className="w-full flex-shrink-0">
                 <div className="md:relative w-full md:h-[440px] bg-green-100 overflow-hidden pl-10 pt-10 md:pl-20 md:pt-20 rounded-lg">
                   <motion.div
                     variants={{
                       hover: {
                         scale: 1.04,
                         y: -8,
                         boxShadow: "0 12px 32px rgba(0, 128, 0, 0.15)",
                         transition: { type: "spring", stiffness: 300, damping: 20 }
                       },
                       initial: {
                         scale: 1,
                         y: 0,
                         boxShadow: "none"
                       }
                     }}
                     className="w-full md:absolute top-20 left-20 overflow-hidden max-w-none"
                     style={{ borderRadius: "12px" }}
                   >
                     <Image
                       src={project.image}
                       alt={project.imageAlt}
                       className="w-full"
                       draggable={false}
                       priority
                     />
                   </motion.div>
                 </div>
               </div>
             </div>
           </Link>
         </motion.div>
          ))}
        </div>
      </section>
      
    </TransitionWrapper>
    </div>
    </>
  );
}
