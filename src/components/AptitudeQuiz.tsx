import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft,
  Trophy,
  Target,
  Lightbulb
} from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  category: "analytical" | "creative" | "technical" | "social" | "practical";
}

const AptitudeQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds

  // Sample quiz questions - in real app, these would come from API
  const questions: Question[] = [
    {
      id: 1,
      question: "You enjoy solving complex mathematical problems and find patterns in numbers easily.",
      options: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
      category: "analytical"
    },
    {
      id: 2,
      question: "You prefer working with your hands and building/creating physical objects.",
      options: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
      category: "practical"
    },
    {
      id: 3,
      question: "You find it easy to explain complex topics to others and enjoy teaching.",
      options: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
      category: "social"
    },
    {
      id: 4,
      question: "You are drawn to creating art, music, or writing in your free time.",
      options: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
      category: "creative"
    },
    {
      id: 5,
      question: "You enjoy working with computers and learning about new technologies.",
      options: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
      category: "technical"
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: answerIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const getResults = () => {
    // Simple scoring logic - in real app, this would be more sophisticated
    const categoryScores: Record<string, number> = {
      analytical: 0,
      creative: 0,
      technical: 0,
      social: 0,
      practical: 0
    };

    questions.forEach((question, index) => {
      const answer = answers[index];
      if (answer !== undefined) {
        // Higher score for "Strongly Agree" (0) and "Agree" (1)
        const score = answer <= 1 ? (2 - answer) : 0;
        categoryScores[question.category] += score;
      }
    });

    // Find top categories
    const sortedCategories = Object.entries(categoryScores)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3);

    return sortedCategories;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "analytical": return Brain;
      case "creative": return Lightbulb;
      case "technical": return Target;
      case "social": return CheckCircle;
      case "practical": return Trophy;
      default: return Brain;
    }
  };

  const getCategoryDescription = (category: string) => {
    switch (category) {
      case "analytical": return "Strong in logical thinking and problem-solving";
      case "creative": return "Artistic and innovative mindset";
      case "technical": return "Technology and engineering oriented";
      case "social": return "People-focused and communication skills";
      case "practical": return "Hands-on and implementation focused";
      default: return "";
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (isCompleted) {
    const results = getResults();
    
    return (
      <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
        <Card className="text-center">
          <CardHeader>
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Quiz Completed!</CardTitle>
            <CardDescription>
              Great job! Here are your personalized results based on your aptitude and interests.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Your Top Strengths</h3>
              {results.map(([category, score], index) => {
                const Icon = getCategoryIcon(category);
                return (
                  <div key={category} className="flex items-center space-x-4 p-4 bg-muted rounded-lg">
                    <div className="p-2 bg-primary-light rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 text-left">
                      <h4 className="font-medium capitalize">{category}</h4>
                      <p className="text-sm text-muted-foreground">
                        {getCategoryDescription(category)}
                      </p>
                    </div>
                    <Badge variant="secondary">
                      #{index + 1}
                    </Badge>
                  </div>
                );
              })}
            </div>

            <div className="bg-accent-light p-4 rounded-lg">
              <h4 className="font-medium text-accent-foreground mb-2">Recommended Next Steps</h4>
              <ul className="text-sm text-accent-foreground space-y-1">
                <li>• Explore courses matching your top strengths</li>
                <li>• Check government colleges offering relevant programs</li>
                <li>• Review career paths aligned with your interests</li>
              </ul>
            </div>

            <div className="flex space-x-3">
              <Button className="flex-1" asChild>
                <a href="#/courses">
                  View Recommended Courses
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" onClick={() => {
                setCurrentQuestion(0);
                setAnswers({});
                setIsCompleted(false);
              }}>
                Retake Quiz
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
      {/* Progress Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Brain className="w-5 h-5 text-primary" />
              <span className="font-medium">Aptitude Quiz</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Question Card */}
      <Card className="hover-lift">
        <CardHeader>
          <CardTitle className="text-xl leading-relaxed">
            {question.question}
          </CardTitle>
          <CardDescription>
            Select the option that best describes you
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full p-4 text-left rounded-lg border-2 transition-all hover:bg-muted ${
                answers[currentQuestion] === index
                  ? "border-primary bg-primary-light"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded-full border-2 ${
                  answers[currentQuestion] === index
                    ? "bg-primary border-primary"
                    : "border-muted-foreground"
                }`}>
                  {answers[currentQuestion] === index && (
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  )}
                </div>
                <span className={answers[currentQuestion] === index ? "text-primary font-medium" : ""}>
                  {option}
                </span>
              </div>
            </button>
          ))}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>
        
        <Button
          onClick={handleNext}
          disabled={answers[currentQuestion] === undefined}
          className={answers[currentQuestion] !== undefined ? "bg-gradient-primary" : ""}
        >
          {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next"}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default AptitudeQuiz;