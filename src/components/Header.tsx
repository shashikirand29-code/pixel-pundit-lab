import { Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 px-6">
      <div className="flex items-center gap-4">
        <Code className="w-8 h-8 text-primary" />
        <h1 className="text-3xl font-bold gradient-text">
          CodeCraft Academy
        </h1>
      </div>
      
      <nav className="hidden md:block">
        <ul className="flex gap-6">
          {["Home", "Courses", "Exercises", "Tutorials", "Community"].map((item) => (
            <li key={item}>
              <a 
                href="#" 
                className="text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-white/10"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="flex gap-3">
        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          Sign In
        </Button>
        <Button className="bg-primary hover:bg-secondary">
          Register
        </Button>
      </div>
    </header>
  );
};

export default Header;