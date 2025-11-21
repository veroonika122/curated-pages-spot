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
      description: "Aura is an ADHD-focused mobile application (pre-seed) in development aimed at improving medication adherence through gamified UX, behavioral design, and AI-driven verification. The product combines engagement mechanics, habit tracking, and clinical data integration to support children with ADHD and their caregivers.",
      highlights: [
        "Gamified UX & Behavioral Design: Designing reward systems, habit streaks, and engagement flows tailored to ADHD-specific adherence challenges.",
        "AI Medication Verification: Exploring AI-assisted medication tracking to transform adherence into actionable clinical data.",
        "Clinical Integration: Planning for integration with healthcare systems to enable data-driven insights and potential remote therapeutic monitoring.",
        "User Research & Validation: Conducting interviews with ADHD patients, caregivers, and healthcare professionals to inform feature design and usability."
      ],
      skills: ["Product Strategy", "UX Design", "Gamification", "Behavioral Design", "User Research", "Healthcare Technology Strategy"]
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
    },
    {
      title: "Bestseller A/S",
      role: "Project Management & Case Analysis",
      location: "Copenhagen",
      period: "July – August 2025",
      description: "This analysis was conducted as part of an applied project management course at DTU, focusing on evaluating the development of the Bestseller More App using real project data, stakeholder interviews, and project management frameworks. The project examined how the initiative evolved from a small integration task into a full-scale platform replacement, and identified the drivers, challenges, and lessons behind that transformation.",
      highlights: [
        "Analyzed the project through the four core PM perspectives—Purpose, People, Complexity, and Uncertainty—to understand how shifting scope and strategic ambition shaped the project's direction.",
        "Identified how early under-scoping and evolving business goals led to cascading estimation challenges, scheduling delays, and reactive risk handling.",
        "Assessed stakeholder communication, team scaling, and role definition, highlighting how informal coordination and strong team motivation compensated for missing governance structures.",
        "Evaluated estimation methods, workflow planning, and the gradual adoption of agile and lean practices that helped stabilize delivery after an initially unstructured phase.",
        "Conducted risk and uncertainty analyses (risk matrix, SWOT) revealing gaps in proactive planning and the effects of strategic misrepresentation on resource allocation and timelines.",
        "Developed evidence-based recommendations to improve scoping transparency, stakeholder alignment, risk planning, and early adoption of agile practices for higher predictability and repeatability."
      ],
      skills: ["Project Management", "Risk & Uncertainty Analysis", "Stakeholder Communication", "Scope & Complexity Evaluation", "Agile & Lean Methods", "Case Analysis", "Structured Problem-Solving", "Evidence-Based Reporting"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            Projects
          </h2>
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