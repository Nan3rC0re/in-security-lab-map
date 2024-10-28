// "use client";

// import React, { useState, useEffect } from "react";
// import { usePathname } from "next/navigation";
// // import InteractiveMap from '@/components/my-components/mapbox'

// export default function MapWrapper() {
//   // const [visibleLayer, setVisibleLayer] = useState<string | null>(null)
//   const pathname = usePathname();

//   useEffect(() => {
//     switch (pathname) {
//       case "/crimes":
//         setVisibleLayer("crimes");
//         break;
//       case "/poi":
//         setVisibleLayer("pointsOfInterest");
//         break;
//       case "/trials":
//         setVisibleLayer("trials");
//         break;
//       default:
//         setVisibleLayer(null);
//     }
//   }, [pathname]);

//   if (pathname === "/" || pathname === "/conclusion") {
//     return null;
//   }

//   return (
//     <div className="map-view-container w-full h-[400px] md:h-full overflow-hidden">
//       {/* <InteractiveMap visibleLayer={visibleLayer} /> */}
//     </div>
//   );
// }
