import { Button } from "@/components/ui/button";
const Header = () => {
  return <header className="w-full px-6 py-4 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">K</span>
          </div>
          <span className="text-foreground font-light text-xl">k12data</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-primary transition-colors font-light">
            Home
          </a>
        </nav>

        <Button variant="hero-outline" size="sm" className="hidden md:flex">
          Schedule a Call →
        </Button>
      </div>
    </header>;
};
export default Header;