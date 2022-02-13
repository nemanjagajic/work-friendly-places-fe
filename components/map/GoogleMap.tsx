import React, { useEffect, useRef, useState } from 'react'
import { Wrapper, Status } from '@googlemaps/react-wrapper'
import { createCustomEqual } from 'fast-equals'

const render = (status: Status) => {
  return <h1>{status}</h1>
}

const GoogleMap: React.VFC = () => {
  const [zoom, setZoom] = useState(3)
  const [center, setCenter] = useState<google.maps.LatLngLiteral>({
    lat: 0,
    lng: 0,
  })

  return (
    <div className='flex h-full'>
      <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY || ''} render={render}>
        <Map
          center={center}
          zoom={zoom}
        />
      </Wrapper>
    </div>
  )
}

const Map: React.FC<google.maps.MapOptions> = ({
  children,
  ...options
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<google.maps.Map>()

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}))
    }
  }, [ref, map])

  // because React does not do deep comparisons, a custom hook is used
  // see discussion in https://github.com/googlemaps/js-samples/issues/946
  useDeepCompareEffectForMaps(() => {
    if (map) {
      map.setOptions(options)
    }
  }, [map, options])

  return (
    <div ref={ref} className='grow h-full' />
  )
}

const deepCompareEqualsForMaps = createCustomEqual(
  (deepEqual) => (a: any, b: any) => {
    if (
      a instanceof google.maps.LatLng ||
      b instanceof google.maps.LatLng
    ) {
      return new google.maps.LatLng(a).equals(new google.maps.LatLng(b))
    }

    // TODO extend to other types

    // use fast-equals for other objects
    return deepEqual(a, b)
  }
)

function useDeepCompareMemoize(value: any) {
  const ref = useRef()

  if (!deepCompareEqualsForMaps(value, ref.current)) {
    ref.current = value
  }

  return ref.current
}

function useDeepCompareEffectForMaps(
  callback: React.EffectCallback,
  dependencies: any[]
) {
  useEffect(callback, dependencies.map(useDeepCompareMemoize))
}

export default GoogleMap