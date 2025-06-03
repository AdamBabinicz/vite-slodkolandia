import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage"; // Importuj, jeśli używasz 't'

interface ThemeToggleProps {
  onToggle?: () => void;
}

export default function ThemeToggle({ onToggle }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(false);
  const { t } = useLanguage(); // Inicjalizuj, jeśli 't' jest potrzebne do aria-label

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    let newIsDark;
    if (isDark) {
      newIsDark = false;
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      newIsDark = true;
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(newIsDark);
    if (onToggle) {
      onToggle();
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white"
      aria-label={t(
        isDark ? "themeToggle.switchToLight" : "themeToggle.switchToDark",
        undefined,
        isDark ? "Przełącz na tryb jasny" : "Przełącz na tryb ciemny"
      )}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
}
