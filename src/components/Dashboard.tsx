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
  Award
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
      <div className="bg-gradient-hero rounded-xl p-6 text-primary-foreground animate-fade-in">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-2xl font-bold mb-2">Welcome back, {userProfile.name}!</h1>
            <p className="text-primary-foreground/90 mb-4">
              Continue your journey to find the perfect educational path
            </p>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-white/20 text-primary-foreground border-white/30">
                {userProfile.class} • {userProfile.stream}
              </Badge>
              <span className="text-sm text-primary-foreground/80">
                Profile {userProfile.profileCompletion}% complete
              </span>
            </div>
          </div>
          <div className="flex space-x-3">
            {!userProfile.quizCompleted && (
              <Button asChild variant="secondary" className="bg-white/20 text-primary-foreground border-white/30 hover:bg-white/30">
                <Link to="/quiz">
                  <Trophy className="w-4 h-4 mr-2" />
                  Take Quiz
                </Link>
              </Button>
            )}
            <Button asChild variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Link to="/colleges">
                <MapPin className="w-4 h-4 mr-2" />
                Explore Colleges
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Profile completion progress */}
        <div className="mt-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-primary-foreground/90">Profile Completion</span>
            <span className="text-primary-foreground">{userProfile.profileCompletion}%</span>
          </div>
          <Progress value={userProfile.profileCompletion} className="bg-white/20" />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 animate-slide-up">
        {quickStats.map((stat, index) => (
          <Card key={index} className="hover-lift cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-accent">{stat.change}</p>
                </div>
                <div className="p-2 bg-primary-light rounded-lg">
                  <stat.icon className="w-5 h-5 text-primary" />
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

          {/* Quick Actions */}
          <Card className="bg-gradient-card border-0">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                <Link to="/scholarships">
                  <Award className="w-4 h-4 mr-2" />
                  Browse Scholarships
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                <Link to="/resources">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Study Resources
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                <Link to="/career-paths">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Career Paths
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;