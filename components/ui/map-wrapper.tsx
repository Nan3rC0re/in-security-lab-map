"use client";

import React from "react";
import { usePathname } from "next/navigation";
import InteractiveMap from "@/components/ui/mapbox";

export default function MapWrapper() {
  const pathname = usePathname();

  if (pathname === "/" || pathname === "/conclusion") {
    return null;
  }

  return (
    <div className="map-view-container w-full h-[400px] md:h-full overflow-hidden">
      <InteractiveMap />
    </div>
  );
}
