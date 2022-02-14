import type { NextPage } from 'next'
import NavBar from '../components/shared/NavBar'
import PlacesList from '../components/places/PlacesList'
import { useFetchPlaces } from '../hooks/places'
import GoogleMap from '../components/map/GoogleMap'
import { useState } from 'react'
import { Place } from '../ts/placeTypes'

const Home: NextPage = () => {
  const { data: places } = useFetchPlaces()
  const [hoveredPlace, setHoveredPlace] = useState<Place | null>(null)
  const markers = places ? places.map(p => ({
    lat: p.attributes.latitude,
    lng: p.attributes.longitude,
    isActive: p.id === hoveredPlace?.id
  })) : []

  return (
    <>
      <NavBar />
      <div className='flex h-screen'>
        <div className='flex flex-row w-full h-4/5 m-auto mt-32'>
          <div className='w-1/2 overflow-scroll p-4'>
            {places && <PlacesList places={places} setHoveredPlace={setHoveredPlace} />}
          </div>
          <div className='w-1/2 p-4'>
            <GoogleMap markers={markers} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
