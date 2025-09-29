import { Calendar, Clock, ArrowRight, BookOpen, Lightbulb, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const BlogSection = () => {
  const navigate = useNavigate();
  const blogPosts = [
    {
      title: "Transitioning from Engineering to Product Management: Lessons Learned",
      excerpt: "My journey from building distributed systems at Twilio to driving product strategy. What I learned about bridging the gap between technical excellence and business value.",
      category: "Career",
      readTime: "8 min read",
      date: "Sept 15, 2025",
      author: "Veroonika Tamm",
      link: "/blog/engineering-to-pm"
    },
    {
      title: "Building Cost-Efficient Distributed Systems at Scale",
      excerpt: "How we saved tens of thousands in infrastructure costs while maintaining system reliability. A deep dive into cost optimization strategies for messaging platforms.",
      category: "Technical",
      readTime: "12 min read", 
      date: "Sept 12, 2025",
      author: "Veroonika Tamm",
      link: "/blog/cost-efficient-systems"
    }
  ];

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            Blog
          </h2>
        </div>

        {/* Blog Posts */}
        <div className="space-y-6 mb-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover-lift glass-card animate-fade-in p-6">
              <div className="flex gap-6">
                {/* Placeholder Image */}
                <div className="w-24 h-24 bg-gradient-primary rounded-lg flex-shrink-0 flex items-center justify-center">
                  <span className="text-primary-foreground text-2xl">🖼</span>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <div className="text-sm text-muted-foreground mb-3">
                    {post.date} | by {post.author}
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="hover-lift group p-0 h-auto justify-start text-primary"
                    onClick={() => navigate(post.link)}
                  >
                    Read more
                    <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button variant="outline" className="hover-lift" disabled>
            ← Newer Posts
          </Button>
          <Button variant="outline" className="hover-lift" disabled>
            Older Posts →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;