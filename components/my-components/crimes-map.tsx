"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface Feature {
  properties: {
    [key: string]: string | number;
  };
  geometry: {
    coordinates: [number, number];
  };
}

interface CrimesMapProps {
  onFeatureClick: (feature: Feature["properties"] | null) => void;
}

const CrimesMap: React.FC<CrimesMapProps> = ({ onFeatureClick }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [config, setConfig] = useState<{
    accessToken: string;
    style: string;
    crimesURL: string;
    crimesSource: string;
  } | null>(null);

  const fetchConfig = async () => {
    try {
      const response = await fetch("/api/mapbox?endpoint=crimes");
      if (!response.ok) throw new Error("Failed to fetch map configuration");
      const data = await response.json();
      setConfig({
        accessToken: data.token,
        style: data.style,
        crimesURL: data.url,
        crimesSource: data.sources,
      });
    } catch (error) {
      console.error("Error fetching configuration:", error);
    }
  };

  const addMapLayers = useCallback(
    (map: mapboxgl.Map) => {
      if (!config) return;

      map.addSource("crimes", {
        type: "vector",
        url: config.crimesURL,
      });

      map.addLayer({
        id: "crimes",
        type: "circle",
        source: "crimes",
        "source-layer": config.crimesSource,
        paint: {
          "circle-color": [
            "match",
            ["get", "Gender/Sex"],
            0,
            "#7F3121",
            1,
            "#FF69B4",
            "#CCCCCC",
          ],
          "circle-opacity": 0.75,
          "circle-radius": 5,
        },
      });

      map.addLayer({
        id: "crimes-labels",
        type: "symbol",
        source: "crimes",
        "source-layer": config.crimesSource,
        layout: {
          "text-field": ["get", "Defendant Name"],
          "text-size": 12,
          "text-anchor": "top",
          "text-offset": [0, 0.5],
          "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
        },
        paint: {
          "text-color": "#000000",
          "text-halo-color": "#ffffff",
          "text-halo-width": 1,
        },
      });
    },
    [config]
  );

  const addClickEvents = useCallback(
    (map: mapboxgl.Map) => {
      map.on("click", "crimes", (e) => {
        if (e.features && e.features.length > 0) {
          const feature = e.features[0] as unknown as Feature;
          onFeatureClick(feature.properties);
        }
      });

      map.on("mouseenter", "crimes", () => {
        map.getCanvas().style.cursor = "pointer";
      });

      map.on("mouseleave", "crimes", () => {
        map.getCanvas().style.cursor = "";
      });
    },
    [onFeatureClick]
  );

  useEffect(() => {
    fetchConfig();
  }, []);

  useEffect(() => {
    if (!mapContainerRef.current || !config) return;

    mapboxgl.accessToken = config.accessToken;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: config.style,
      center: [10.4515, 51.1657],
      zoom: 5,
      projection: "mercator",
    });

    map.on("load", () => {
      addMapLayers(map);
      addClickEvents(map);
      mapRef.current = map;
      setMapLoaded(true);
    });

    return () => {
      map.remove();
    };
  }, [addMapLayers, addClickEvents, config]);

  return (
    <div
      className="rounded-lg "
      ref={mapContainerRef}
      style={{ height: "100%", width: "100%" }}
    />
  );
};

export default CrimesMap;
