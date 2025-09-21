import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Brain, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const QuizRedirectPage = () => {
  useEffect(() => {
    // Auto-redirect to quiz after 3 seconds
    const timer = setTimeout(() => {
      window.location.href = "https://v0-edu2-mun8.vercel.app/";
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        
        {/* Header */}
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            EduAdvisor
          </span>
        </div>

        {/* Main Card */}
        <Card className="shadow-2xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl">
          <CardHeader className="text-center pb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-pulse">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Take Your Career Assessment
            </CardTitle>
            <CardDescription className="text-lg text-gray-600 dark:text-gray-400">
              Before we create your personalized profile, let's understand your interests and aptitudes through our comprehensive career quiz.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">What you'll discover:</h3>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Your natural strengths and interests</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Recommended career paths</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span>Suitable college courses and streams</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Clock className="w-4 h-4" />
              <span>Takes approximately 10-15 minutes</span>
            </div>

            <div className="space-y-3">
              <Button 
                className="w-full h-14 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
                onClick={() => window.location.href = "https://v0-edu2-mun8.vercel.app/"}
              >
                Start Career Quiz
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                Redirecting automatically in 3 seconds...
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                After completing the quiz, you'll return here to complete your registration and access your personalized dashboard.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Skip Option */}
        <div className="text-center">
          <Button variant="ghost" asChild className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <Link to="/login">
              Skip quiz and continue to registration →
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizRedirectPage;