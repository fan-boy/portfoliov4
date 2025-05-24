import Image from "next/image";
import ChatBox from '../app/components/chatbox';
import DefaultPage from "./components/Pages/DefaultPage";
import PageSection from "./components/Pages/PageSection";
import TransitionWrapper from "./components/TransitionWrapper";
import OrgDashboard from "../../public/assets/Dune/dashboard.webp"
import Link from "next/link";

export default function Home() {
  return (
    <TransitionWrapper>

      <PageSection theme="light">
        <PageSection.ConstrainedWidth>

          <div className="w-full flex flex-col gap-5 font-sans h-75vh items-center justify-center">
            <span className="flex flex-col gap-5">
              <p>Aaditya Shete</p>
              <h1>
                Designing systems that scale with clarity.
              </h1>
              <span>
                <p>A product designer blending visual clarity with AI-first workflows. </p>
                <p>Currently at Dune Security.</p>
              </span>
            </span>
          </div>
          <div id="work" className="w-full flex flex-col gap-8">
           <Link href = {"/dune"}>
            <div className="w-full  gap-10 hover:border hover:border-gray-100  rounded-md h-herocard flex flex-row">
              <h3 className="text-nowrap pt-10 pl-10">Dune Security</h3>

              <div className="relative  w-full h-full bg-green-100 overflow-hidden p-4  ">
                <Image src={OrgDashboard} className=" absolute " alt="Dune Org Dashboard" />
              </div>
            </div>
            </Link>


          </div>

          <h1 className="text-2xl font-bold mb-4 mt-20">Ask Adi’s Chatbot</h1>
          <ChatBox />


        </PageSection.ConstrainedWidth>
      </PageSection>

    </TransitionWrapper>
  );
}
