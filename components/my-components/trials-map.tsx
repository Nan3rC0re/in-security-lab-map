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

const TrialsMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<mapboxgl.Map | null>(null)
  const [mapLoaded, setMapLoaded] = useState(false)

  const addMapLayers = useCallback((map: mapboxgl.Map) => {
    map.addSource("trials", {
      type: "vector",
      url: config.trialsURL,
    })

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
    })

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
    })
  }, [])

  const addClickEvents = useCallback((map: mapboxgl.Map) => {
    map.on("click", "trials", (e) => {
      if (e.features && e.features.length > 0) {
        const feature = e.features[0] as unknown as Feature
        console.log("Clicked trial:", feature.properties)
      }
    })

    map.on("mouseenter", "trials", () => {
      map.getCanvas().style.cursor = "pointer"
    })

    map.on("mouseleave", "trials", () => {
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

export default TrialsMap