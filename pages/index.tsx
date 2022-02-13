import type { NextPage } from 'next'
import NavBar from '../components/shared/NavBar'
import PlacesList from '../components/places/PlacesList'
import { useFetchPlaces } from '../hooks/places'
import GoogleMap from '../components/map/GoogleMap'

const Home: NextPage = () => {
  const { data: places } = useFetchPlaces()

  return (
    <>
      <NavBar />
      <div className='flex h-screen'>
        <div className='flex flex-row w-full h-4/5 m-auto mt-32'>
          <div className='w-1/2 overflow-scroll p-4'>
            {places && <PlacesList places={places} />}
          </div>
          <div className='w-1/2 p-4'>
            <GoogleMap />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
