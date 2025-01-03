import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";
import ChatInterface from "@/components/chat/ChatInterface";
const HatModel = dynamic(() => import("@/components/models/HatModel"), {
  ssr: false,
});

export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <ChatInterface />
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      {/* 3D Model Container - Moved to background */}
      <div className="fixed w-full h-screen top-0 left-0 z-0">
        <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0">
          <RenderModel>
            <HatModel />
          </RenderModel>
        </div>
      </div>

      {/* Main Content Container - Placed above the 3D model */}
      <div className="relative z-10">
        {/* Hero Section */}
        {/* <div className="relative w-full h-screen flex flex-col items-center justify-center">
          <div className="absolute flex flex-col items-center text-center top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent">
              XWizard AI
            </h1>
            <p className="font-light text-foreground text-lg">
              Next-Generation AI on XRP Ledger
            </p>
          </div>
        </div> */}

        {/* About Details Section */}
        <div className="relative backdrop-blur-sm">
          <AboutDetails />
        </div>
      </div>
    </div>
  );
}
