import React from 'react'
import { Place } from '../../ts/placeTypes'
import Image from 'next/image'
import { LocationOutline } from 'react-ionicons'
import { TimeOutline } from 'react-ionicons'
import { Image as ImageIcon } from 'react-ionicons'

type PlaceItemProps = {
  place: Place,
  setHoveredPlace: Function
}

const PlaceItem: React.FC<PlaceItemProps> = ({ place, setHoveredPlace }) => {
  const placeData = place.attributes

  return (
    <div
      className='flex flex-row border-b p-4 cursor-pointer place-content-between'
      onMouseEnter={() => setHoveredPlace(place)}
      onMouseLeave={() => setHoveredPlace(null)}
    >
      <div className='flex flex-col place-content-between'>
        <h2 className='text-xl font-medium text-black'>{placeData.title}</h2>
        <div>
          <div className='flex flex-row items-center'>
            <LocationOutline width='15px' height='15px' color={'#4338ca'}/>
            <p className='text-gray-500 ml-1.5'>{`${placeData.street}, ${placeData.city}, ${placeData.country}`}</p>
          </div>
          <div className='flex flex-row items-center'>
            <TimeOutline width='15px' height='15px' color={'#4338ca'}/>
            <p className='text-gray-400 ml-1.5'>{placeData.workingHours}</p>
          </div>
        </div>
      </div>
      {placeData.coverImage.data ? (
        <Image
          width={150}
          height={100}
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${placeData.coverImage.data.attributes.formats.thumbnail.url}`}
          alt={`${placeData.title} image`}
          className='rounded-md'
        />
      ) : (
        <div className='flex items-center justify-center w-[150px] h-[100px] rounded-md bg-gray-300'>
          <ImageIcon width='40px' height='40px' color={'#fff'}/>
        </div>
      )}
    </div>
  )
}

export default PlaceItem