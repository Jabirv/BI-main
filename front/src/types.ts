export interface Station {
  id: string
  name: string
  region: string
}

export interface TrainData {
  id: string
  departureStationId: string
  arrivalStationId: string
  trainType: string
  totalTrains: number
  delayedDepartures: number
  delayedArrivals: number
  averageDelayDeparture: number
  averageDelayArrival: number
  delays: {
    above15min: number
    above30min: number
    above60min: number
  }
}