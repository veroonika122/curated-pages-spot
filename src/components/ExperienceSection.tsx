import { Calendar, MapPin, Building2, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Software Developer",
      company: "Twilio",
      location: "Tallinn, Estonia",
      period: "June 2022 - June 2025",
      type: "Full-time",
      description: "Senior software developer with three years of working experience at two teams:",
      highlights: [
        "Led cross-functional change management initiatives, delivering tens of thousands in cost savings while maintaining system performance and reliability",
        "Designed and architected an end-to-end testing system covering Twilio's full messaging pipeline as part of a quarterly team initiative",
        "Evaluated six implementation options using C4 diagrams, cost modeling, and technical trade-offs",
        "Collaborated with four messaging teams to consolidate requirements and drive adoption",
        "Developed near real-time monitoring systems using Spark streaming and Kafka to enhance operational visibility",
        "Built systems to overview Twilio messaging routes and tools to manage cost efficiently"
      ],
      teams: [
        "Super Network monitoring: Developing near real-time monitoring systems",
        "Messaging supply cost engineer: Building cost management systems"
      ],
      skills: ["Spark Streaming", "Kafka", "System Architecture", "Cost Optimization", "Cross-functional Leadership"]
    },
    {
      title: "Software Engineering Intern",
      company: "Twilio",
      location: "Tallinn, Estonia", 
      period: "June 2022 - June 2025",
      type: "Internship",
      description: "Contributing to the development and testing of new features for Twilio's cloud communication platform, enhancing functionality and performance.",
      highlights: [
        "Developed real-time monitoring and performance management systems using Agile methodologies",
        "Implemented process optimization for system health detection and false negative alert reduction",
        "Executed cost management and process improvement initiatives for messaging supply chain optimization",
        "Created automated systems for cost reduction and data-driven decision making"
      ],
      skills: ["Cloud Platforms", "Agile Methodologies", "System Monitoring", "Performance Optimization"]
    },
    {
      title: "Robotics Teacher",
      company: "School of Randvere",
      location: "Randvere, Estonia",
      period: "October 2020 - May 2021",
      type: "Part-time",
      description: "Developed curriculum and hands-on projects to foster STEM skills and practical problem-solving for students.",
      highlights: [
        "Created engaging robotics curriculum for students",
        "Designed hands-on projects to develop problem-solving skills",
        "Fostered interest in STEM education through practical applications"
      ],
      skills: ["Education", "Curriculum Development", "Robotics", "STEM"]
    },
    {
      title: "International Coordinator", 
      company: "BEST Estonia",
      location: "Tallinn, Estonia",
      period: "June 2020 - June 2021",
      type: "Volunteer",
      description: "Managed communications across the BEST network to drive alignment and participation in European educational programs.",
      highlights: [
        "Coordinated international communications across BEST network",
        "Drove alignment and participation in European educational programs",
        "Managed cross-cultural communications and project coordination"
      ],
      skills: ["International Relations", "Communication", "Program Management", "Cross-cultural Collaboration"]
    },
    {
      title: "Project Manager",
      company: "TalTech Student Council of the School of IT",
      location: "Tallinn, Estonia",
      period: "March 2020 - May 2020",
      type: "Volunteer",
      description: "Served as project manager for the annual Robocode programming competition.",
      highlights: [
        "Managed annual Robocode programming competition",
        "Oversaw sponsor outreach and volunteer coordination",
        "Handled technical setup including live-streaming",
        "Ensured smooth event operations and execution"
      ],
      skills: ["Event Management", "Sponsor Relations", "Technical Coordination", "Live Streaming"]
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

                {exp.teams && (
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Teams & Responsibilities:</h4>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {exp.teams.map((team, teamIndex) => (
                        <li key={teamIndex}>{team}</li>
                      ))}
                    </ul>
                  </div>
                )}

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