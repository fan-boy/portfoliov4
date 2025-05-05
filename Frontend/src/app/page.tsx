import Image from "next/image";
import ChatBox from '../app/components/chatbox';
import DefaultPage from "./components/Pages/DefaultPage";
import PageSection from "./components/Pages/PageSection";
import TransitionWrapper from "./components/TransitionWrapper";

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
      <div className="w-full pb-20 border border-gray-200 rounded-md h-herocard flex flex-row">
        <h3 className="text-nowrap">Dune Security</h3>
        <div className="w-full h-full bg-green-200">

        </div>

      </div>
      <div className="w-full pb-20 border border-gray-200 rounded-md h-herocard flex flex-row">
        <h3 className="text-nowrap">Dune Security</h3>
        <div className="w-full h-full bg-green-200">

        </div>

      </div>
      </div>
       
      {/* <h1 className="text-2xl font-bold mb-4">Ask Adi’s Chatbot</h1>
      <ChatBox /> */}


    </PageSection.ConstrainedWidth>
    </PageSection>
    
    </TransitionWrapper>
  );
}
