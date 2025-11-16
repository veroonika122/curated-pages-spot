import { GraduationCap, Calendar, MapPin, Trophy, Users, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const EducationSection = () => {
  const education = [{
    degree: "Exchange Studies",
    institution: "Technical University of Denmark",
    location: "Copenhagen, Denmark",
    period: "2025",
    status: "Completed",
    description: "Exchange Semester focused on project management in tech-driven contexts. Led a strategic analysis of the Bestseller More App—assessing objectives, risks, and team dynamics—to deliver clear, actionable recommendations, and collaborated on go-to-market planning for LumenAR, aligning technical innovation with B2B and B2C needs while coordinating cross-functional teams and stakeholders.",
    skills: ["Project Management", "Go-to-Market Strategy", "Machine Learning", "PyTorch"]
  }, {
    degree: "MSc in Business IT",
    institution: "Tallinn University of Technology",
    location: "Tallinn, Estonia",
    period: "Currently pursuing",
    status: "In Progress",
    description: "Combining business strategy with information technology and product management.",
    skills: ["Business Strategy", "Digital Transformation", "Product Management"]
  }, {
    degree: "BSc in Information Technology",
    institution: "Tallinn University of Technology",
    location: "Tallinn, Estonia",
    period: "2019 - 2022",
    status: "Graduated",
    description: "Thesis: Detection of pets wandering in a residential area. Thesis Supervisor: Savimaa, Raul",
    skills: ["Software Engineering", "System Design", "Computer Vision", "Programming"]
  }];
  return <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-accent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            Education
          </h2>
          
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => <Card key={index} className="hover-lift glass-card animate-fade-in">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2 flex items-center gap-2">
                      <GraduationCap size={20} className="text-primary" />
                      {edu.degree}
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <BookOpen size={16} />
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Badge variant={edu.status === "Graduated" ? "default" : edu.status === "In Progress" ? "secondary" : "outline"} className="self-start lg:self-center">
                    {edu.status}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  {edu.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-3 text-primary">Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, skillIndex) => <Badge key={skillIndex} variant="outline" className="hover-lift">
                        {skill}
                      </Badge>)}
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default EducationSection;