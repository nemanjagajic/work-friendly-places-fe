import React from 'react'
import { Place } from '../../ts/placeTypes'
import PlaceItem from './PlaceItem'

type PlaceListProps = {
  places: Array<Place>,
  setHoveredPlace: Function
}

const PlacesList: React.FC<PlaceListProps> = ({ places, setHoveredPlace }) => {
  return (
    <div>
      {places.map(place => <PlaceItem key={place.id.toString()} place={place} setHoveredPlace={setHoveredPlace} />)}
    </div>
  )
}

export default PlacesList