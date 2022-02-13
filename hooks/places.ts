import { useQuery } from 'react-query'
import { Place } from '../ts/placeTypes'
import placesService from '../services/api/placesService'

export const useFetchPlaces = () => {
  const { data, error, isLoading, isFetching } = useQuery<Array<Place>>(
    'places',
    () => placesService.getPlaces()
  )
  return { data, error, isLoading, isFetching }
}