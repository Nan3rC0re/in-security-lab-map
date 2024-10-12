import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import config from "@/config/config";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = config.accessToken as string;

const MapboxMap = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: config.style as string,
      center: [10.4515, 51.1657],
      zoom: 5,
      projection: "mercator",
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      className="rounded-lg"
      ref={mapContainerRef}
      style={{ height: "100%", width: "100%" }}
    />
  );
};

export default MapboxMap;
