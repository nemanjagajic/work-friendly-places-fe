import React from 'react'
import { Place } from '../../ts/placeTypes'
import PlaceItem from './PlaceItem'

type PlaceListProps = {
  places: Array<Place>
}

const PlacesList: React.FC<PlaceListProps> = ({ places }) => {
  return (
    <div>
      {places.map(place => <PlaceItem key={place.id.toString()} place={place} />)}
    </div>
  )
}

export default PlacesList