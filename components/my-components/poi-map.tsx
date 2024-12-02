"use client"

import React, { useEffect, useRef, useState, useCallback } from "react"
import mapboxgl from "mapbox-gl"
import config from "@/config/config"
import "mapbox-gl/dist/mapbox-gl.css"

mapboxgl.accessToken = config.accessToken as string

interface Feature {
  properties: {
    [key: string]: string | number
  }
  geometry: {
    coordinates: [number, number]
  }
}

const PointsOfInterestMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<mapboxgl.Map | null>(null)
  const [mapLoaded, setMapLoaded] = useState(false)

  const addMapLayers = useCallback((map: mapboxgl.Map) => {
    map.addSource("pointsOfInterest", {
      type: "vector",
      url: config.interestURL,
    })

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
    })

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
    })
  }, [])

  const addClickEvents = useCallback((map: mapboxgl.Map) => {
    map.on("click", "pointsOfInterest", (e) => {
      if (e.features && e.features.length > 0) {
        const feature = e.features[0] as unknown as Feature
        console.log("Clicked point of interest:", feature.properties)
      }
    })

    map.on("mouseenter", "pointsOfInterest", () => {
      map.getCanvas().style.cursor = "pointer"
    })

    map.on("mouseleave", "pointsOfInterest", () => {
      map.getCanvas().style.cursor = ""
    })
  }, [])

  useEffect(() => {
    if (!mapContainerRef.current) return
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: config.style as string,
      center: [10.4515, 51.1657],
      zoom: 5,
      projection: "mercator",
    })

    map.on("load", () => {
      addMapLayers(map)
      addClickEvents(map)
      mapRef.current = map
      setMapLoaded(true)
    })

    return () => {
      map.remove()
    }
  }, [addMapLayers, addClickEvents])

  return (
    <div
      className="rounded-lg"
      ref={mapContainerRef}
      style={{ height: "100%", width: "100%" }}
    />
  )
}

export default PointsOfInterestMap