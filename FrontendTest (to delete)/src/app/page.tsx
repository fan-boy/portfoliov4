import Image from "next/image";
import ChatBox from '../app/components/chatbox';
import DefaultPage from "./components/Pages/DefaultPage";
import PageSection from "./components/Pages/PageSection";

export default function Home() {
  return (
    <DefaultPage selected="">
      <PageSection theme="dark">
      <PageSection.ConstrainedWidth>

      <div className="w-full flex items-center h-hero">
        Hi This is me Aaditya

      </div>
       
      <h1 className="text-2xl font-bold mb-4">Ask Adi’s Chatbot</h1>
      <ChatBox />


    </PageSection.ConstrainedWidth>
    </PageSection>
    </DefaultPage>
  );
}
