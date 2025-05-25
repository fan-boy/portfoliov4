import Image from "next/image";
import Link from "next/link";
import TransitionWrapper from "./components/TransitionWrapper";
import OrgDashboard from "../../public/assets/Dune/dashboard.webp";
// import Cat1 from "../../public/assets/UniversityPark/hero.webp";
// import Cat2 from "../../public/assets/ChainReactive/hero.webp";

const projects = [
  {
    title: "Dune Security",
    subtitle: "Redefining user-adaptive risk management for Fortune 500 CISOs.",
    href: "/dune",
    image: OrgDashboard,
    imageAlt: "Dune Security dashboard preview",
  },
  {
    title: "University Park",
    subtitle: "A digital platform for collective sustainability and community engagement.",
    href: "/universitypark",
    image: OrgDashboard,
    imageAlt: "University Park platform preview",
  },
  {
    title: "ChainReactive",
    subtitle: "Empowering small restaurants with seamless online ordering.",
    href: "/chainreactive",
    image: OrgDashboard,
    imageAlt: "ChainReactive ordering system preview",
  },
];

export default function Home() {
  return (
    <TransitionWrapper>
      {/* Hero Section */}
      <section className="w-full py-24 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-start gap-6 font-sans">
          <p className="text-lg text-gray-500 tracking-wide">Aaditya Shete</p>
          <h1 className="text-5xl font-extrabold tracking-tight leading-tight">
            Designing systems that scale<br />with clarity.
          </h1>
          <div className="text-xl text-gray-600 font-light mt-2">
            <p>A product designer blending visual clarity with AI-first workflows.</p>
            <p>Currently at <span className="font-semibold text-gray-800">Dune Security</span>.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-16">
        <div className="flex flex-col gap-32 max-w-6xl mx-auto px-6">
          {projects.map((project, idx) => (
            <Link
              key={project.title}
              href={project.href}
              className="group"
              style={{ textDecoration: "none" }}
            >
              <div className="flex flex-col  gap-8 w-full">
                {/* Text Block */}
                <div className="flex-1 flex flex-col md:flex-row w-full justify-between items-start  md:pt-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">{project.title}</h2>
                  <p className="text-lg w-1/2 md:text-xl font-light mb-4 text-gray-600">{project.subtitle}</p>
                  {/* <span className="inline-block mt-2 text-indigo-600 font-medium text-base group-hover:underline">
                    View case study &rarr;
                  </span> */}
                </div>
                {/* Image Box */}
                <div className="w-full flex-shrink-0">
                <div className="relative  w-full flex  justify-end bg-green-100 overflow-hidden pl-10 pt-10 md:pl-20 md:pt-20  ">
                <Image src={OrgDashboard} className="  right-2 " alt="Dune Org Dashboard" />
              </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </TransitionWrapper>
  );
}
