import React from 'react'
import { Place } from '../../ts/placeTypes'
import Image from 'next/image'

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
      {placeData.coverImage.data && (
        <Image
          width={100}
          height={100}
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${placeData.coverImage.data.attributes.formats.thumbnail.url}`}
          alt={`${placeData.title} image`}
        />
      )}
    </div>
  )
}

export default PlaceItem