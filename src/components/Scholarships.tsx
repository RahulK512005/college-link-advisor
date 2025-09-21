import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Globe, Users, Calendar } from "lucide-react";

const Scholarships = () => {
  const scholarships = [
    {
      id: 1,
      title: "INSPIRE Scholarship",
      organization: "Department of Science & Technology, Government of India",
      description: "Innovation in Science Pursuit for Inspired Research (INSPIRE) scholarship for students pursuing science and technology courses.",
      amount: "₹80,000 per year",
      eligibility: "Indian students with 65%+ in 12th grade",
      deadline: "March 31, 2024",
      link: "http://www.online-inspire.gov.in/",
      category: "Government"
    },
    {
      id: 2,
      title: "KVPY Fellowship",
      organization: "Indian Institute of Science (IISc)",
      description: "Kishore Vaigyanik Protsahan Yojana fellowship for students pursuing basic science courses.",
      amount: "₹5,000-₹7,000 per month",
      eligibility: "Indian students in 11th/12th grade or 1st year UG",
      deadline: "September 15, 2024",
      link: "http://www.kvpy.iisc.ernet.in/",
      category: "Government"
    },
    {
      id: 3,
      title: "Tata Trusts Scholarship",
      organization: "Tata Trusts",
      description: "Merit-based scholarship for students pursuing higher education in India.",
      amount: "Up to ₹2,00,000 per year",
      eligibility: "Indian students with family income < ₹6 lakhs",
      deadline: "July 31, 2024",
      link: "https://www.tatatrusts.org/",
      category: "Private"
    },
    {
      id: 4,
      title: "Reliance Foundation Scholarships",
      organization: "Reliance Foundation",
      description: "Scholarship for students pursuing undergraduate studies in various fields including Computer Science.",
      amount: "₹2,00,000 per year",
      eligibility: "Indian students with 60%+ in 12th grade",
      deadline: "August 15, 2024",
      link: "https://www.scholarships.reliancefoundation.org/",
      category: "Private"
    },
    {
      id: 5,
      title: "AICTE Pragati Scholarship",
      organization: "All India Council for Technical Education",
      description: "Scholarship for girl students pursuing technical education in AICTE approved institutions.",
      amount: "₹50,000 per year",
      eligibility: "Girl students in 1st/2nd year of technical courses",
      deadline: "October 31, 2024",
      link: "https://www.aicte-india.org/",
      category: "Government"
    },
    {
      id: 6,
      title: "Microsoft Research India PhD Fellowship",
      organization: "Microsoft Research India",
      description: "Fellowship for PhD students in Computer Science and related fields.",
      amount: "₹2,00,000 per year + research support",
      eligibility: "PhD students in CS/IT/ECE",
      deadline: "September 30, 2024",
      link: "https://www.microsoft.com/en-us/research/academic-program/phd-fellowship/",
      category: "Corporate"
    },
    {
      id: 7,
      title: "Google India Scholarship",
      organization: "Google India",
      description: "Scholarship for students pursuing Computer Science and related fields.",
      amount: "₹1,00,000 per year",
      eligibility: "Indian students in 2nd/3rd year of CS/IT",
      deadline: "November 15, 2024",
      link: "https://www.google.com/about/careers/students/",
      category: "Corporate"
    },
    {
      id: 8,
      title: "Infosys Foundation Scholarship",
      organization: "Infosys Foundation",
      description: "Merit-cum-means scholarship for students pursuing engineering and technology courses.",
      amount: "₹1,50,000 per year",
      eligibility: "Indian students with family income < ₹8 lakhs",
      deadline: "December 31, 2024",
      link: "https://www.infosys.com/infosys-foundation/",
      category: "Corporate"
    },
    {
      id: 9,
      title: "Wipro Earthian Scholarship",
      organization: "Wipro Limited",
      description: "Scholarship for students pursuing courses related to sustainability and technology.",
      amount: "₹1,00,000 per year",
      eligibility: "Indian students in UG/PG programs",
      deadline: "January 31, 2025",
      link: "https://www.wipro.com/en-IN/sustainability/earthian/",
      category: "Corporate"
    },
    {
      id: 10,
      title: "SBI Foundation Scholarship",
      organization: "State Bank of India Foundation",
      description: "Scholarship for meritorious students from economically weaker sections.",
      amount: "₹75,000 per year",
      eligibility: "Indian students with family income < ₹4 lakhs",
      deadline: "February 28, 2025",
      link: "https://www.sbifoundation.org/",
      category: "Private"
    },
    {
      id: 11,
      title: "HDFC Bank Parivartan Scholarship",
      organization: "HDFC Bank",
      description: "Scholarship for students pursuing higher education in various fields.",
      amount: "₹1,25,000 per year",
      eligibility: "Indian students with family income < ₹6 lakhs",
      deadline: "March 15, 2025",
      link: "https://www.hdfcbank.com/personal/support/scholarship",
      category: "Corporate"
    },
    {
      id: 12,
      title: "ICICI Foundation Scholarship",
      organization: "ICICI Foundation",
      description: "Scholarship for students pursuing professional courses including engineering and technology.",
      amount: "₹1,00,000 per year",
      eligibility: "Indian students in 1st/2nd year of professional courses",
      deadline: "April 30, 2025",
      link: "https://www.icicifoundation.org/",
      category: "Corporate"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Government": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "Private": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Corporate": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-hero text-primary-foreground">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-2xl">
            <Award className="w-6 h-6" />
            <span>Scholarships for Indian Students</span>
          </CardTitle>
          <CardDescription className="text-primary-foreground/90">
            Discover funding opportunities for your education in Data Science, AI, and Computer Science
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/20 rounded-lg p-4">
              <h3 className="font-medium text-primary-foreground">Total Scholarships</h3>
              <p className="text-2xl font-bold text-primary-foreground">{scholarships.length}</p>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <h3 className="font-medium text-primary-foreground">Government</h3>
              <p className="text-2xl font-bold text-primary-foreground">
                {scholarships.filter(s => s.category === "Government").length}
              </p>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <h3 className="font-medium text-primary-foreground">Corporate</h3>
              <p className="text-2xl font-bold text-primary-foreground">
                {scholarships.filter(s => s.category === "Corporate").length}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Scholarships Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scholarships.map((scholarship) => (
          <Card key={scholarship.id} className="hover-lift">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2">{scholarship.title}</CardTitle>
                  <div className="flex items-center space-x-2 mb-2">
                    <Globe className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{scholarship.organization}</span>
                  </div>
                </div>
                <Badge className={getCategoryColor(scholarship.category)}>
                  {scholarship.category}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                {scholarship.description}
              </CardDescription>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{scholarship.amount}</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{scholarship.eligibility}</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Deadline: {scholarship.deadline}</span>
                </div>
              </div>
              
              <Button 
                className="w-full mt-4" 
                asChild
              >
                <a 
                  href={scholarship.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Apply Now</span>
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Important Notice */}
      <Card className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950">
        <CardContent className="p-6">
          <div className="flex items-start space-x-3">
            <Award className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
                Important Notice
              </h3>
              <p className="text-sm text-amber-700 dark:text-amber-300">
                Please verify all scholarship details and deadlines directly from the official sources. 
                Deadlines and eligibility criteria may change. Always apply through official channels only.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Scholarships;
