import HeroSection from "./component/HeroSection";
export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-[#121212] ">
          <div className="container mx-auto px-4 py-16 ">
              <HeroSection />
          </div>

      </main>
  );
}
