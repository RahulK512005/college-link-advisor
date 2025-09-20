import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  Edit3, 
  Save, 
  MapPin, 
  Calendar,
  BookOpen,
  Trophy,
  Heart,
  Settings,
  Bell,
  Shield,
  HelpCircle
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    phone: "+91-98765-43210",
    dateOfBirth: "2006-03-15",
    class: "12",
    stream: "Science",
    school: "Government Higher Secondary School",
    city: "Ahmedabad",
    state: "Gujarat",
    interests: ["Computer Science", "Mathematics", "Research"],
    careerGoals: "I want to pursue Computer Science and work in technology sector, preferably in software development or artificial intelligence.",
  });

  const [achievements] = useState([
    { title: "Quiz Master", description: "Completed aptitude quiz with 87% score", icon: Trophy, date: "Mar 2024" },
    { title: "College Explorer", description: "Explored 23 government colleges", icon: MapPin, date: "Mar 2024" },
    { title: "Profile Complete", description: "75% profile completion achieved", icon: User, date: "Mar 2024" },
  ]);

  const [savedColleges] = useState([
    { name: "Government Engineering College", location: "Gandhinagar", type: "Engineering" },
    { name: "Government Science College", location: "Ahmedabad", type: "Science" },
    { name: "Government Commerce College", location: "Ahmedabad", type: "Commerce" },
  ]);

  const handleSave = () => {
    setIsEditing(false);
    // Here you would save to API/database
  };

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const profileCompletion = () => {
    const fields = Object.values(profileData);
    const completedFields = fields.filter(field => 
      Array.isArray(field) ? field.length > 0 : field.trim() !== ""
    ).length;
    return Math.round((completedFields / fields.length) * 100);
  };

  const completion = profileCompletion();

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card className="bg-gradient-hero text-primary-foreground">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">{profileData.name}</h1>
                <p className="text-primary-foreground/90">{profileData.class}th Grade • {profileData.stream}</p>
                <p className="text-primary-foreground/80 text-sm">{profileData.city}, {profileData.state}</p>
              </div>
            </div>
            <Button
              variant="secondary"
              className="bg-white/20 text-primary-foreground border-white/30 hover:bg-white/30"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? <Save className="w-4 h-4 mr-2" /> : <Edit3 className="w-4 h-4 mr-2" />}
              {isEditing ? "Save" : "Edit Profile"}
            </Button>
          </div>
          
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-primary-foreground/90">Profile Completion</span>
              <span className="text-primary-foreground">{completion}%</span>
            </div>
            <Progress value={completion} className="bg-white/20" />
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Personal Information */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Keep your information up to date for better recommendations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  {isEditing ? (
                    <Input
                      id="name"
                      value={profileData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                    />
                  ) : (
                    <p className="text-foreground font-medium mt-1">{profileData.name}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  {isEditing ? (
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  ) : (
                    <p className="text-foreground font-medium mt-1">{profileData.email}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  {isEditing ? (
                    <Input
                      id="phone"
                      value={profileData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  ) : (
                    <p className="text-foreground font-medium mt-1">{profileData.phone}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="dob">Date of Birth</Label>
                  {isEditing ? (
                    <Input
                      id="dob"
                      type="date"
                      value={profileData.dateOfBirth}
                      onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                    />
                  ) : (
                    <p className="text-foreground font-medium mt-1">{profileData.dateOfBirth}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Academic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="class">Current Class</Label>
                  {isEditing ? (
                    <Select value={profileData.class} onValueChange={(value) => handleInputChange("class", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">Class 10</SelectItem>
                        <SelectItem value="11">Class 11</SelectItem>
                        <SelectItem value="12">Class 12</SelectItem>
                        <SelectItem value="graduate">Graduate</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <p className="text-foreground font-medium mt-1">Class {profileData.class}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="stream">Stream</Label>
                  {isEditing ? (
                    <Select value={profileData.stream} onValueChange={(value) => handleInputChange("stream", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Science">Science</SelectItem>
                        <SelectItem value="Commerce">Commerce</SelectItem>
                        <SelectItem value="Arts">Arts</SelectItem>
                        <SelectItem value="Vocational">Vocational</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <p className="text-foreground font-medium mt-1">{profileData.stream}</p>
                  )}
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="school">School/Institution</Label>
                  {isEditing ? (
                    <Input
                      id="school"
                      value={profileData.school}
                      onChange={(e) => handleInputChange("school", e.target.value)}
                    />
                  ) : (
                    <p className="text-foreground font-medium mt-1">{profileData.school}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Interests & Goals</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Interests</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {profileData.interests.map((interest, index) => (
                    <Badge key={index} variant="secondary">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <Label htmlFor="goals">Career Goals</Label>
                {isEditing ? (
                  <Textarea
                    id="goals"
                    value={profileData.careerGoals}
                    onChange={(e) => handleInputChange("careerGoals", e.target.value)}
                    rows={3}
                  />
                ) : (
                  <p className="text-muted-foreground mt-1">{profileData.careerGoals}</p>
                )}
              </div>
            </CardContent>
          </Card>

          {isEditing && (
            <div className="flex space-x-3">
              <Button onClick={handleSave} className="bg-gradient-primary">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-primary" />
                <span>Achievements</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                  <div className="p-2 bg-primary-light rounded-lg">
                    <achievement.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{achievement.title}</h4>
                    <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    <p className="text-xs text-muted-foreground">{achievement.date}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Saved Colleges */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-red-500" />
                <span>Saved Colleges</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {savedColleges.map((college, index) => (
                <div key={index} className="p-3 border border-border rounded-lg">
                  <h4 className="font-medium text-sm">{college.name}</h4>
                  <p className="text-xs text-muted-foreground">{college.location}</p>
                  <Badge variant="outline" className="text-xs mt-1">
                    {college.type}
                  </Badge>
                </div>
              ))}
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="#/colleges">View All Colleges</a>
              </Button>
            </CardContent>
          </Card>

          {/* Quick Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="w-5 h-5 text-primary" />
                <span>Quick Settings</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Bell className="w-4 h-4 mr-2" />
                Notification Settings
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Shield className="w-4 h-4 mr-2" />
                Privacy Settings
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <HelpCircle className="w-4 h-4 mr-2" />
                Help & Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;