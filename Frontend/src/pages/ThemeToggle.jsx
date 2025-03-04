import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/ThemeProvider";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      className="bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
};
export default ThemeToggle;
