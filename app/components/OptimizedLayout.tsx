import React from 'react';
import Image from 'next/image';
import { memo } from 'react';

// Optimized Footer component with React.memo
const Footer = memo(() => (
  <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    {[
      {
        href: "https://nextjs.org/learn",
        icon: "/file.svg",
        text: "Learn"
      },
      {
        href: "https://vercel.com/templates?framework=next.js",
        icon: "/window.svg",
        text: "Examples"
      },
      {
        href: "https://nextjs.org",
        icon: "/globe.svg",
        text: "Go to nextjs.org →"
      }
    ].map((link) => (
      <a
        key={link.text}
        className="flex items-center gap-2 hover:underline hover:underline-offset-4 transition-all duration-200"
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src={link.icon}
          alt={`${link.text} icon`}
          width={16}
          height={16}
          loading="lazy"
        />
        {link.text}
      </a>
    ))}
  </footer>
));

Footer.displayName = 'Footer';

// Optimized Button component with React.memo
const Button = memo(({ href, className, children }: {
  href: string;
  className: string;
  children: React.ReactNode;
}) => (
  <a
    className={`rounded-full border border-solid transition-all duration-200 flex items-center justify-center ${className}`}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
));

Button.displayName = 'Button';

// Main Layout component
export default function OptimizedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-7xl mx-auto">
        <div className="w-full">
          {children}
        </div>
        
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Button
            href="https://vercel.com/new"
            className="bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
              priority
            />
            Deploy now
          </Button>
          
          <Button
            href="https://nextjs.org/docs"
            className="border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          >
            Read our docs
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
} 