import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { useAuth } from "@/contexts/AuthContext";
import { Menu, X, User, BookOpen, MapPin, Route, Calendar, Moon, Sun, Brain, LogOut } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();

  const navItems = [
    { to: "/dashboard", label: "Dashboard", icon: BookOpen, external: false },
    { to: "https://v0-eduadvisor1211.vercel.app/", label: "Career Quiz", icon: Brain, external: true },
    { to: "https://v0-data-display-webpage-seven.vercel.app/", label: "Roadmap", icon: Route, external: true },
    { to: "/colleges", label: "Colleges", icon: MapPin, external: false },
    { to: "/timeline", label: "Timeline & Resources", icon: Calendar, external: false },
    { to: "/profile", label: "Profile", icon: User, external: false },
  ];

  return (
    <nav className="glass sticky top-0 z-50 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center space-x-3 hover-scale">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-custom-md">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold bg-gradient-primary bg-clip-text text-transparent">
                EduAdvisor
              </span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              if (item.external === true) {
                return (
                  <a
                    key={item.to}
                    href={item.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 text-muted-foreground hover:text-foreground hover:bg-muted/50 hover-lift"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </a>
                );
              }
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-primary text-primary-foreground shadow-custom-md"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50 hover-lift"
                    }`
                  }
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
            
            {/* Auth Button */}
            {user ? (
              <Button 
                variant="outline" 
                size="sm" 
                className="ml-2 rounded-xl"
                onClick={logout}
              >
                <LogOut className="w-4 h-4 mr-1" />
                Logout
              </Button>
            ) : (
              <Button asChild variant="outline" size="sm" className="ml-2 rounded-xl">
                <NavLink to="/login">Login</NavLink>
              </Button>
            )}
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="ml-2 rounded-xl hover-scale"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="rounded-xl hover-scale"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground rounded-xl"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 px-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                if (item.external === true) {
                  return (
                    <a
                      key={item.to}
                      href={item.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </a>
                  );
                }
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-primary text-primary-foreground shadow-custom-md"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`
                    }
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;