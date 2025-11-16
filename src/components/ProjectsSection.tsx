import { Calendar, MapPin, Rocket, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Aura",
      role: "Co-Founder",
      location: "Tallinn",
      period: "September - current",
      description: "Aura is a high-fidelity mobile-first prototype designed to help children with ADHD build consistent medication habits. The app focuses on calm, empathetic, and rewarding interactions to reduce emotional burden while encouraging daily adherence.",
      highlights: [
        "Prototype Design: Created a mobile-first, visually soothing interface using soft colors, gentle gradients, rounded fonts, and generous white space to reduce alert fatigue. Features include a \"growth metaphor\" dashboard, an interactive \"I took it!\" button with celebratory feedback, a non-judgmental calendar, and an SOS toolkit for calming exercises.",
        "User Research: Conducted ~10 interviews with ADHD patients, caregivers, and doctors, plus follow-up testing sessions with the prototype. Research also explored AI-assisted adherence verification.",
        "Target Users & GTM Strategy: Focused on children with ADHD and their caregivers. Phase 1: B2C freemium model with a premium subscription ($7.99–$12.99/month) offering AI features and caregiver dashboards. Phase 2: B2B enterprise model leveraging verified adherence data for RTM billing, SaaS licensing, and anonymized datasets for pharma analytics.",
        "Tools: Prototype developed in Lovable; user flows, interactive elements, and visual design executed in high-fidelity screens.",
        "Learnings & Next Steps: Gained insights into ADHD-specific engagement mechanics and caregiver needs; next steps include iterating on gamified interactions, AI verification, and clinical integration."
      ],
      skills: ["Product Strategy", "UX/UI Design", "Gamification", "User Research", "Prototyping", "Business Model Design"]
    },
    {
      title: "LumenAR",
      role: "Product Strategy & GTM",
      location: "Copenhagen",
      period: "June – July 2025",
      description: "LumenAR addresses reflections and glare on modern monitors by exploring nanostructure-based anti-reflective surfaces. The project focused on product strategy, customer discovery, and market research to identify opportunities and position the technology for both B2C and B2B markets.",
      highlights: [
        "Customer Discovery & Research: Conducted surveys (~75 participants) and interviews with B2B professionals and niche communities to validate user pain points (e.g., glare, clarity degradation) and assess willingness to adopt new display technology.",
        "Market Strategy: Defined first B2C segment (gamers) and B2B segment (professional users of high-end equipment). Evaluated pricing, customer creation strategies, branding, advertising, and roadmap planning.",
        "Competitive & Gap Analysis: Studied existing anti-glare solutions and identified opportunities for differentiation in clarity, contrast, and comfort.",
        "Process & Tools: Led cross-functional strategy work, concept validation, and go-to-market planning, synthesizing insights from research into actionable recommendations.",
        "Learnings & Next Steps: Validated problem-solution fit and developed a roadmap for further prototyping, customer engagement, and scaling across segments."
      ],
      skills: ["Product Strategy", "Market Research", "Customer Discovery", "Competitive Analysis", "GTM Planning", "Roadmap Development"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entrepreneurial ventures combining product strategy, user research, and innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover-lift glass-card animate-fade-in">
              <CardHeader>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shadow-md">
                    <Rocket size={24} className="text-primary-foreground" />
                  </div>
                  
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">
                      {project.title}
                    </CardTitle>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                      <span className="font-medium">{project.role}</span>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <MapPin size={14} />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          <span>{project.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-foreground leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-3 text-primary">Key Highlights:</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="leading-relaxed">{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-primary">Skills Demonstrated:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="hover-lift">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;