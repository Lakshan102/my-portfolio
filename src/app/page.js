import AboutSection from "./component/AboutSection";
import HeroSection from "./component/HeroSection";
import { NavBar } from "./component/NavBar";
import ProjectSection from "./component/ProjectSection";
export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-[#121212] ">
        <NavBar/>
          <div className="container mx-auto px-4 py-16 mt-24 ">
              <HeroSection />
              <AboutSection/>
              <ProjectSection/>
          </div>

      </main>
  );
}
