import { Mail, MapPin, Linkedin, Github, FileText, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Blog", href: "#blog" },
    { name: "Bookshelf", href: "#books" }
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "GitHub", href: "#", icon: Github },
    { name: "Resume", href: "#", icon: FileText }
  ];

  return (
    <footer className="bg-surface border-t border-card-border">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-xl font-bold gradient-text mb-3">Veroonika Tamm</h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Senior Software Engineer transitioning to Product Management. 
                Building the bridge between technical excellence and business value.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={18} />
                <span>Tallinn, Estonia</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail size={18} />
                <a 
                  href="mailto:veroonika.tamm@gmail.com" 
                  className="hover:text-link transition-colors"
                >
                  veroonika.tamm@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Button 
                    key={social.name} 
                    variant="outline" 
                    size="sm" 
                    className="hover-lift"
                  >
                    <IconComponent size={16} className="mr-2" />
                    {social.name}
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-link transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Current Focus */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Current Focus</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>• Product Management Transition</li>
              <li>• Distributed Systems at Scale</li>
              <li>• Cross-functional Leadership</li>
              <li>• International Collaboration</li>
              <li>• Technical Writing</li>
              <li>• Continuous Learning</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-card-border bg-surface-accent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>© {currentYear} Veroonika Tamm. Built with</span>
              <Heart size={14} className="text-red-500" />
              <span>and React</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-xs text-muted-foreground">
                Last updated: March 2025
              </div>
              
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={scrollToTop}
                className="hover-lift group"
              >
                <ArrowUp size={16} className="mr-1 group-hover:-translate-y-1 transition-transform" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;