import { Calendar, MapPin, Building2, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Product Strategy Consultant",
      company: "LumenAR",
      location: "Copenhagen, Denmark",
      period: "2025",
      type: "Project",
      description: "Developed comprehensive go-to-market strategy for antireflective screen cover technology.",
      highlights: [
        "Led cross-functional team to align technical innovation with market needs",
        "Conducted market analysis for B2B and B2C segments",
        "Created strategic foundation for product launch and market entry"
      ],
      skills: ["Product Strategy", "Go-to-Market", "Market Research", "Cross-functional Leadership"]
    },
    {
      title: "Senior Software Developer",
      company: "Twilio",
      location: "Tallinn, Estonia",
      period: "June 2022 - June 2025",
      type: "Full-time",
      description: "Built distributed systems and led cost optimization initiatives across messaging teams.",
      highlights: [
        "Designed end-to-end testing system covering Twilio's full messaging pipeline",
        "Delivered tens of thousands in cost savings through real-time monitoring systems",
        "Collaborated with four messaging teams using C4 diagrams and cost modeling"
      ],
      skills: ["System Architecture", "Spark Streaming", "Kafka", "Cost Optimization"]
    },
    {
      title: "International Coordinator", 
      company: "BEST Estonia",
      location: "Tallinn, Estonia",
      period: "June 2020 - June 2021",
      type: "Volunteer",
      description: "Managed communications across the BEST network for European educational programs.",
      highlights: [
        "Coordinated international communications across BEST network",
        "Drove alignment and participation in educational programs",
        "Managed cross-cultural communications and project coordination"
      ],
      skills: ["International Relations", "Communication", "Program Management"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building distributed systems, leading cross-functional teams, and driving product innovation
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover-lift glass-card animate-fade-in">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2 flex items-center gap-2">
                      <Briefcase size={20} className="text-primary" />
                      {exp.title}
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building2 size={16} />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Badge variant="secondary" className="self-start lg:self-center">
                    {exp.type}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-foreground leading-relaxed">
                  {exp.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-3 text-primary">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {exp.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-primary">Skills & Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
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

export default ExperienceSection;