import { ArrowRight, Mail, MapPin, Linkedin, Github, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-surface">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        {/* Profile Image Placeholder */}
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-primary shadow-lg animate-scale-in" />
        
        {/* Name & Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 gradient-text animate-slide-up">
          Veroonika Tamm
        </h1>
        
        <p className="text-xl sm:text-2xl text-muted-foreground mb-6 animate-slide-up">
          Senior Software Engineer
        </p>
        
        <p className="text-lg text-muted-foreground mb-8 animate-slide-up">
          Transitioning into Product Management
        </p>

        {/* Bio */}
        <div className="max-w-3xl mx-auto mb-12">
          <Card className="p-8 glass-card hover-lift">
            <p className="text-lg leading-relaxed text-foreground">
              Senior engineer with <span className="font-semibold text-primary">3+ years of experience</span> leading 
              cross-functional initiatives at <span className="font-semibold text-primary">Twilio</span>, 
              now transitioning into Product Management. Proven ability to drive product strategy, 
              go-to-market planning, and customer discovery through hands-on experience at LumenAR. 
              Strong technical foundation in distributed systems and cost optimization, paired with 
              business acumen gained through international product initiatives and business education.
            </p>
          </Card>
        </div>

        {/* Contact & Location */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-12 text-muted-foreground animate-fade-in">
          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span>Tallinn, Estonia</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={18} />
            <a href="mailto:veroonika.tamm@gmail.com" className="hover:text-link transition-colors">
              veroonika.tamm@gmail.com
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
          <Button variant="outline" size="sm" className="hover-lift">
            <Linkedin size={18} className="mr-2" />
            LinkedIn
          </Button>
          <Button variant="outline" size="sm" className="hover-lift">
            <Github size={18} className="mr-2" />
            GitHub
          </Button>
          <Button variant="outline" size="sm" className="hover-lift">
            <FileText size={18} className="mr-2" />
            Resume
          </Button>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
          <Button 
            onClick={() => scrollToSection("experience")}
            className="hover-lift group"
            size="lg"
          >
            View My Experience
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => scrollToSection("projects")}
            className="hover-lift"
            size="lg"
          >
            See My Projects
          </Button>
        </div>

        {/* Interests Highlight */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <Card className="p-4 glass-card hover-lift text-center">
            <p className="font-medium text-primary mb-1">Marathon Runner</p>
            <p className="text-sm text-muted-foreground">Copenhagen Marathon 2025</p>
          </Card>
          
          <Card className="p-4 glass-card hover-lift text-center">
            <p className="font-medium text-primary mb-1">Tech Enthusiast</p>
            <p className="text-sm text-muted-foreground">AI & Digital Health</p>
          </Card>
          
          <Card className="p-4 glass-card hover-lift text-center">
            <p className="font-medium text-primary mb-1">Creative Actor</p>
            <p className="text-sm text-muted-foreground">DTU ACT Community</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;