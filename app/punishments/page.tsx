import React from "react";
import { PunishmentTerms, punishment } from "@/config/punishments";

export default function PunishmentsPage() {
  return (
    <div className="w-full max-w-4xl mx-auto py-4 min-h-[73vh]">
      <h1 className="text-4xl font-bold mb-6">Punishments</h1>
      <div className="flex flex-col gap-12">
        {punishment.map((term: PunishmentTerms, index) => (
          <div key={index}>
            <h3 className="font-bold underline text-lg lg:text-xl mt-4">
              {term.name}
            </h3>
            <p className="text-lg lg:text-xl">{term.definition}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
