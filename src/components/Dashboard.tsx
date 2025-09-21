import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Trophy, 
  MapPin, 
  TrendingUp, 
  Clock, 
  Star,
  ArrowRight,
  GraduationCap,
  Target,
  Award,
  ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Mock user data - in real app, this would come from API/database
  const userProfile = {
    name: "Priya Sharma",
    class: "Class 12",
    stream: "Science",
    quizCompleted: true,
    profileCompletion: 75,
  };

  const recommendations = [
    {
      title: "B.Sc. Computer Science",
      description: "High match based on your aptitude quiz",
      match: 95,
      category: "Engineering & Technology",
      colleges: 12,
    },
    {
      title: "B.Tech Information Technology",
      description: "Excellent career prospects in IT sector",
      match: 88,
      category: "Engineering & Technology", 
      colleges: 8,
    },
    {
      title: "B.Sc. Mathematics",
      description: "Strong foundation for analytical careers",
      match: 82,
      category: "Pure Sciences",
      colleges: 15,
    },
  ];

  const upcomingDeadlines = [
    {
      title: "IIT JEE Application",
      date: "Mar 15, 2024",
      daysLeft: 12,
      type: "Entrance Exam",
    },
    {
      title: "State College Counseling",
      date: "Mar 20, 2024", 
      daysLeft: 17,
      type: "Admission",
    },
    {
      title: "Merit Scholarship Application",
      date: "Mar 25, 2024",
      daysLeft: 22,
      type: "Scholarship",
    },
  ];

  const quickStats = [
    {
      title: "Colleges Explored",
      value: "23",
      icon: MapPin,
      change: "+5 this week",
    },
    {
      title: "Quiz Score",
      value: "87%",
      icon: Trophy,
      change: "Excellent match",
    },
    {
      title: "Applications",
      value: "6",
      icon: GraduationCap,
      change: "3 pending",
    },
    {
      title: "Scholarships",
      value: "12",
      icon: Award,
      change: "4 eligible",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-hero rounded-2xl p-8 text-primary-foreground animate-fade-in shadow-custom-lg hover-glow">
        <div className="flex items-center justify-between flex-wrap gap-6">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-3 animate-float">Welcome back, {userProfile.name}!</h1>
            <p className="text-primary-foreground/90 mb-6 text-lg">
              Continue your journey to find the perfect educational path
            </p>
            <div className="flex items-center space-x-6">
              <Badge variant="secondary" className="bg-white/20 text-primary-foreground border-white/30 px-4 py-1.5 text-sm">
                {userProfile.class} • {userProfile.stream}
              </Badge>
              <span className="text-sm text-primary-foreground/80 font-medium">
                Profile {userProfile.profileCompletion}% complete
              </span>
            </div>
          </div>
          <div className="flex space-x-4">
            {!userProfile.quizCompleted && (
              <Button asChild variant="secondary" className="bg-white/20 text-primary-foreground border-white/30 hover:bg-white/30 hover-glow rounded-xl px-6">
                <Link to="/quiz">
                  <Trophy className="w-5 h-5 mr-2" />
                  Take Quiz
                </Link>
              </Button>
            )}
            <Button asChild variant="secondary" className="bg-white text-primary hover:bg-white/90 hover-scale rounded-xl px-6 shadow-custom-md">
              <Link to="/colleges">
                <MapPin className="w-5 h-5 mr-2" />
                Explore Colleges
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Profile completion progress */}
        <div className="mt-6">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-primary-foreground/90">Profile Completion</span>
            <span className="text-primary-foreground">{userProfile.profileCompletion}%</span>
          </div>
          <Progress value={userProfile.profileCompletion} className="bg-white/20 h-2" />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
        {quickStats.map((stat, index) => (
          <Card key={index} className="hover-lift cursor-pointer glass border-0 rounded-2xl shadow-custom-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium">{stat.title}</p>
                  <p className="text-3xl font-bold text-foreground mt-1">{stat.value}</p>
                  <p className="text-xs text-accent font-medium mt-1">{stat.change}</p>
                </div>
                <div className="p-3 bg-primary-light rounded-xl shadow-custom-sm">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Personalized Recommendations */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-foreground">Recommended for You</h2>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/courses">
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
          
          <div className="space-y-3 animate-scale-in">
            {recommendations.map((rec, index) => (
              <Card key={index} className="hover-lift cursor-pointer transition-all">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-foreground">{rec.title}</h3>
                        <Badge variant="outline" className="text-xs">
                          {rec.match}% match
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{rec.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span className="flex items-center">
                          <Target className="w-3 h-3 mr-1" />
                          {rec.category}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {rec.colleges} colleges nearby
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-accent mb-1">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        <span className="text-sm font-medium">{rec.match}%</span>
                      </div>
                      <Button size="sm" variant="outline">
                        Explore
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Timeline */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-foreground">Upcoming Deadlines</h2>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/timeline">
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>

          <div className="space-y-3 animate-scale-in">
            {upcomingDeadlines.map((deadline, index) => (
              <Card key={index} className="hover-lift cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-foreground text-sm">{deadline.title}</h3>
                    <Badge 
                      variant={deadline.daysLeft <= 7 ? "destructive" : "secondary"}
                      className="text-xs"
                    >
                      {deadline.daysLeft} days
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{deadline.date}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {deadline.type}
                    </Badge>
                    <Button size="sm" variant="ghost" className="text-xs h-6 px-2">
                      Set Reminder
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>


        </div>
      </div>

      {/* Mini Tabs Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Scholarships Mini Tab */}
        <Card className="hover-lift">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <Award className="w-5 h-5 text-primary" />
              <span>Scholarships for 12th Completed</span>
            </CardTitle>
            <CardDescription>Top scholarships for Indian students after 12th grade</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { name: "INSPIRE Scholarship", amount: "₹80,000/year", org: "DST, Govt of India" },
              { name: "KVPY Fellowship", amount: "₹5,000-7,000/month", org: "IISc Bangalore" },
              { name: "Tata Trusts Scholarship", amount: "₹2,00,000/year", org: "Tata Trusts" },
              { name: "Reliance Foundation", amount: "₹2,00,000/year", org: "Reliance Foundation" },
              { name: "AICTE Pragati", amount: "₹50,000/year", org: "AICTE" }
            ].map((scholarship, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <h4 className="font-medium text-sm">{scholarship.name}</h4>
                  <p className="text-xs text-muted-foreground">{scholarship.org}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-primary">{scholarship.amount}</p>
                </div>
              </div>
            ))}
            <Button variant="outline" size="sm" className="w-full mt-3" asChild>
              <Link to="/timeline?tab=scholarships">
                <ExternalLink className="w-4 h-4 mr-2" />
                View All Scholarships
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Books Mini Tab */}
        <Card className="hover-lift">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <BookOpen className="w-5 h-5 text-primary" />
              <span>Essential IT Books</span>
            </CardTitle>
            <CardDescription>Top books for Computer Science and IT students</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { title: "Introduction to Algorithms", author: "Cormen, Leiserson, Rivest", rating: "4.8" },
              { title: "Deep Learning", author: "Ian Goodfellow, Yoshua Bengio", rating: "4.7" },
              { title: "Python Crash Course", author: "Eric Matthes", rating: "4.6" },
              { title: "Clean Code", author: "Robert C. Martin", rating: "4.5" },
              { title: "System Design Interview", author: "Alex Xu", rating: "4.4" }
            ].map((book, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <h4 className="font-medium text-sm">{book.title}</h4>
                  <p className="text-xs text-muted-foreground">{book.author}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{book.rating}</span>
                </div>
              </div>
            ))}
            <Button variant="outline" size="sm" className="w-full mt-3" asChild>
              <Link to="/timeline?tab=books">
                <ExternalLink className="w-4 h-4 mr-2" />
                View All Books
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;