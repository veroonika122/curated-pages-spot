import { Book, Star, Calendar, Lightbulb, TrendingUp, Users, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const BookshelfSection = () => {
  const currentlyReading = [
    {
      title: "Inspired: How to Create Tech Products Customers Love",
      author: "Marty Cagan",
      category: "Product Management",
      progress: 75,
      startDate: "March 2025",
      notes: "Deep insights into product discovery and delivery. Particularly relevant as I transition into PM role.",
      rating: null,
      cover: "https://via.placeholder.com/120x180/3B82F6/FFFFFF?text=INSPIRED"
    },
    {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      category: "System Design",
      progress: 45,
      startDate: "February 2025",
      notes: "Essential reading for understanding distributed systems at scale. Great complement to my Twilio experience.",
      rating: null,
      cover: "https://via.placeholder.com/120x180/10B981/FFFFFF?text=DDIA"
    }
  ];

  const favoriteBooks = [
    {
      title: "The Lean Startup",
      author: "Eric Ries",
      category: "Entrepreneurship",
      rating: 5,
      readDate: "January 2025",
      review: "Fundamental reading for anyone in product. The build-measure-learn cycle is now part of my daily thinking process.",
      keyTakeaways: ["Validated learning", "MVP approach", "Innovation accounting"],
      cover: "https://via.placeholder.com/120x180/EF4444/FFFFFF?text=LEAN"
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      category: "Personal Development",
      rating: 5,
      readDate: "December 2024",
      review: "Life-changing approach to habit formation. Applied these principles to build my daily learning routine.",
      keyTakeaways: ["1% better every day", "Identity-based habits", "Environment design"],
      cover: "https://via.placeholder.com/120x180/8B5CF6/FFFFFF?text=HABITS"
    },
    {
      title: "System Design Interview",
      author: "Alex Xu",
      category: "Technical",
      rating: 4,
      readDate: "November 2024",
      review: "Excellent framework for thinking about large-scale systems. Directly applicable to my work at Twilio.",
      keyTakeaways: ["Scalability patterns", "Trade-off analysis", "System design process"],
      cover: "https://via.placeholder.com/120x180/F59E0B/FFFFFF?text=SDI"
    },
    {
      title: "The Hard Thing About Hard Things",
      author: "Ben Horowitz",
      category: "Leadership",
      rating: 4,
      readDate: "October 2024",
      review: "Raw, honest insights into startup leadership challenges. Valuable perspective on making difficult decisions.",
      keyTakeaways: ["Decision-making under pressure", "Building culture", "Leadership in crisis"],
      cover: "https://via.placeholder.com/120x180/EC4899/FFFFFF?text=HARD"
    }
  ];

  const readingList = [
    {
      title: "Escaping the Build Trap",
      author: "Melissa Perri",
      category: "Product Management",
      priority: "High",
      reason: "Next step in my PM learning journey - focusing on outcome-driven product development"
    },
    {
      title: "The Phoenix Project",
      author: "Gene Kim",
      category: "DevOps",
      priority: "High", 
      reason: "Understanding DevOps culture and practices for better technical leadership"
    },
    {
      title: "Crossing the Chasm",
      author: "Geoffrey Moore",
      category: "Marketing",
      priority: "Medium",
      reason: "Essential for understanding technology adoption lifecycle and go-to-market strategies"
    },
    {
      title: "Zero to One",
      author: "Peter Thiel",
      category: "Entrepreneurship",
      priority: "Medium",
      reason: "Building monopoly businesses and contrarian thinking in tech"
    },
    {
      title: "The Culture Map",
      author: "Erin Meyer",
      category: "Cross-cultural",
      priority: "Low",
      reason: "Enhancing international collaboration skills for global teams"
    }
  ];

  const categories = [
    { name: "Product Management", count: 8, icon: TrendingUp, color: "bg-blue-100 text-blue-700" },
    { name: "System Design", count: 12, icon: Briefcase, color: "bg-green-100 text-green-700" },
    { name: "Leadership", count: 6, icon: Users, color: "bg-purple-100 text-purple-700" },
    { name: "Personal Development", count: 5, icon: Lightbulb, color: "bg-yellow-100 text-yellow-700" },
    { name: "Entrepreneurship", count: 7, icon: TrendingUp, color: "bg-red-100 text-red-700" }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={14}
            className={star <= rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="books" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-accent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            My Bookshelf
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning through books on product management, system design, leadership, and personal growth
          </p>
        </div>

        {/* Currently Reading */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <Book size={24} className="text-primary" />
            Currently Reading
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {currentlyReading.map((book, index) => (
              <Card key={index} className="hover-lift glass-card animate-fade-in">
                <CardHeader>
                  <div className="flex gap-4">
                    <div className="w-20 h-28 rounded-lg bg-gradient-primary shadow-md flex items-center justify-center">
                      <Book size={24} className="text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <Badge variant="outline" className="mb-2">{book.category}</Badge>
                      <CardTitle className="text-lg leading-tight mb-1">{book.title}</CardTitle>
                      <p className="text-muted-foreground text-sm">by {book.author}</p>
                      <div className="flex items-center gap-2 mt-2 text-muted-foreground text-xs">
                        <Calendar size={12} />
                        Started {book.startDate}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{book.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all" 
                        style={{ width: `${book.progress}%` }}
                      />
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed italic">
                    "{book.notes}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Favorite Books */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <Star size={24} className="text-primary" />
            Favorite Reads
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {favoriteBooks.map((book, index) => (
              <Card key={index} className="hover-lift glass-card animate-fade-in">
                <CardHeader className="pb-4">
                  <div className="w-full h-32 rounded-lg bg-gradient-primary shadow-md flex items-center justify-center mb-4">
                    <Book size={32} className="text-primary-foreground" />
                  </div>
                  <Badge variant="outline" className="w-fit mb-2">{book.category}</Badge>
                  <CardTitle className="text-base leading-tight">{book.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">by {book.author}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    {renderStars(book.rating)}
                    <div className="flex items-center gap-1 text-muted-foreground text-xs">
                      <Calendar size={12} />
                      {book.readDate}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-xs leading-relaxed italic">
                    "{book.review}"
                  </p>
                  
                  <div>
                    <h5 className="text-xs font-semibold mb-2 text-primary">Key Takeaways:</h5>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {book.keyTakeaways.map((takeaway, takeawayIndex) => (
                        <li key={takeawayIndex} className="flex items-start gap-1">
                          <span className="text-primary mt-1">•</span>
                          {takeaway}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Want to Read */}
        <Card className="glass-card hover-lift animate-fade-in max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Lightbulb size={20} className="text-primary" />
              Want to Read
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {readingList.map((book, index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/50 space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-medium text-sm">{book.title}</h4>
                      <p className="text-muted-foreground text-xs">by {book.author}</p>
                    </div>
                    <Badge 
                      variant={book.priority === "High" ? "default" : book.priority === "Medium" ? "secondary" : "outline"}
                      className="text-xs"
                    >
                      {book.priority}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground italic">
                    {book.reason}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Reading Stats */}
        <div className="mt-16 text-center">
          <Card className="p-8 glass-card hover-lift inline-block">
            <h3 className="text-xl font-semibold mb-6 gradient-text">2025 Reading Goals</h3>
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">24</div>
                <div className="text-sm text-muted-foreground">Books Goal</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">8</div>
                <div className="text-sm text-muted-foreground">Books Read</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">33%</div>
                <div className="text-sm text-muted-foreground">Progress</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookshelfSection;