import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen py-4 bg-[#313131] flex flex-col items-center">
      <h1 className=" text-4xl md:text-6xl font-bold mb-6  max-w-[50rem] md:w-full text-center inline">
        Do women <span className="italic text-red-500 ">commit </span> war crimes? Do they
        <span className="italic text-red-500"> get away</span> with them?
      </h1>

      <div className=" text-lg md:text-xl mt-10  max-w-4xl w-full mb-4 flex flex-col gap-5">
        <p>
          Unequal Justice: Women and Nazi-Era Crimes explores these questions in
          the context of women&#39;s participation in Nazi Germany and the
          Holocaust. Drawing on archival records of German trials, this project
          highlights the enigma that women war criminals posed for
          accountability in post-war German society.
        </p>
        <p>
          This project examines 238 German trials involving 344 women accused of
          Nazi-era war crimes. The trials spanned the immediate post-war period
          through December 1982.
        </p>
        <p>
          In the pages that follow, you&#39;ll learn about these women and their
          crimes, the Nazi institutions that many of them were part of, and how
          they faced accountability in post-war Germany. The experiences of
          these women raise questions that resonate today and include questions
          about gender, justice, accountability, and punishment.
        </p>
      </div>
      <div className="w-full flex flex-col items-center mt-20 mb-20">
        <Image
          src="/Ilse Koch.jpg"
          alt="landing-img"
          width={900}
          height={900}
        />
        <Link
          href="https://collections.ushmm.org/search/catalog/pa1040530"
          className="text-white/95 text-center text-sm sm:text-md w-fit mt-2 hover:underline"
          target="_blank"
        >
          Ilse Koch testifies in her own defense at the trial of former camp
          personnel and prisoners from Buchenwald.
        </Link>
      </div>
    </div>
  );
}
