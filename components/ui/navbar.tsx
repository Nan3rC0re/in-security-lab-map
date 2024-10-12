"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
        document.body.style.overflow = "unset";
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "unset";
    };
  }, []);

  const navLinks = [
    { href: "#crimes", label: "Crimes" },
    { href: "#poi", label: "Point of interest" },
    { href: "#trials", label: "Trials" },
    { href: "#conclusion", label: "Conclusion" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-3 flex border-b justify-between items-center transition-all duration-300 z-50 ${
        isMenuOpen ? "bg-white" : "bg-white bg-opacity-45 backdrop-blur-md"
      }`}
    >
      <div className="flex items-center">
        <Link
          href="https://rampages.us/insecuritylab/"
          target="_blank"
          className="font-semibold text-lg mr-10"
        >
          (In)security lab @VCU
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:underline text-sm transition-colors duration-200 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      {isMobile && (
        <Button
          onClick={toggleMenu}
          variant="outline"
          size="icon"
          className="z-50"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      )}

      <AnimatePresence>
        {isMenuOpen && isMobile && (
          <motion.div
            // initial={{ opacity: 0, y: -20 }}
            // animate={{ opacity: 1, y: 0 }}
            // exit={{ opacity: 0, y: -20 }}
            // transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white flex flex-col justify-start pt-20 p-5 z-40"
          >
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                className="text-lg justify-start w-full mb-4"
                onClick={() => {
                  toggleMenu();
                  document.querySelector(link.href)?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                {link.label}
              </Button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
