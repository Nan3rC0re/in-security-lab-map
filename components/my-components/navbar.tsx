"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = !isMenuOpen ? "hidden" : "unset"
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
        document.body.style.overflow = "unset"
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
      document.body.style.overflow = "unset"
    }
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/crimes", label: "Crimes" },
    { href: "/poi", label: "Points of Interest" },
    { href: "/trials", label: "Trials" },
    { href: "/conclusion", label: "Conclusion" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-3 flex border-b justify-between items-center transition-all duration-300 z-50 ${
        scrolled || isMenuOpen ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="flex items-center">
        <Link href="/" className="font-semibold text-lg mr-10">
          (In)security lab @VCU
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-200 hover:text-primary ${
                pathname === link.href ? "text-primary font-semibold" : "text-gray-600"
              }`}
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
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      )}

      <AnimatePresence>
        {isMenuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white flex flex-col justify-start pt-20 p-5 z-40"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg justify-start w-full mb-4 py-2 px-4 rounded-md transition-colors duration-200 ${
                  pathname === link.href
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}