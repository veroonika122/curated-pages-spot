import { Code, ExternalLink, Github, Lightbulb, Zap, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "End-to-End Messaging Testing System",
      category: "System Architecture",
      description: "Designed and architected a comprehensive testing system covering Twilio's full messaging pipeline. Evaluated six implementation options using C4 diagrams, cost modeling, and technical trade-offs.",
      highlights: [
        "Collaborated with four messaging teams to consolidate requirements",
        "Evaluated multiple architectural approaches with cost modeling",
        "Drove adoption across cross-functional teams",
        "Improved system reliability through comprehensive testing"
      ],
      technologies: ["System Design", "C4 Diagrams", "Cost Modeling", "Cross-team Collaboration"],
      impact: "Significantly improved system reliability and reduced production incidents",
      status: "Production",
      type: "Enterprise System"
    },
    {
      title: "Real-time Monitoring & Cost Optimization",
      category: "Data Engineering",
      description: "Built near real-time monitoring systems using Spark streaming and Kafka, plus cost management tools for Twilio's messaging supply chain.",
      highlights: [
        "Delivered tens of thousands in cost savings",
        "Enhanced operational visibility with real-time monitoring",
        "Implemented automated cost reduction systems",
        "Created data-driven routing based on cost-quality matrices"
      ],
      technologies: ["Apache Spark", "Kafka", "Streaming Analytics", "Cost Optimization", "Real-time Systems"],
      impact: "Tens of thousands in cost savings while maintaining performance",
      status: "Production",
      type: "Data Platform"
    },
    {
      title: "LumenAR Go-to-Market Strategy",
      category: "Product Management",
      description: "Developed comprehensive go-to-market strategy for LumenAR's antireflective screen cover, aligning technical innovation with B2B and B2C customer needs.",
      highlights: [
        "Cross-functional team collaboration for product strategy",
        "Market analysis for B2B and B2C segments",
        "Technical innovation alignment with market needs",
        "Go-to-market planning and execution strategy"
      ],
      technologies: ["Market Research", "Product Strategy", "Go-to-Market", "Customer Discovery"],
      impact: "Strategic foundation for product launch and market entry",
      status: "Completed",
      type: "Product Strategy"
    },
    {
      title: "Computer Vision Playing Card Classifier",
      category: "Machine Learning",
      description: "Cloud-deployed computer vision application that classifies user-uploaded playing card images using PyTorch/TIMM and fine-tuned pre-trained models.",
      highlights: [
        "Fine-tuned pre-trained models for card classification",
        "Cloud deployment with scalable architecture",
        "PyTorch and TIMM framework implementation",
        "User-friendly image upload interface"
      ],
      technologies: ["PyTorch", "TIMM", "Computer Vision", "Cloud Deployment", "Image Classification"],
      impact: "Practical application of MLOps principles in production",
      status: "Deployed",
      type: "ML Application",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Pet Detection System",
      category: "Computer Vision",
      description: "Bachelor's thesis project: Detection of pets wandering in a residential area using computer vision techniques for automated monitoring.",
      highlights: [
        "Computer vision for pet detection and tracking",
        "Residential area monitoring application",
        "Automated alert system for pet safety",
        "Real-world problem solving with AI"
      ],
      technologies: ["Computer Vision", "Object Detection", "Python", "OpenCV", "Machine Learning"],
      impact: "Innovative solution for pet safety in residential communities",
      status: "Research Project",
      type: "Research"
    },
    {
      title: "Bestseller More App Analysis",
      category: "Product Analysis",
      description: "Detailed analysis of The Bestseller More App applying project management concepts to evaluate objectives, risks, and team interactions.",
      highlights: [
        "Comprehensive product analysis using PM frameworks",
        "Risk assessment and mitigation strategies",
        "Team interaction and workflow evaluation",
        "Practical recommendations for improvement"
      ],
      technologies: ["Product Analysis", "Project Management", "Risk Assessment", "Business Analysis"],
      impact: "Strategic insights and practical recommendations for product improvement",
      status: "Completed",
      type: "Business Analysis"
    }
  ];

  const upcomingProjects = [
    "Advanced ML pipeline for product recommendations",
    "Distributed systems performance optimization toolkit",
    "Product analytics dashboard for cross-functional teams"
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-accent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From distributed systems architecture to product strategy and machine learning applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="hover-lift glass-card animate-fade-in h-full">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Badge variant="outline" className="mb-3">
                      {project.category}
                    </Badge>
                    <CardTitle className="text-xl mb-2 leading-tight">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Target size={16} />
                      <span className="text-sm">{project.type}</span>
                      <span className="text-xs">•</span>
                      <Badge 
                        variant={project.status === "Production" ? "default" : 
                                project.status === "Deployed" ? "secondary" : "outline"}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="text-primary">
                    {project.category === "System Architecture" && <Zap size={24} />}
                    {project.category === "Data Engineering" && <Code size={24} />}
                    {project.category === "Product Management" && <Target size={24} />}
                    {(project.category === "Machine Learning" || project.category === "Computer Vision") && <Lightbulb size={24} />}
                    {(project.category === "Product Analysis" || project.category === "Business Analysis") && <Target size={24} />}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-3 text-primary">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-primary">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="hover-lift text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-primary-soft rounded-lg">
                  <h4 className="font-semibold mb-2 text-primary flex items-center gap-2">
                    <Target size={16} />
                    Impact:
                  </h4>
                  <p className="text-sm text-foreground">{project.impact}</p>
                </div>

                {(project.demoUrl || project.githubUrl) && (
                  <div className="flex gap-3 pt-2">
                    {project.demoUrl && (
                      <Button variant="outline" size="sm" className="hover-lift group">
                        <ExternalLink size={16} className="mr-2 group-hover:translate-x-1 transition-transform" />
                        Live Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" className="hover-lift">
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upcoming Projects */}
        <Card className="glass-card hover-lift animate-fade-in">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Lightbulb size={20} className="text-primary" />
              Upcoming Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Currently exploring new opportunities in product management, distributed systems, 
              and machine learning applications. Here's what's coming next:
            </p>
            
            <ul className="space-y-3">
              {upcomingProjects.map((project, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  {project}
                </li>
              ))}
            </ul>

            <div className="mt-8 text-center">
              <Button className="hover-lift">
                Let's Collaborate on Something Amazing
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProjectsSection;