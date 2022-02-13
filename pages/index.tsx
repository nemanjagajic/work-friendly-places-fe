import type { NextPage } from 'next'
import NavBar from '../components/shared/NavBar'
import PlacesList from '../components/places/PlacesList'
import { useFetchPlaces } from '../hooks/places'
import { Wrapper, Status } from '@googlemaps/react-wrapper'
import Map from '../components/map/Map'

const Home: NextPage = () => {
  const { data: places } = useFetchPlaces()

  const render = (status: Status) => {
    return <h1>{status}</h1>
  }

  return (
    <div>
      <NavBar />
      {places && <PlacesList places={places} />}
      {/*<div style={{ height: '80vh', width: '800px' }}>*/}
      {/*  <Map />*/}
      {/*</div>*/}
    </div>
  )
}

export default Home
