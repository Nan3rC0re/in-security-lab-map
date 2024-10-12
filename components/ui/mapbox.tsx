import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import config from "@/config/config";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = config.accessToken as string;

interface MapboxMapProps {
  visibleLayer: string | null;
}

const MapboxMap: React.FC<MapboxMapProps> = ({ visibleLayer }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

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
      map.addSource("crimes", {
        type: "vector",
        url: config.crimesURL,
      });

      map.addLayer({
        id: "crimes-layer",
        type: "circle",
        source: "crimes",
        "source-layer": config.crimesSource,
        paint: {
          "circle-radius": 6,
          "circle-color": "#ff0000",
          "circle-opacity": 0.8,
        },
        layout: { visibility: "none" },
      });

      map.addSource("interest", {
        type: "vector",
        url: config.interestURL,
      });

      map.addLayer({
        id: "interest-layer",
        type: "circle",
        source: "interest",
        "source-layer": config.interestSource,
        paint: {
          "circle-radius": 6,
          "circle-color": "#00ff00",
          "circle-opacity": 0.8,
        },
        layout: { visibility: "none" },
      });

      map.addSource("trials", {
        type: "vector",
        url: config.trialsURL,
      });

      map.addLayer({
        id: "trials-layer",
        type: "circle",
        source: "trials",
        "source-layer": config.trialsSource,
        paint: {
          "circle-radius": 6,
          "circle-color": "#0000ff",
          "circle-opacity": 0.8,
        },
        layout: { visibility: "none" },
      });

      mapRef.current = map;
    });

    return () => {
      map.remove();
    };
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current;

      ["crimes-layer", "interest-layer", "trials-layer"].forEach((layerId) => {
        map.setLayoutProperty(layerId, "visibility", "none");
      });

      if (visibleLayer) {
        map.setLayoutProperty(visibleLayer, "visibility", "visible");
      }
    }
  }, [visibleLayer]);

  return (
    <div
      className="rounded-lg"
      ref={mapContainerRef}
      style={{ height: "100%", width: "100%" }}
    />
  );
};

export default MapboxMap;
