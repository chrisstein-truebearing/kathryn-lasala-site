import HeroSection from "@/components/HeroSection";
import BioSection from "@/components/BioSection";
import BooksSection from "@/components/BooksSection";
import UnpublishedSection from "@/components/UnpublishedSection";
import SocialsSection from "@/components/SocialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <BioSection />
      <BooksSection />
      <UnpublishedSection />
      <SocialsSection />
      <Footer />
    </main>
  );
};

export default Index;
