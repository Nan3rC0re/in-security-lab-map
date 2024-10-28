"use client";

import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import config from "@/config/config";
import { useFeature } from "@/context/FeatureContext";
import "mapbox-gl/dist/mapbox-gl.css";
import { usePathname } from "next/navigation";

mapboxgl.accessToken = config.accessToken as string;

interface Feature {
  properties: {
    [key: string]: string | number;
  };
  geometry: {
    coordinates: [number, number];
  };
}

const MapboxMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const { setSelectedFeature } = useFeature();
  const [mapLoaded, setMapLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: config.style as string,
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
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (map && mapLoaded) {
      updateVisibleLayer(map, pathname);
    }
  }, [pathname, mapLoaded]);

  const addMapLayers = (map: mapboxgl.Map) => {
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

    map.addSource("pointsOfInterest", {
      type: "vector",
      url: config.interestURL,
    });

    map.addLayer({
      id: "pointsOfInterest",
      type: "circle",
      source: "pointsOfInterest",
      "source-layer": config.interestSource,
      paint: {
        "circle-color": [
          "match",
          ["get", "Category"],
          "Labor Camp",
          "#7F3121",
          "Hospital",
          "#FF69B4",
          "Medical Institution",
          "#0000FF",
          "Concentration Camp",
          "#FF0000",
          "#CCCCCC",
        ],
        "circle-opacity": 0.75,
        "circle-radius": 5,
      },
    });

    map.addLayer({
      id: "poi-labels",
      type: "symbol",
      source: "pointsOfInterest",
      "source-layer": config.interestSource,
      layout: {
        "text-field": ["get", "Name of Location"],
        "text-size": 12,
        "text-anchor": "top",
        "text-offset": [0, 0.5],
        "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
      },
      paint: {
        "text-color": [
          "match",
          ["get", "Category"],
          "Labor Camp",
          "#7F3121",
          "Hospital",
          "#FF69B4",
          "Medical Institution",
          "#0000FF",
          "Concentration Camp",
          "#FF0000",
          "#CCCCCC",
        ],
      },
    });

    map.addSource("trials", {
      type: "vector",
      url: config.trialsURL,
    });

    map.addLayer({
      id: "trials",
      type: "circle",
      source: "trials",
      "source-layer": config.trialsSource,
      paint: {
        "circle-color": "#006400",
        "circle-opacity": 0.75,
        "circle-radius": 5,
      },
    });

    map.addLayer({
      id: "trials-labels",
      type: "symbol",
      source: "trials",
      "source-layer": config.trialsSource,
      layout: {
        "text-field": ["get", "Court Date"],
        "text-size": 12,
        "text-anchor": "top",
        "text-offset": [0, 0.5],
        "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
      },
      paint: {
        "text-color": "#006400",
        "text-opacity": 0.75,
      },
    });
  };

  const updateVisibleLayer = (map: mapboxgl.Map, currentPath: string) => {
    const layers = [
      { id: "crimes", labelId: "crimes-labels", path: "/crimes" },
      { id: "pointsOfInterest", labelId: "poi-labels", path: "/poi" },
      { id: "trials", labelId: "trials-labels", path: "/trials" },
    ];

    layers.forEach(({ id, labelId, path }) => {
      const visibility = currentPath === path ? "visible" : "none";
      map.setLayoutProperty(id, "visibility", visibility);
      map.setLayoutProperty(labelId, "visibility", visibility);
    });
  };
  const addClickEvents = (map: mapboxgl.Map) => {
    const layers = ["crimes", "pointsOfInterest", "trials"];

    layers.forEach((layer) => {
      map.on("click", layer, (e) => {
        if (e.features && e.features.length > 0) {
          const feature = e.features[0] as unknown as Feature;
          setSelectedFeature(feature);
        }
      });

      map.on("mouseenter", layer, () => {
        map.getCanvas().style.cursor = "pointer";
      });

      map.on("mouseleave", layer, () => {
        map.getCanvas().style.cursor = "";
      });
    });
  };

  return (
    <div
      className="rounded-lg"
      ref={mapContainerRef}
      style={{ height: "100%", width: "100%" }}
    />
  );
};

export default MapboxMap;
