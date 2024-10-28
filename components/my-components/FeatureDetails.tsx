"use client";

import React from "react";
// import { useFeature } from "@/context/FeatureContext";

export default function FeatureDetails() {
  // const { selectedFeature } = useFeature();

  // if (!selectedFeature) {
  //   return <div>Click on a point on the map to see details.</div>;
  // }

  // const properties = selectedFeature.properties;

  return (
    <div className="bg-white p-4  w-full">
      {/* <h2 className="text-xl font-bold mb-4">
        {properties["Defendant Name"] ||
          properties["Name of Location"] ||
          `Trial No. ${properties["Trial No."]}`}
      </h2>
      {Object.entries(properties).map(([key, value]) => (
        <div key={key} className="mb-2">
          <span className="font-semibold">{key}:</span> {String(value)}
        </div>
      ))} */}
    </div>
  );
}
