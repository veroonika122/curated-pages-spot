import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";

import CertificationsSection from "@/components/CertificationsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        <div id="about">
          {/* About section is integrated into the Hero */}
        </div>
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
