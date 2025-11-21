import { Award, Calendar, ExternalLink, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "ISO 21500 and ISO 21502 Project, Programme and Portfolio Management",
      issuer: "Danish Standards",
      issueDate: "August 2025",
      description: "Comprehensive certification covering international standards for project, programme, and portfolio management methodologies.",
      skills: ["Project Management", "Programme Management", "Portfolio Management", "ISO Standards", "Risk Management"],
      type: "Professional Certification",
      verified: true,
      logo: "https://via.placeholder.com/60x60/3B82F6/FFFFFF?text=DS"
    },
    {
      title: "Product Management: An Introduction",
      issuer: "IBM",
      issueDate: "July 2025", 
      description: "Foundational certification in product management principles, covering product strategy, roadmapping, and customer-centric development approaches.",
      skills: ["Product Strategy", "Product Roadmapping", "Customer Research", "Market Analysis", "Agile Product Development"],
      type: "Product Management",
      verified: true,
      logo: "https://via.placeholder.com/60x60/1F4E79/FFFFFF?text=IBM"
    },
    {
      title: "Empowering Equity Academy 2025",
      issuer: "Luxembourg",
      issueDate: "October 2025",
      description: "Intensive two-week programme covering venture capital, private equity, impact investing, and ESG accountability frameworks. Completed VC case studies, due diligence exercises, and communication workshops with European Investment Bank and European Investment Fund investment professionals.",
      skills: ["Venture Capital", "Private Equity", "Impact Investing", "ESG Frameworks", "Due Diligence", "Case Studies"],
      type: "Finance & Investment",
      verified: true,
      logo: "https://via.placeholder.com/60x60/D4AF37/FFFFFF?text=EEA"
    }
  ];

  const additionalSkills = [
    "Agile Methodologies",
    "Scrum Framework", 
    "Digital Transformation",
    "Data-Driven Decision Making",
    "Cross-functional Leadership",
    "Technical Product Management",
    "Go-to-Market Strategy",
    "Stakeholder Management"
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            Certifications & Credentials
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover-lift glass-card animate-fade-in">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center shadow-md">
                    <Award size={24} className="text-primary-foreground" />
                  </div>
                  
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2 leading-tight">
                      {cert.title}
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                      <span className="font-medium">{cert.issuer}</span>
                      <span className="hidden sm:inline">•</span>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{cert.issueDate}</span>
                      </div>
                    </div>
                  </div>

                  {cert.verified && (
                    <div className="flex items-center gap-1 text-success">
                      <CheckCircle size={18} />
                      <span className="text-xs font-medium">Verified</span>
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <Badge variant="outline" className="mb-4">
                  {cert.type}
                </Badge>

                <p className="text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-3 text-primary">Skills Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="hover-lift">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button variant="outline" size="sm" className="hover-lift group">
                  View Certificate
                  <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Section */}
        <Card className="glass-card hover-lift animate-fade-in">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Award size={20} className="text-primary" />
              Additional Professional Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Through professional experience and continuous learning, I've developed expertise in various 
              methodologies and frameworks essential for modern product development and technical leadership.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {additionalSkills.map((skill, index) => (
                <Badge key={index} variant="outline" className="hover-lift px-4 py-2">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

      </div>
    </section>
  );
};

export default CertificationsSection;