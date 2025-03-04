import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/ThemeProvider";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
};
export default ThemeToggle;
