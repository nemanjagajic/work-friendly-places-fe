import React from 'react'
import { Place } from '../../ts/placeTypes'

type PlaceItemProps = {
  place: Place
}

const PlaceItem: React.FC<PlaceItemProps> = ({ place }) => {
  const placeData = place.attributes

  return (
    <div className='border-b p-4'>
      <h2>{placeData.title}</h2>
      <p>{`${placeData.street}, ${placeData.city}, ${placeData.country}`}</p>
      <p>{placeData.workingHours}</p>
    </div>
  )
}

export default PlaceItem