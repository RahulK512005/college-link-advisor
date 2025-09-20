import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Search, 
  Filter, 
  Star, 
  Users, 
  BookOpen,
  Wifi,
  Car,
  Home,
  Phone,
  ExternalLink,
  Heart,
  HeartOff
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface College {
  id: number;
  name: string;
  location: string;
  district: string;
  type: "Government" | "Aided" | "Private";
  courses: string[];
  facilities: string[];
  cutoff: string;
  fees: string;
  contact: string;
  rating: number;
  distance: string;
  established: string;
  affiliation: string;
  isFavorite?: boolean;
}

const CollegeDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);

  // Sample college data - in real app, this would come from API
  const colleges: College[] = [
    {
      id: 1,
      name: "Government Engineering College",
      location: "Sector 15, Gandhinagar",
      district: "Gandhinagar",
      type: "Government",
      courses: ["B.Tech Computer Science", "B.Tech Electronics", "B.Tech Mechanical", "B.Tech Civil"],
      facilities: ["Library", "Hostel", "Labs", "Wi-Fi", "Canteen", "Sports"],
      cutoff: "85% (General), 75% (OBC), 65% (SC/ST)",
      fees: "₹25,000/year",
      contact: "+91-79-2325-0000",
      rating: 4.5,
      distance: "2.3 km",
      established: "1948",
      affiliation: "Gujarat Technological University"
    },
    {
      id: 2,
      name: "Government Science College",
      location: "Ellis Bridge, Ahmedabad",
      district: "Ahmedabad",
      type: "Government",
      courses: ["B.Sc. Physics", "B.Sc. Chemistry", "B.Sc. Mathematics", "B.Sc. Biology"],
      facilities: ["Library", "Labs", "Wi-Fi", "Canteen"],
      cutoff: "75% (General), 65% (OBC), 55% (SC/ST)",
      fees: "₹15,000/year",
      contact: "+91-79-2657-0000",
      rating: 4.2,
      distance: "5.7 km",
      established: "1893",
      affiliation: "Gujarat University"
    },
    {
      id: 3,
      name: "Government Commerce College",
      location: "Navrangpura, Ahmedabad",
      district: "Ahmedabad",
      type: "Government",
      courses: ["B.Com", "BBA", "B.A. Economics", "BCA"],
      facilities: ["Library", "Computer Lab", "Wi-Fi", "Auditorium"],
      cutoff: "70% (General), 60% (OBC), 50% (SC/ST)",
      fees: "₹12,000/year",
      contact: "+91-79-2630-0000",
      rating: 4.0,
      distance: "8.1 km",
      established: "1960",
      affiliation: "Gujarat University"
    }
  ];

  const districts = ["All Districts", "Ahmedabad", "Gandhinagar", "Surat", "Vadodara", "Rajkot"];
  const collegeTypes = ["All Types", "Government", "Aided", "Private"];

  const filteredColleges = colleges.filter(college => {
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         college.courses.some(course => course.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesDistrict = !selectedDistrict || selectedDistrict === "All Districts" || college.district === selectedDistrict;
    const matchesType = !selectedType || selectedType === "All Types" || college.type === selectedType;
    
    return matchesSearch && matchesDistrict && matchesType;
  });

  const toggleFavorite = (collegeId: number) => {
    setFavorites(prev => 
      prev.includes(collegeId) 
        ? prev.filter(id => id !== collegeId)
        : [...prev, collegeId]
    );
  };

  const getFacilityIcon = (facility: string) => {
    switch (facility.toLowerCase()) {
      case "wi-fi": return Wifi;
      case "hostel": return Home;
      case "labs": return BookOpen;
      case "library": return BookOpen;
      case "canteen": return Users;
      case "sports": return Users;
      default: return Users;
    }
  };

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Government Colleges Directory</span>
          </CardTitle>
          <CardDescription>
            Find the best government colleges near you with detailed information about courses, facilities, and admission requirements.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search colleges or courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Select District" />
              </SelectTrigger>
              <SelectContent>
                {districts.map(district => (
                  <SelectItem key={district} value={district}>{district}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="College Type" />
              </SelectTrigger>
              <SelectContent>
                {collegeTypes.map(type => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Found {filteredColleges.length} colleges</span>
            <Button variant="ghost" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* College List */}
      <div className="grid gap-6 animate-fade-in">
        {filteredColleges.map((college) => (
          <Card key={college.id} className="hover-lift">
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{college.name}</h3>
                      <Badge 
                        variant={college.type === "Government" ? "default" : "secondary"}
                        className={college.type === "Government" ? "bg-accent text-accent-foreground" : ""}
                      >
                        {college.type}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {college.location}
                      </span>
                      <span>{college.distance} away</span>
                      <span>Est. {college.established}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(college.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">{college.rating}/5</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleFavorite(college.id)}
                    className="text-muted-foreground"
                  >
                    {favorites.includes(college.id) ? (
                      <Heart className="w-5 h-5 text-red-500 fill-current" />
                    ) : (
                      <HeartOff className="w-5 h-5" />
                    )}
                  </Button>
                </div>

                {/* Courses */}
                <div>
                  <h4 className="font-medium text-foreground mb-2">Available Courses</h4>
                  <div className="flex flex-wrap gap-2">
                    {college.courses.map((course, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Facilities */}
                <div>
                  <h4 className="font-medium text-foreground mb-2">Facilities</h4>
                  <div className="flex flex-wrap gap-3">
                    {college.facilities.map((facility, index) => {
                      const FacilityIcon = getFacilityIcon(facility);
                      return (
                        <div key={index} className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <FacilityIcon className="w-4 h-4" />
                          <span>{facility}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Key Information */}
                <div className="grid md:grid-cols-3 gap-4 p-4 bg-muted rounded-lg">
                  <div>
                    <h5 className="font-medium text-foreground text-sm">Cutoff Requirements</h5>
                    <p className="text-xs text-muted-foreground mt-1">{college.cutoff}</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground text-sm">Annual Fees</h5>
                    <p className="text-xs text-accent font-medium mt-1">{college.fees}</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground text-sm">Affiliation</h5>
                    <p className="text-xs text-muted-foreground mt-1">{college.affiliation}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>{college.contact}</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Website
                    </Button>
                    <Button size="sm">
                      Get Directions
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredColleges.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">No colleges found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or filters to find more colleges.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CollegeDirectory;