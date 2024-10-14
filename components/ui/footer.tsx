import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full p-3 border-t border-[#ececec]">
      <div>
        {/* Need to add other dev */}
        <span className="flex max-sm:inline-block text-sm max-sm:text-center ">
          Site developed by
          <Link
            href="https://www.linkedin.com/in/nana-kofi-okae/"
            className="text-sm hover:underline ml-1 mr-1 font-semibold"
            target="_blank"
          >
            Nana Kofi Okae
          </Link>
          and
          <Link
            href="https://www.linkedin.com/in/ahmed-mahmoud-b9427021a/"
            className="text-sm hover:underline ml-1 font-semibold"
            target="_blank"
          >
            Ahmed Nasr Mahmoud
          </Link>
        </span>
      </div>
    </footer>
  );
}
