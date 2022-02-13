export interface Place {
  id: Number,
  attributes: {
    title: string,
    workingHours: string,
    workingHoursSaturday: string,
    workingHoursSunday: string,
    country: string,
    city: string,
    street: string,
    latitude: Number,
    longitude: Number,
    userId: Number,
    createdAt: Date,
    updatedAt: Date,
  }
}