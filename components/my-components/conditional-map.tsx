"use client";

import { usePathname } from 'next/navigation';
import MapboxMap from '@/components/my-components/mapbox';

interface ConditionalMapProps {
  children: React.ReactNode;
}

const ConditionalMap: React.FC<ConditionalMapProps> = ({ children }) => {
  const pathname = usePathname();

  // List of routes where the map should not be displayed
  const routesWithoutMap = ['/', '/conclusion'];

  if (routesWithoutMap.includes(pathname)) {
    return <div className="w-full h-full">{children}</div>;
  }

  return (
    <>
      <div className="w-full md:w-1/2 h-full overflow-auto">{children}</div>
      <div className="w-full md:w-1/2 h-full">
        <MapboxMap />
      </div>
    </>
  );
};

export default ConditionalMap;