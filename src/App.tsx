import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import CollegesPage from "./pages/CollegesPage";
import ProfilePage from "./pages/ProfilePage";
import TimelineResourcesPage from "./pages/TimelineResourcesPage";
import QuizPage from "./pages/QuizPage";
import LoginPage from "./pages/LoginPage";
import WelcomePage from "./pages/WelcomePage";
import QuizRedirectPage from "./pages/QuizRedirectPage";
import QuizCompletePage from "./pages/QuizCompletePage";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen bg-background transition-colors duration-500">
              <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/quiz-redirect" element={<QuizRedirectPage />} />
                <Route path="/quiz-complete" element={<QuizCompletePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={
                  <>
                    <Navigation />
                    <main className="container mx-auto px-4 py-8">
                      <Index />
                    </main>
                  </>
                } />
                <Route path="/quiz" element={
                  <>
                    <Navigation />
                    <main className="container mx-auto px-4 py-8">
                      <QuizPage />
                    </main>
                  </>
                } />
                <Route path="/colleges" element={
                  <>
                    <Navigation />
                    <main className="container mx-auto px-4 py-8">
                      <CollegesPage />
                    </main>
                  </>
                } />
                <Route path="/profile" element={
                  <>
                    <Navigation />
                    <main className="container mx-auto px-4 py-8">
                      <ProfilePage />
                    </main>
                  </>
                } />
                <Route path="/timeline" element={
                  <>
                    <Navigation />
                    <main className="container mx-auto px-4 py-8">
                      <TimelineResourcesPage />
                    </main>
                  </>
                } />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
