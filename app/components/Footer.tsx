// components/Footer.tsx

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-zinc-950 py-6 px-4 border-t border-gray-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center text-sm text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Aditya Shinde. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <Link href="#projects" className="hover:underline">Projects</Link>
          <Link href="#contact" className="hover:underline">Contact</Link>
          <a
            href="https://github.com/AdityaShinde-git"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
