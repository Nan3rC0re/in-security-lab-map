'use client'

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import MapboxMap from '@/components/ui/mapbox'

export default function MapWrapper() {
  const [visibleLayer, setVisibleLayer] = useState<string | null>('crimes-layer')
  const pathname = usePathname()

  useEffect(() => {
    switch (pathname) {
      case '/crimes':
        setVisibleLayer('crimes-layer')
        break
      case '/poi':
        setVisibleLayer('interest-layer')
        break
      case '/trials':
        setVisibleLayer('trials-layer')
        break
      default:
        setVisibleLayer(null)
    }
  }, [pathname])

  return (
    <div className="map-view-container w-full h-full overflow-hidden">
      <MapboxMap visibleLayer={visibleLayer} />
    </div>
  )
}