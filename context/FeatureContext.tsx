// "use client";

// import React, { createContext, useContext, useState, useEffect } from "react";
// import { usePathname } from "next/navigation";

// interface Feature {
//   properties: {
//     [key: string]: string | number;
//   };
//   geometry: {
//     coordinates: [number, number];
//   };
// }

// interface FeatureContextType {
//   selectedFeature: Feature | null;
//   setSelectedFeature: (feature: Feature | null) => void;
// }

// const FeatureContext = createContext<FeatureContextType | undefined>(undefined);

// export const FeatureProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
//   const pathname = usePathname();

//   useEffect(() => {
//     setSelectedFeature(null);
//   }, [pathname]);

//   return (
//     <FeatureContext.Provider value={{ selectedFeature, setSelectedFeature }}>
//       {children}
//     </FeatureContext.Provider>
//   );
// };

// export const useFeature = () => {
//   const context = useContext(FeatureContext);
//   if (context === undefined) {
//     throw new Error("useFeature must be used within a FeatureProvider");
//   }
//   return context;
// };
