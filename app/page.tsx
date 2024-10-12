"use client";
import React from "react";
import MapboxMap from "@/components/mapbox"; // Adjust the import path accordingly

export default function Home() {
  return (
    <div
      className="flex-1 md:mt-[40px] mt-[50px] flex gap-4 max-md:flex-col"
      style={{ height: "calc(100% - 62px)" }}
    >
      {/* This is where the controls for everything including the content data is going to go */}
      <div className="border w-full max-sm:w-full flex flex-col gap-2">
        <div>controls</div>
        <div>Main content</div>
      </div>

      {/* Mapbox canvas is going to be located in this area */}
      <div className="border w-full rounded-xl max-sm:w-full h-[500px] md:h-full overflow-hidden">
        <MapboxMap />
      </div>
    </div>
  );
}
