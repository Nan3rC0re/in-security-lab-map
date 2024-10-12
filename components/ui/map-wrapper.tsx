'use client'

import React, { useState } from 'react'
import MapboxMap from '@/components/ui/mapbox'

export default function MapWrapper() {
  const [visibleLayer, setVisibleLayer] = useState<string | null>('crimes-layer')

  return (
    <div className="map-view-container w-full h-full overflow-hidden">
      <MapboxMap visibleLayer={visibleLayer} />
    </div>
  )
}