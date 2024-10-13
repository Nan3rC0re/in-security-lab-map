"use client";

import React from "react";
import FeatureDetails from "@/components/ui/FeatureDetails";
import { useFeature } from "@/context/FeatureContext";

export default function CrimesPage() {
  const { selectedFeature } = useFeature();

  return (
    <div className="flex flex-col md:flex-row h-full">
      <div className="w-full  p-4 overflow-auto">
        <h1 className="text-2xl font-bold mb-4">Nazi War Crimes</h1>
        <p className="mb-4">
          This page contains information about various Nazi war crimes.
        </p>
        {selectedFeature ? (
          <FeatureDetails />
        ) : (
          <div>Click on a point on the map to see details.</div>
        )}
      </div>
    </div>
  );
}
