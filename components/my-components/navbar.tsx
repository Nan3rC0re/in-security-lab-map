"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/crimes", label: "Women's Crimes" },
    { href: "/poi", label: "Institutions" },
    { href: "/trials", label: "Prosecuted Women" },
    { href: "/punishments", label: "Punishments" },
    { href: "/conclusion", label: "Conclusion" },
    { href: "/resources", label: "Resources" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setShowMenu(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavLinkClick = () => {
    setDrawerOpen(false);
  };

  const MobileNav = () => {
    return (
      <div className="p-4">
        <div className="flex flex-col items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleNavLinkClick}
              className={`text-lg md:text-sm transition-colors duration-200 hover:text-white/65 text-white/95 ${
                pathname === link.href
                  ? " bg-[#292929] w-full px-3 py-4 rounded-xl"
                  : " px-3 py-4 w-full rounded-xl "
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    );
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex flex-col justify-between border-b border-neutral-700 items-center transition-all duration-300 z-50 text-white bg-gradient-to-b from-black to-[#4d4d4d]">
      <div className="main-header-nav w-full flex justify-between items-center py-3 px-12 max-sm:px-4">
        <Link
          href="https://rampages.us/insecuritylab/"
          className="font-semibold text-lg"
          target="_blank"
        >
          (In)security lab @VCU
        </Link>
        <h1 className="font-semibold lg:text-lg text-center max-md:hidden">
          Unequal Justice: Women and Nazi War Crimes
        </h1>
        <Button
          size="sm"
          variant="outline"
          className="text-white border-neutral-400 bg-[#141414] max-md:hidden"
        >
          Share Feedback
        </Button>
        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
          <DrawerTrigger asChild>
            <Button
              size="sm"
              className="text-white border-neutral-600 bg-[#141414] border md:hidden"
              onClick={() => setDrawerOpen(true)}
            >
              <Menu size={15} />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="bg-[#1a1a1a] border border-neutral-700 text-white">
            <div className="w-full">
              <DrawerHeader className="w-full text-center flex justify-center mt-10">
                <DrawerTitle>
                  Unequal Justice: Women and Nazi War Crimes
                </DrawerTitle>
              </DrawerHeader>
              <MobileNav />
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button
                    variant="outline"
                    className="border h-12 border-neutral-600 bg-neutral-900 w-full"
                    onClick={() => setDrawerOpen(false)}
                  >
                    Back
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      <div className="max-md:hidden secondary-nav flex items-center w-full justify-center p-2 bg-[#1a1a1a]">
        <div className="flex gap-4 lg:gap-16 md:gap-14 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleNavLinkClick}
              className={`text-md ${
                pathname === link.href
                  ? "text-white"
                  : "transition-colors duration-200 hover:text-white text-white/65 "
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
