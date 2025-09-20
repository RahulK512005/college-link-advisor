import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Clock, 
  Bell, 
  AlertCircle,
  CheckCircle,
  BookOpen,
  GraduationCap,
  Award
} from "lucide-react";

const TimelinePage = () => {
  const events = [
    {
      id: 1,
      title: "IIT JEE Application Deadline",
      description: "Last date to apply for Joint Entrance Examination",
      date: "March 15, 2024",
      time: "11:59 PM",
      daysLeft: 12,
      type: "deadline",
      category: "Entrance Exam",
      priority: "high",
      status: "upcoming"
    },
    {
      id: 2,
      title: "State College Counseling Begins",
      description: "Gujarat state counseling for government college admissions",
      date: "March 20, 2024",
      time: "10:00 AM",
      daysLeft: 17,
      type: "event",
      category: "Admission",
      priority: "high",
      status: "upcoming"
    },
    {
      id: 3,
      title: "Merit Scholarship Application",
      description: "Apply for state government merit scholarships",
      date: "March 25, 2024",
      time: "5:00 PM",
      daysLeft: 22,
      type: "deadline",
      category: "Scholarship",
      priority: "medium",
      status: "upcoming"
    },
    {
      id: 4,
      title: "NEET Registration",
      description: "National Eligibility cum Entrance Test registration opens",
      date: "February 28, 2024",
      time: "9:00 AM",
      daysLeft: -5,
      type: "deadline",
      category: "Entrance Exam",
      priority: "high",
      status: "completed"
    },
    {
      id: 5,
      title: "Career Guidance Workshop",
      description: "Online workshop on career opportunities in government sector",
      date: "April 10, 2024",
      time: "2:00 PM",
      daysLeft: 38,
      type: "event",
      category: "Workshop",
      priority: "low",
      status: "upcoming"
    }
  ];

  const getStatusColor = (status: string, priority: string, daysLeft: number) => {
    if (status === "completed") return "bg-accent text-accent-foreground";
    if (daysLeft <= 7) return "bg-destructive text-destructive-foreground";
    if (priority === "high") return "bg-warning text-warning-foreground";
    return "bg-secondary text-secondary-foreground";
  };

  const getStatusIcon = (status: string, daysLeft: number) => {
    if (status === "completed") return CheckCircle;
    if (daysLeft <= 7) return AlertCircle;
    return Clock;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Entrance Exam": return BookOpen;
      case "Admission": return GraduationCap;
      case "Scholarship": return Award;
      case "Workshop": return Calendar;
      default: return Calendar;
    }
  };

  const upcomingEvents = events.filter(event => event.status === "upcoming");
  const completedEvents = events.filter(event => event.status === "completed");

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-hero text-primary-foreground">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-2xl">
            <Calendar className="w-6 h-6" />
            <span>Academic Timeline</span>
          </CardTitle>
          <CardDescription className="text-primary-foreground/90">
            Stay on top of important deadlines, entrance exams, and admission dates
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/20 rounded-lg p-4">
              <h3 className="font-medium text-primary-foreground">Upcoming Deadlines</h3>
              <p className="text-2xl font-bold text-primary-foreground">{upcomingEvents.length}</p>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <h3 className="font-medium text-primary-foreground">This Month</h3>
              <p className="text-2xl font-bold text-primary-foreground">
                {upcomingEvents.filter(e => e.daysLeft <= 30).length}
              </p>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <h3 className="font-medium text-primary-foreground">Urgent</h3>
              <p className="text-2xl font-bold text-primary-foreground">
                {upcomingEvents.filter(e => e.daysLeft <= 7).length}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-foreground">Upcoming Events</h2>
          <Button variant="outline" size="sm">
            <Bell className="w-4 h-4 mr-2" />
            Set Reminders
          </Button>
        </div>

        <div className="space-y-4 animate-fade-in">
          {upcomingEvents.map((event) => {
            const StatusIcon = getStatusIcon(event.status, event.daysLeft);
            const CategoryIcon = getCategoryIcon(event.category);
            
            return (
              <Card key={event.id} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="p-2 bg-primary-light rounded-lg">
                        <CategoryIcon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-foreground">{event.title}</h3>
                          <Badge 
                            className={getStatusColor(event.status, event.priority, event.daysLeft)}
                          >
                            {event.category}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-3">{event.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {event.date}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {event.time}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2 mb-2">
                        <StatusIcon className={`w-5 h-5 ${
                          event.daysLeft <= 7 ? "text-destructive" : "text-muted-foreground"
                        }`} />
                        <Badge 
                          variant={event.daysLeft <= 7 ? "destructive" : "secondary"}
                        >
                          {event.daysLeft > 0 ? `${event.daysLeft} days left` : "Overdue"}
                        </Badge>
                      </div>
                      <Button size="sm" variant="outline">
                        Set Reminder
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Completed Events */}
      {completedEvents.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Completed Events</h2>
          
          <div className="space-y-3 animate-slide-up">
            {completedEvents.map((event) => {
              const CategoryIcon = getCategoryIcon(event.category);
              
              return (
                <Card key={event.id} className="opacity-75">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-accent-light rounded-lg">
                        <CategoryIcon className="w-4 h-4 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-medium text-foreground">{event.title}</h4>
                          <Badge variant="secondary" className="bg-accent text-accent-foreground">
                            Completed
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                        <p className="text-xs text-muted-foreground mt-1">{event.date} at {event.time}</p>
                      </div>
                      <CheckCircle className="w-5 h-5 text-accent" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default TimelinePage;