import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center p-8 rounded-2xl shadow-lg bg-white/80 backdrop-blur-sm animate-in fade-in duration-700">
        <h1 className="mb-4 text-6xl font-extrabold text-gray-900">404</h1>
        <p className="mb-6 text-lg md:text-xl text-gray-600">
          Oops! The page <span className="font-mono">{location.pathname}</span>{" "}
          doesn’t exist.
        </p>
        <Button asChild variant="hero" size="lg" className="group">
          <a href="/" className="flex items-center">
            <Home className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Return Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
