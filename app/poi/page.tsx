"use client";

import React from "react";

export default function PoiPage() {
  return (
    <div className="flex flex-col md:flex-row h-full">
      <div className="w-full  p-4 overflow-auto">
        <h1 className="text-2xl font-bold mb-4">Points of Interest</h1>
        <p className="mb-4">
          This page contains information about various points of interest
          related to Nazi war crimes.
        </p>
      </div>
    </div>
  );
}
