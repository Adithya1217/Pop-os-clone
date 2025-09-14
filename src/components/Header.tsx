import { Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const navItems = [
    "pop!_os", "laptops", "desktops", "workstations", "mini", "servers",
    "keyboards", "components", "merch", "specials"
  ];

  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top navigation */}
        <div className="flex justify-end items-center py-2 text-sm text-muted-foreground">
          <div className="flex items-center space-x-6">
            <button className="transition-smooth text-black">search</button>
            <button className="transition-smooth text-black">contact</button>
            <button className="transition-smooth text-black">log in</button>
          
            <button className="transition-smooth text-black">cart</button>
          </div>
        </div>
        
        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-foreground">
              system<span className="text-pop-orange">76</span>
            </div>
            <span className="text-sm text-muted-foreground">Powerful Linux Computers</span>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a 
                key={item}
                href={`/${item === 'pop!_os' ? '' : item}`}
                className="text-muted-foreground transition-smooth capitalize"
              >
                {item}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4 lg:hidden">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;