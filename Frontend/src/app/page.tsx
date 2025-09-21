"use client";
import Link from "next/link";
import TransitionWrapper from "./components/TransitionWrapper";
import AnimatedBlobs from "./components/AnimatedBlobs";
import { useChat } from './context/ChatContext';
import { useEffect } from "react";
import DuneOrgDashboard from "../../public/assets/Dune/dashboard.webp";
import UniversityParkUserProfile from "../../public/assets/UniversityPark/userprofile.webp";
import { motion } from "framer-motion";
import Image from "next/image";

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
  // {
  //   title: "ChainReactive",
  //   subtitle: "Empowering small restaurants with seamless online ordering.",
  //   href: "/chainreactive",
  //   image: DuneOrgDashboard,
  //   imageAlt: "ChainReactive ordering system preview",
  // },
];

export default function Home() {
  const { chatOpen } = useChat();
  useEffect(() => {
    if (chatOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = '' };
  }, [chatOpen]);

  return (
    <>
      <div>
        <TransitionWrapper>
          {/* Hero Section */}
          {!chatOpen && (
            <AnimatedBlobs expanded={false} loading={false} />
          )}
          <section className="w-full mt-48 ">
            <div className="max-w-3xl mx-auto px-6 flex flex-col items-start gap-6 font-sans">
              <span className="flex flex-col gap-6">
                <h3 className="text-fontsecondary font-regular tracking-wide">
                  Aaditya Shete
                </h3>
                <h1 className="tracking-tight text-fontprimary font-medium leading-tight">
                  Designing systems that scale with clarity.
                </h1>
                <div className="text-fontsecondary">
                  <h4>
                    A product designer blending visual clarity with AI-first workflows.
                  </h4>
                  <h4>
                    Currently at{" "}
                    <span className="font-medium text-fontprimary">
                      Dune Security
                    </span>
                    .
                  </h4>
                </div>
              </span>
            </div>
          </section>

          {/* Projects Section */}
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
                      <div className="flex flex-col md:flex-row justify-between items-start md:pt-8">
                        <h2 className="text-2xl md:text-3xl font-medium text-fontsecondary">
                          {project.title}
                        </h2>
                        <p className="text-lg md:text-xl font-light text-fontprimary md:w-1/2">
                          {project.subtitle}
                        </p>
                      </div>
                      {/* Card */}
                      <div className="w-full">
                        <motion.div
                          className={
                            "relative w-full flex justify-center items-center rounded-2xl border border-gray-100 shadow-md overflow-hidden " +
                            "bg-[#f6fafd]"
                          }
                          style={{
                            minHeight: "320px",
                            padding: "2.5rem 1.25rem",
                            transition: "box-shadow .2s"
                          }}
                          whileHover={{
                            boxShadow:
                              "0 6px 36px 0px rgba(80,180,80,0.11), 0 1.5px  8px rgba(0,0,0,0.06)",
                            scale: 1.012
                          }}
                          initial={{
                            boxShadow:
                              "0 1px 6px 0px rgba(80,180,80,0.06), 0 0.5px  2px rgba(0,0,0,0.02)",
                            scale: 1
                          }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.025 }}
                            className="w-full mx-auto max-w-5xl rounded-2xl overflow-hidden"
                            transition={{ type: "spring", stiffness: 320, damping: 24 }}
                          >
                            <Image
                              src={project.image}
                              alt={project.imageAlt}
                              className="w-full rounded-2xl shadow-sm"
                              draggable={false}
                              priority
                              style={{ objectFit: "contain", background: "white" }}
                            />
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="w-full mt-24 py-16">
            <div className="max-w-3xl mx-auto px-6 flex flex-col items-center gap-2">
              <p className="text-base md:text-lg text-fontprimary text-center">
                Interested in my work?{" "}
                <Link href="/contact" className="underline hover:text-fontsecondary">
                  Contact me
                </Link>
                .
              </p>
            </div>
          </section>
        </TransitionWrapper>
      </div>
    </>
  );
}
