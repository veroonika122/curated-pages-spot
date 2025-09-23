import { GraduationCap, Calendar, MapPin, Trophy, Users, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EducationSection = () => {
  const education = [
    {
      degree: "Exchange Studies",
      institution: "Technical University of Denmark",
      location: "Copenhagen, Denmark",
      period: "September 2025 - August 2025",
      status: "Completed",
      description: "Focused on advanced project management, entrepreneurial marketing, and machine learning applications.",
      courses: [
        {
          name: "Project Management",
          description: "Conducted detailed analysis of The Bestseller More App for Bestseller A/S, applying project management concepts to evaluate objectives, risks, and team interactions"
        },
        {
          name: "Entrepreneurial Marketing", 
          description: "Developed go-to-market strategy for LumenAR's antireflective screen cover in cross-functional team, aligning technical innovation with B2B and B2C customer needs"
        },
        {
          name: "Applied Machine Learning and Big Data",
          description: "Completed project using ML techniques on heterogeneous datasets with cloud-based tools"
        },
        {
          name: "Machine Learning Operations",
          description: "Delivered cloud-deployed computer vision application classifying playing card images using PyTorch/TIMM and fine-tuned pre-trained models"
        }
      ],
      skills: ["Project Management", "Go-to-Market Strategy", "Machine Learning", "PyTorch", "Cloud Computing", "Computer Vision"]
    },
    {
      degree: "MSc in Business IT",
      institution: "Tallinn University of Technology",
      location: "Tallinn, Estonia", 
      period: "Currently pursuing",
      status: "In Progress",
      description: "Advanced studies combining business strategy with information technology, focusing on digital transformation and product management.",
      highlights: [
        "Bridging technical expertise with business strategy",
        "Focus on digital transformation and innovation",
        "Product management and business development"
      ],
      skills: ["Business Strategy", "Digital Transformation", "Product Management", "Information Systems"]
    },
    {
      degree: "BSc in Information Technology",
      institution: "Tallinn University of Technology", 
      location: "Tallinn, Estonia",
      period: "2019 - 2022",
      status: "Graduated",
      description: "Comprehensive computer science education with focus on software development and system design.",
      thesis: {
        title: "Detection of pets wandering in a residential area",
        supervisor: "Savimaa, Raul"
      },
      activities: [
        {
          role: "Student Parliament Representative",
          organization: "School of IT",
          period: "2020-2021",
          description: "Represented student interests in academic and policy decisions"
        }
      ],
      highlights: [
        "Strong foundation in computer science and software engineering",
        "Practical experience in system design and development", 
        "Leadership experience in student governance"
      ],
      skills: ["Software Engineering", "System Design", "Computer Vision", "Programming", "Student Leadership"]
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-accent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning journey from computer science to business technology and international experience
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="hover-lift glass-card animate-fade-in">
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
                  
                  <Badge 
                    variant={edu.status === "Graduated" ? "default" : edu.status === "In Progress" ? "secondary" : "outline"}
                    className="self-start lg:self-center"
                  >
                    {edu.status}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-foreground leading-relaxed">
                  {edu.description}
                </p>

                {edu.courses && (
                  <div>
                    <h4 className="font-semibold mb-4 text-primary flex items-center gap-2">
                      <Trophy size={18} />
                      Key Courses & Projects:
                    </h4>
                    <div className="grid gap-4">
                      {edu.courses.map((course, courseIndex) => (
                        <Card key={courseIndex} className="p-4 bg-muted/50">
                          <h5 className="font-medium mb-2 text-foreground">{course.name}</h5>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {course.description}
                          </p>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {edu.thesis && (
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Thesis:</h4>
                    <Card className="p-4 bg-muted/50">
                      <p className="font-medium mb-1">{edu.thesis.title}</p>
                      <p className="text-sm text-muted-foreground">
                        Supervisor: {edu.thesis.supervisor}
                      </p>
                    </Card>
                  </div>
                )}

                {edu.activities && (
                  <div>
                    <h4 className="font-semibold mb-3 text-primary flex items-center gap-2">
                      <Users size={18} />
                      Activities & Leadership:
                    </h4>
                    <div className="space-y-3">
                      {edu.activities.map((activity, activityIndex) => (
                        <Card key={activityIndex} className="p-4 bg-muted/50">
                          <div className="flex justify-between items-start mb-2">
                            <h5 className="font-medium text-foreground">{activity.role}</h5>
                            <span className="text-sm text-muted-foreground">{activity.period}</span>
                          </div>
                          <p className="text-sm text-primary mb-1">{activity.organization}</p>
                          <p className="text-sm text-muted-foreground">{activity.description}</p>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {edu.highlights && (
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Highlights:</h4>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="font-semibold mb-3 text-primary">Skills Developed:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, skillIndex) => (
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

export default EducationSection;