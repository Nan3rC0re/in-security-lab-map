import React from "react";

export default function HomePage() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">
        Unequal Justice: Women and Nazi War Crimes
      </h1>
      <p className="text-lg mb-4">
        Welcome to our interactive exploration of the role of women in Nazi war
        crimes and their subsequent trials.
      </p>
      <p className="text-lg mb-4">
        This project aims to shed light on a often overlooked aspect of World
        War II history, examining the involvement of women in various capacities
        during the Nazi regime and the legal proceedings that followed.
      </p>
      <p className="text-lg mb-4">
        Navigate through our interactive map to explore:
      </p>
      <ul className="list-disc list-inside mb-4 ml-4">
        <li>Locations of crimes committed</li>
        <li>Points of interest related to Nazi activities</li>
        <li>Sites of post-war trials</li>
      </ul>
      <p className="text-lg">
        Click on the navigation links above to delve deeper into each aspect of
        this historical narrative.
      </p>
    </div>
  );
}
