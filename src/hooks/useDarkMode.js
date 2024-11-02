import { useEffect, useState } from "react";

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isMounted, setIsMounted] = useState(false); // Prevent flash until dark mode is applied
  
    useEffect(() => {
      // Immediately check and apply the theme preference before rendering
      const savedTheme = localStorage.getItem('theme');
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
      if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
        setDarkMode(true);
        document.documentElement.classList.add('dark');
      } else {
        setDarkMode(false);
        document.documentElement.classList.remove('dark');
      }
  
      // Mark as mounted after the dark mode state is applied
      setIsMounted(true);
    }, []);
  
    // Function to toggle dark mode and save it to localStorage
    const toggleDarkMode = () => {
      setDarkMode((prevMode) => {
        const newMode = !prevMode;
        if (newMode) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
        return newMode;
      });
    };
  
    return { darkMode, toggleDarkMode, isMounted };
  }

  export default useDarkMode;