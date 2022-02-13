import request from '../request'
import { Place } from '../../ts/placeTypes'

const API_ENDPOINTS = {
  PLACES: '/api/places',
}

class PlacesService {
  getPlaces = async (): Promise<Array<Place>> => {
    try {
      const { data: responseData } = await request.get(API_ENDPOINTS.PLACES)
      return responseData.data
    } catch (e) {
      throw e
    }
  }
}

export default new PlacesService()