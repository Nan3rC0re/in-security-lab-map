import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full  min-h-20 py-3 lg:px-12 px-3 flex items-center  bg-[#1e1e1e] text-white mt-auto">
      <div className="w-full">
        <span className="flex flex-wrap text-sm sm:flex-row sm:text-center">
          Site developed by
          <Link
            href="https://www.linkedin.com/in/nana-kofi-okae/"
            className="text-sm hover:underline mx-1 font-semibold"
            target="_blank"
          >
            Nana Kofi Okae
          </Link>
          and
          <Link
            href="https://www.linkedin.com/in/ahmed-mahmoud-b9427021a/"
            className="text-sm hover:underline mx-1 font-semibold"
            target="_blank"
          >
            Ahmed Nasr Mahmoud
          </Link>
        </span>
      </div>
    </footer>
  );
}
