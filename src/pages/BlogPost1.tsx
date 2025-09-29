import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const BlogPost1 = () => {
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
            <Badge variant="outline" className="w-fit mx-auto mb-4">Career</Badge>
            <CardTitle className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
              Transitioning from Engineering to Product Management: Lessons Learned
            </CardTitle>
            <div className="text-muted-foreground">
              <span>September 15, 2025</span> • <span>8 min read</span>
            </div>
          </CardHeader>

          <CardContent className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              My journey from building distributed systems at Twilio to driving product strategy has been both challenging and rewarding. What I learned about bridging the gap between technical excellence and business value.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">The Technical Foundation</h2>
            <p className="mb-6">
              Starting as a software engineer gave me a deep understanding of what's possible, what's hard, and what's impossible. This technical foundation has been invaluable in product management, allowing me to have meaningful conversations with engineering teams and make informed trade-off decisions.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Learning to Think in Problems, Not Solutions</h2>
            <p className="mb-6">
              The biggest shift was learning to focus on the problem space before jumping to solutions. As an engineer, I was trained to solve problems quickly and efficiently. As a PM, I needed to first ensure we were solving the right problems for the right people.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Cross-Functional Leadership</h2>
            <p className="mb-6">
              Leading without authority became a core skill. At Twilio, working across four messaging teams taught me how to align stakeholders, communicate effectively, and drive adoption through influence rather than mandate.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Key Takeaways</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Technical credibility opens doors and builds trust with engineering teams</li>
              <li>Customer empathy is learned through deliberate practice and exposure</li>
              <li>Data-driven decisions require both quantitative metrics and qualitative insights</li>
              <li>Stakeholder alignment is ongoing work, not a one-time achievement</li>
            </ul>

            <p className="text-lg">
              The transition isn't just about changing roles—it's about developing a new lens for viewing problems and opportunities. The technical background remains an asset, but it's the product thinking that creates the real impact.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlogPost1;