import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function ConclusionPage() {
  return (
    <div className="w-full max-w-4xl mx-auto py-4 min-h-[73vh]">
      <h1 className="text-4xl font-bold mb-6">Conclusion</h1>
      <div className="flex flex-col gap-12">
        <p>
          Many of these women were everyday people. A couple became infamous,
          but many were released from prison and returned to normal life. They
          returned to families, to boring jobs, to their old beds. Others died
          in prison or had their civil rights and assets removed by the state.
          Many more women evaded justice. Some were punished at the people’s
          hands. So, what does a war criminal look like? And what does it take
          to be one? Moreover, what does justice look like?
        </p>
        <div className="w-full flex gap-6">
          {/* TODO: onclick function to take the user back to the homepage to start the story based navigation */}
          <Button variant="secondary">
            <Link href="/crimes">Explore Website</Link>
          </Button>
          <Button variant="ghost" className="">
            Restart Expereince
          </Button>
        </div>
      </div>
    </div>
  );
}
