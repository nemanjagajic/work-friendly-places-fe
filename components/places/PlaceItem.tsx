import React from 'react'
import { Place } from '../../ts/placeTypes'

type PlaceItemProps = {
  place: Place,
  setHoveredPlace: Function
}

const PlaceItem: React.FC<PlaceItemProps> = ({ place, setHoveredPlace }) => {
  const placeData = place.attributes

  return (
    <div
      className='border-b p-4 cursor-pointer'
      onMouseEnter={() => setHoveredPlace(place)}
      onMouseLeave={() => setHoveredPlace(null)}
    >
      <h2>{placeData.title}</h2>
      <p>{`${placeData.street}, ${placeData.city}, ${placeData.country}`}</p>
      <p>{placeData.workingHours}</p>
    </div>
  )
}

export default PlaceItem