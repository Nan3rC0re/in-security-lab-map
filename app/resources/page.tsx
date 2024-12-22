import Link from "next/link";
import React from "react";
import {
  ArchiveImage,
  archives,
  HeadShavingImages,
  headShaving,
  victims,
  VictimImages,
  Perpetrators,
  perps,
  context,
  ContextImages,
  article,
  Articles,
  camp,
  Camps,
} from "@/config/archive-images-links";

export default function Resources() {
  return (
    <div className="w-full min-h-screen py-4 flex flex-col items-center ">
      <div className="max-w-4xl flex flex-col items-center">
        <h1 className="text-3xl font-bold">Resources</h1>
        <h2 className="font-semibold text-xl mt-4">
          USHMM Archives - Public Domain
        </h2>

        <div className="flex flex-col gap-16 ">
          <ul className="list-disc ml-4 flex flex-col gap-8 mt-12 ">
            {archives.map((links: ArchiveImage, index: number) => (
              <li key={index}>
                <Link
                  href={links.href}
                  target="_blank"
                  className="hover:underline  transition-all duration-100 hover:text-neutral-200 flex text-lg md:text-xl"
                >
                  {links.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="w-full">
            <h2 className="font-bold text-lg underline">Head Shaving Images</h2>
            <ul className=" list-disc ml-4 flex flex-col gap-8 mt-4 ">
              {headShaving.map((links: HeadShavingImages, index: number) => (
                <li key={index}>
                  <Link
                    href={links.href}
                    target="_blank"
                    className="hover:underline  transition-all duration-100 hover:text-neutral-200 text-lg md:text-xl"
                  >
                    {links.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full">
            <h2 className="font-bold text-lg underline">Victims</h2>
            <ul className="list-disc  ml-4 flex flex-col gap-8 mt-4 ">
              {victims.map((links: VictimImages, index: number) => (
                <li key={index}>
                  <Link
                    href={links.href}
                    target="_blank"
                    className="hover:underline  transition-all duration-100 hover:text-neutral-200 text-lg md:text-xl"
                  >
                    {links.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full">
            <h2 className="font-bold text-lg underline">Perpetrators</h2>
            <ul className="list-disc ml-4 flex flex-col gap-8 mt-4 ">
              {perps.map((links: Perpetrators, index: number) => (
                <li key={index}>
                  <Link
                    href={links.href}
                    target="_blank"
                    className="hover:underline  transition-all duration-100 hover:text-neutral-200 text-lg md:text-xl"
                  >
                    {links.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full">
            <h2 className="font-bold text-lg underline">Context</h2>
            <ul className="list-disc ml-4 flex flex-col gap-8 mt-4 ">
              {context.map((links: ContextImages, index: number) => (
                <li key={index}>
                  <Link
                    href={links.href}
                    target="_blank"
                    className="hover:underline  transition-all duration-100 hover:text-neutral-200 text-lg md:text-xl"
                  >
                    {links.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full">
            <h2 className="font-bold text-lg underline">
              Concentration camp maps
            </h2>
            <ul className="list-disc ml-4 flex flex-col gap-8 mt-4 ">
              {camp.map((links: Camps, index: number) => (
                <li key={index}>
                  <Link
                    href={links.href}
                    target="_blank"
                    className="hover:underline  transition-all duration-100 hover:text-neutral-200 text-lg md:text-xl"
                  >
                    {links.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full">
            <h2 className="font-bold text-lg underline">Articles</h2>
            <ul className="list-disc ml-4 flex flex-col gap-8 mt-4 ">
              {article.map((links: Articles, index: number) => (
                <li key={index}>
                  <Link
                    href={links.href}
                    target="_blank"
                    className="transition-all duration-100 hover:text-neutral-200 text-lg md:text-xl"
                  >
                    {links.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
