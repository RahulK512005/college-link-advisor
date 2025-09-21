import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Star, Users, Calendar } from "lucide-react";

const Books = () => {
  const books = [
    {
      id: 1,
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
      description: "Comprehensive textbook covering fundamental algorithms and data structures. Essential for computer science students and professionals.",
      rating: 4.8,
      pages: 1312,
      level: "Intermediate",
      category: "Algorithms",
      link: "https://mitpress.mit.edu/books/introduction-algorithms"
    },
    {
      id: 2,
      title: "Deep Learning",
      author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
      description: "The definitive textbook on deep learning, covering neural networks, optimization, and modern AI techniques.",
      rating: 4.7,
      pages: 800,
      level: "Advanced",
      category: "Machine Learning",
      link: "https://www.deeplearningbook.org/"
    },
    {
      id: 3,
      title: "Python Crash Course",
      author: "Eric Matthes",
      description: "A hands-on, project-based introduction to programming with Python. Perfect for beginners starting their coding journey.",
      rating: 4.6,
      pages: 544,
      level: "Beginner",
      category: "Programming",
      link: "https://nostarch.com/pythoncrashcourse2e"
    },
    {
      id: 4,
      title: "Clean Code",
      author: "Robert C. Martin",
      description: "A handbook of agile software craftsmanship. Learn to write clean, maintainable, and professional code.",
      rating: 4.5,
      pages: 464,
      level: "Intermediate",
      category: "Software Engineering",
      link: "https://www.pearson.com/store/p/clean-code/9780132350884"
    },
    {
      id: 5,
      title: "System Design Interview",
      author: "Alex Xu",
      description: "An insider's guide to system design interviews. Learn how to design large-scale distributed systems step by step.",
      rating: 4.4,
      pages: 322,
      level: "Advanced",
      category: "System Design",
      link: "https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Intermediate": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "Advanced": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Algorithms": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "Machine Learning": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "Programming": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Software Engineering": return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
      case "System Design": return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-hero text-primary-foreground">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-2xl">
            <BookOpen className="w-6 h-6" />
            <span>Essential Computer Science Books</span>
          </CardTitle>
          <CardDescription className="text-primary-foreground/90">
            Curated collection of must-read books for Data Science, AI, and Computer Science students
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/20 rounded-lg p-4">
              <h3 className="font-medium text-primary-foreground">Total Books</h3>
              <p className="text-2xl font-bold text-primary-foreground">{books.length}</p>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <h3 className="font-medium text-primary-foreground">Beginner Friendly</h3>
              <p className="text-2xl font-bold text-primary-foreground">
                {books.filter(b => b.level === "Beginner").length}
              </p>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <h3 className="font-medium text-primary-foreground">Advanced Level</h3>
              <p className="text-2xl font-bold text-primary-foreground">
                {books.filter(b => b.level === "Advanced").length}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {books.map((book) => (
          <Card key={book.id} className="hover-lift">
            <CardHeader>
              <div className="flex items-start space-x-4">
                <div className="w-20 h-28 bg-muted rounded-lg flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2">{book.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-3">by {book.author}</p>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge className={getLevelColor(book.level)}>
                      {book.level}
                    </Badge>
                    <Badge className={getCategoryColor(book.category)}>
                      {book.category}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{book.rating}</span>
                    <span className="text-sm text-muted-foreground">({book.pages} pages)</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                {book.description}
              </CardDescription>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{book.pages} pages</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>{book.rating}/5</span>
                  </div>
                </div>
                
                <Button asChild>
                  <a 
                    href={book.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Book</span>
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Reading Tips */}
      <Card className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
        <CardContent className="p-6">
          <div className="flex items-start space-x-3">
            <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                Reading Tips for Students
              </h3>
              <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                <li>• Start with beginner-level books if you're new to programming</li>
                <li>• Practice coding examples as you read</li>
                <li>• Join study groups or online communities to discuss concepts</li>
                <li>• Take notes and create summaries of key concepts</li>
                <li>• Apply what you learn in personal projects</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Books;
