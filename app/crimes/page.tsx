"use client";

import CrimesMap from "@/components/my-components/crimes-map";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function CrimesPage() {
  const [selectedFeature, setSelectedFeature] = useState<{
    [key: string]: string | number;
  } | null>(null);

  const excludedFields = [
    "GeoLocation of Trial",
    "GeoLocation of Crime",
    "Latitude",
    "Longitude",
    "ID",
    "Defendant Name",
  ];
  return (
    <div className="grid grid-cols-2 max-lg:grid-cols-1 lg:gap-4 gap-8  w-full">
      <div className=" content-container w-full py-4 ">
        <h1 className="text-3xl font-bold mb-4">Women’s Crimes Map</h1>
        {selectedFeature ? (
          <>
            <div className="w-full flex justify-between items-center">
              <h2 className="text-2xl font-medium text-red-500 mb-2">
                <span className="font-normal text-white">
                  Case details for{" "}
                </span>
                {selectedFeature["Defendant Name"]}
              </h2>
              <Button
                onClick={() => setSelectedFeature(null)}
                size="icon"
                variant="outline"
              >
                <X size={15} className="text-black" />
              </Button>
            </div>

            <Table className="border mt-6">
              <TableHeader className="font-bold bg-neutral-900">
                <TableRow>
                  <TableHead>Field</TableHead>
                  <TableHead>Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.entries(selectedFeature)
                  .filter(([key]) => !excludedFields.includes(key))
                  .map(([key, value]) => (
                    <TableRow key={key}>
                      <TableCell className="">{key}</TableCell>
                      <TableCell>{value}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </>
        ) : (
          <div className="text-lg md:text-xl">
            <p className="mb-4 ">
              This project documents the 344 women prosecuted in Germany for
              Nazi-era crimes. At the time of their trials, the accused women
              ranged in age from 18 to 78 years old. Roughly half were married.
              Of the rest, about 14 percent were unmarried, 7 percent were
              divorced, and 9 percent widowed. More than 15 percent of the
              accused were mothers. Court records indicate that some had as many
              as eight children, though most had one or two. Although some were
              housewives, many of the women worked in a range of fields,
              including as doctors, nurses, and concentration camp guards.
            </p>
            <p>
              This map illustrates the towns and cities where these women
              allegedly committed their crimes. Each point provides biographical
              information about the accused, such as their age and marital
              status, as well as some information about their victims.
            </p>
          </div>
        )}
      </div>
      <div className="w-full  lg:py-4 lg:h-[50rem]  max-lg:aspect-square mb-10 ">
        <CrimesMap onFeatureClick={setSelectedFeature} />
      </div>
    </div>
  );
}
