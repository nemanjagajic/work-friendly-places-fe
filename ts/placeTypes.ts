type PlaceImage = {
  data: {
    attributes: {
      formats: {
        thumbnail: {
          url: string
        }
      }
    }
  }
}

export interface Place {
  id: number,
  attributes: {
    title: string,
    workingHours: string,
    workingHoursSaturday: string,
    workingHoursSunday: string,
    country: string,
    city: string,
    street: string,
    latitude: number,
    longitude: number,
    userId: number,
    createdAt: Date,
    updatedAt: Date,
    coverImage: PlaceImage,
    images: any
  }
}