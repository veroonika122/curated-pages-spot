import { Calendar, Clock, ArrowRight, BookOpen, Lightbulb, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Transitioning from Engineering to Product Management: Lessons Learned",
      excerpt: "My journey from building distributed systems at Twilio to driving product strategy. What I learned about bridging the gap between technical excellence and business value.",
      category: "Career",
      readTime: "8 min read",
      date: "Coming Soon",
      featured: true,
      tags: ["Product Management", "Career Transition", "Engineering Leadership"]
    },
    {
      title: "Building Cost-Efficient Distributed Systems at Scale",
      excerpt: "How we saved tens of thousands in infrastructure costs while maintaining system reliability. A deep dive into cost optimization strategies for messaging platforms.",
      category: "Technical",
      readTime: "12 min read", 
      date: "Coming Soon",
      featured: true,
      tags: ["Distributed Systems", "Cost Optimization", "System Architecture"]
    },
    {
      title: "The Art of Cross-Functional Collaboration",
      excerpt: "Leading initiatives across four messaging teams taught me valuable lessons about alignment, communication, and driving adoption in complex organizations.",
      category: "Leadership",
      readTime: "6 min read",
      date: "Coming Soon",
      tags: ["Leadership", "Cross-functional Teams", "Communication"]
    },
    {
      title: "MLOps in Practice: From Research to Production",
      excerpt: "Deploying computer vision models in the cloud. A practical guide to taking machine learning projects from local development to production systems.",
      category: "Technical",
      readTime: "10 min read",
      date: "Coming Soon",
      tags: ["Machine Learning", "MLOps", "Computer Vision", "Cloud Computing"]
    },
    {
      title: "Product Strategy for Technical Products",
      excerpt: "Insights from developing go-to-market strategies for technical products. How to align innovation with market needs and customer value.",
      category: "Product",
      readTime: "7 min read",
      date: "Coming Soon",
      tags: ["Product Strategy", "Go-to-Market", "Technical Products"]
    },
    {
      title: "International Study Experience: Denmark vs Estonia",
      excerpt: "Comparing educational approaches, work culture, and innovation ecosystems. What studying in Denmark taught me about entrepreneurial thinking.",
      category: "Personal",
      readTime: "5 min read",
      date: "Coming Soon",
      tags: ["Education", "International Experience", "Cultural Insights"]
    }
  ];

  const topics = [
    { name: "Product Management", count: 8, icon: TrendingUp },
    { name: "Distributed Systems", count: 12, icon: BookOpen },
    { name: "Career Development", count: 6, icon: Lightbulb },
    { name: "System Architecture", count: 10, icon: BookOpen },
    { name: "Leadership", count: 7, icon: TrendingUp },
    { name: "Machine Learning", count: 5, icon: Lightbulb }
  ];

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            Blog & Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing thoughts on product management, distributed systems, and the journey from engineering to product leadership
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <Lightbulb size={24} className="text-primary" />
            Featured Articles
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <Card key={index} className="hover-lift glass-card animate-fade-in">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center gap-4 text-muted-foreground text-sm">
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="hover-lift text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="ghost" className="hover-lift group p-0 h-auto justify-start">
                    Read More
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Articles */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <BookOpen size={24} className="text-primary" />
            Latest Articles
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <Card key={index} className="hover-lift glass-card animate-fade-in">
                <CardHeader className="pb-4">
                  <Badge variant="outline" className="w-fit mb-2">{post.category}</Badge>
                  <CardTitle className="text-lg leading-tight hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-muted-foreground text-xs">
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="hover-lift group p-0 h-auto justify-start">
                    Read Article
                    <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Topics & Newsletter */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Popular Topics */}
          <Card className="glass-card hover-lift animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <TrendingUp size={20} className="text-primary" />
                Popular Topics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topics.map((topic, index) => {
                  const IconComponent = topic.icon;
                  return (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="flex items-center gap-3">
                        <IconComponent size={18} className="text-primary" />
                        <span className="font-medium">{topic.name}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {topic.count} articles
                      </Badge>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Newsletter Signup */}
          <Card className="glass-card hover-lift animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <BookOpen size={20} className="text-primary" />
                Stay Updated
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Get notified when I publish new articles about product management, 
                distributed systems, and career development in tech.
              </p>
              
              <div className="space-y-3">
                <div className="p-4 bg-primary-soft rounded-lg">
                  <h4 className="font-medium mb-2 text-primary">Coming Soon:</h4>
                  <ul className="text-sm text-foreground space-y-1">
                    <li>• Weekly tech insights newsletter</li>
                    <li>• Product management case studies</li>
                    <li>• Career transition stories</li>
                  </ul>
                </div>
                
                <Button className="w-full hover-lift">
                  Join the Waitlist
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;