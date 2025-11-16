import { Calendar, MapPin, Building2, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Twilio",
      location: "Tallinn, Estonia",
      period: "June 2022 - June 2025",
      type: "Full-time",
      description: "Super Network Monitoring & Messaging Supply Cost",
      highlights: [
        "Led cross-functional initiatives to optimize messaging supply chain costs, delivering tens of thousands in annual savings while maintaining performance and reliability.",
        "Conducted data-driven cost–benefit and scalability analyses for new system architectures, evaluating six design options and presenting recommendations to stakeholders.",
        "Collaborated with multiple product and engineering teams to align system investments with long-term scalability and integration goals.",
        "Designed and implemented an end-to-end testing framework to improve reliability across Twilio's global messaging network.",
        "Developed real-time monitoring and performance management systems, leveraging analytics to reduce false alerts and improve operational efficiency.",
        "Supported strategic decision-making by building automated tools for cost-quality tradeoff analysis and real-time routing optimization."
      ],
      skills: ["System Architecture", "Spark Streaming", "Kafka", "Cost Optimization"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            Professional Experience
          </h2>
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