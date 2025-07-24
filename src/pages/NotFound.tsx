import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-subtle">
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-8xl lg:text-9xl font-bold text-primary/20">
            404
          </h1>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground">
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg" className="btn-primary">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="lg" 
            className="btn-outline"
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;