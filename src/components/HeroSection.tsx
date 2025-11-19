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
        
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 animate-slide-up">
          Software engineer studying Business IT at Tallinn University of Technology, seeking to complement my technical background with business acumen. Building on practical engineering experience, I am pivoting toward a product and leadership-focused role where I can connect technical execution with strategic value and team collaboration.
        </p>

        {/* Bio */}
        <div className="max-w-3xl mx-auto mb-12">
          <Card className="p-8 glass-card hover-lift">
            <p className="text-lg leading-relaxed text-foreground">
              Product-focused builder with experience leading cross-functional work at <span className="font-semibold text-primary">Twilio</span> and <span className="font-semibold text-primary">LumenAR</span>. 
              I bring a mix of strategy, customer insight, and execution—shaped by hands-on work across product launches, 
              international initiatives, and go-to-market planning. Currently shifting into Product Management with a focus 
              on solving real problems with clarity and care.
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
          <Button variant="outline" size="sm" className="hover-lift" asChild>
            <a href="https://www.linkedin.com/in/veroonika-tamm/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} className="mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="sm" className="hover-lift" asChild>
            <a href="https://github.com/veroonika122" target="_blank" rel="noopener noreferrer">
              <Github size={18} className="mr-2" />
              GitHub
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;