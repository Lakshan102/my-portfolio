import AboutSection from "./component/AboutSection";
import ClubSection from "./component/ClubSection";
import EmailSection from "./component/EmailSection";
import Footer from "./component/Footer";
import HeroSection from "./component/HeroSection";
import { NavBar } from "./component/NavBar";
import ProjectSection from "./component/ProjectSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] overflow-x-hidden">
      <NavBar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 mt-16 sm:mt-20 lg:mt-24">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ClubSection />
      </div>
      <hr className="border-t border-[#33353F] my-4 sm:my-6 lg:my-8 mx-4 sm:mx-6 lg:mx-8" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16">
        <EmailSection />
      </div>
    </main>
  );
}
