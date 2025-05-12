// components/Navbar.tsx

'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import ContactModal from "./ContactModal";
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleDarkMode = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-black/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          <span
            onClick={(e) => {
            e.preventDefault(); // Prevent Next.js client-side routing
            window.location.href = '/'; // Navigate to home (full reload)
            // Alternatively: window.location.reload(); // Just reloads current page
            }}
            style={{ cursor: 'pointer' }}
        >   
        Aditya Shinde
          </span>
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="#projects" className="hover:underline">Projects</Link>
          <Link href="#contact" className="hover:underline">Contact</Link>
           <ContactModal  />
          <button
            aria-label="Toggle Dark Mode"
            onClick={toggleDarkMode}
            className="p-2 rounded-full border hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
         
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
