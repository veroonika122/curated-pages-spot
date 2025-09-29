import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const BlogPost2 = () => {
  return (
    <div className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Button 
          variant="ghost" 
          className="mb-8 hover-lift"
          onClick={() => window.history.back()}
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Portfolio
        </Button>

        <Card className="glass-card">
          <CardHeader className="text-center pb-8">
            <Badge variant="outline" className="w-fit mx-auto mb-4">Technical</Badge>
            <CardTitle className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
              Building Cost-Efficient Distributed Systems at Scale
            </CardTitle>
            <div className="text-muted-foreground">
              <span>September 12, 2025</span> • <span>12 min read</span>
            </div>
          </CardHeader>

          <CardContent className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              How we saved tens of thousands in infrastructure costs while maintaining system reliability. A deep dive into cost optimization strategies for messaging platforms.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">The Challenge</h2>
            <p className="mb-6">
              At Twilio, our messaging infrastructure was processing millions of messages daily, but our costs were scaling faster than our usage. We needed to optimize without compromising reliability or performance.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Real-Time Monitoring System</h2>
            <p className="mb-6">
              The first step was visibility. We built a comprehensive monitoring system using Spark Streaming and Kafka that gave us real-time insights into cost patterns, usage spikes, and resource utilization across our entire messaging pipeline.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Cost Modeling with C4 Diagrams</h2>
            <p className="mb-6">
              We used C4 architecture diagrams to map out our system's cost centers and identify optimization opportunities. This visual approach helped us communicate complex trade-offs to stakeholders and prioritize improvements.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Key Optimizations</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Implemented intelligent message batching to reduce API calls by 40%</li>
              <li>Optimized database queries and connection pooling</li>
              <li>Added smart caching layers for frequently accessed data</li>
              <li>Improved resource allocation based on usage patterns</li>
              <li>Automated scaling policies to match demand curves</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Results and Impact</h2>
            <p className="mb-6">
              The optimizations delivered significant cost savings while actually improving system performance. More importantly, the monitoring and optimization framework we built became a template for other teams.
            </p>

            <p className="text-lg">
              Building cost-efficient systems isn't just about cutting costs—it's about building sustainable, scalable architecture that can grow with your business while maintaining operational excellence.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlogPost2;