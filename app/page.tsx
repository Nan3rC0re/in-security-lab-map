"use client";

import React, { useState } from "react";
import MapboxMap from "@/components/ui/mapbox"; // Your existing MapboxMap component
import Navbar from "@/components/ui/navbar";
import { Button } from "@/components/ui/button";
import { Map } from "lucide-react";

export default function Home() {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [visibleLayer, setVisibleLayer] = useState<string | null>(
    "crimes-layer"
  );

  const toggleMapView = () => {
    setIsMapOpen(!isMapOpen);
  };

  const handleLayerChange = (layer: string) => {
    setVisibleLayer(layer);
    if (!isMapOpen) {
      setIsMapOpen(true);
    }
  };

  return (
    <div
      className="flex-1 md:mt-[50px] mt-[50px] flex flex-col gap-1"
      style={{ height: "calc(100% - 62px)" }}
    >
      <Navbar onLayerChange={handleLayerChange} />

      <div className="controls-container p-1 flex justify-end items-center ">
        <Button variant="outline" onClick={toggleMapView}>
          <Map size={15} className="mr-1" />
          {isMapOpen ? "Close Map" : "Map View"}
        </Button>
      </div>

      <div className="flex max-md:flex-col h-full gap-2">
        <div className="w-full max-sm:w-full flex flex-col gap-2">
          <div className="border h-full">Main content page</div>
        </div>
        {isMapOpen && (
          <div className="map-view-container w-full max-sm:w-full h-[500px] md:h-full overflow-hidden">
            <MapboxMap visibleLayer={visibleLayer} />
          </div>
        )}
      </div>
    </div>
  );
}
