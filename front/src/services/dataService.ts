import type { Station, TrainData } from '../types'

const mockStations: Station[] = [
  { id: 'paris-gare-de-lyon', name: 'Paris Gare de Lyon', region: 'Île-de-France' },
  { id: 'paris-gare-du-nord', name: 'Paris Gare du Nord', region: 'Île-de-France' },
  { id: 'lyon-part-dieu', name: 'Lyon Part-Dieu', region: 'Auvergne-Rhône-Alpes' },
  { id: 'marseille-saint-charles', name: 'Marseille Saint-Charles', region: 'Provence-Alpes-Côte d\'Azur' },
  { id: 'bordeaux-saint-jean', name: 'Bordeaux Saint-Jean', region: 'Nouvelle-Aquitaine' },
  { id: 'strasbourg', name: 'Strasbourg', region: 'Grand Est' }
]

const generateTrainData = (departureStationId: string, arrivalStationId: string): TrainData => {
  const totalTrains = Math.floor(Math.random() * 500) + 300 // 300-800 trains
  
  // Generate delays with realistic proportions
  const delayedDepartures = Math.floor(totalTrains * (Math.random() * 0.15 + 0.05)) // 5-20% delayed departures
  const delayedArrivals = Math.floor(totalTrains * (Math.random() * 0.20 + 0.10)) // 10-30% delayed arrivals
  
  // Calculate progressive delay categories
  const above15min = Math.floor(delayedArrivals * 0.7) // 70% of delayed arrivals
  const above30min = Math.floor(delayedArrivals * 0.4) // 40% of delayed arrivals
  const above60min = Math.floor(delayedArrivals * 0.15) // 15% of delayed arrivals

  // Generate average delays
  const averageDelayDeparture = Math.floor(Math.random() * 10) + 5 // 5-15 minutes
  const averageDelayArrival = Math.floor(Math.random() * 20) + 10 // 10-30 minutes

  return {
    id: `${departureStationId}-${arrivalStationId}`,
    departureStationId,
    arrivalStationId,
    trainType: Math.random() > 0.5 ? 'TGV' : 'TER',
    totalTrains,
    delayedDepartures,
    delayedArrivals,
    averageDelayDeparture,
    averageDelayArrival,
    delays: {
      above15min,
      above30min,
      above60min
    }
  }
}

export const fetchStations = async (): Promise<Station[]> => {
  await new Promise(resolve => setTimeout(resolve, 800))
  return [...mockStations]
}

export const fetchTrainData = async (
  departureStationId: string,
  arrivalStationId: string
): Promise<TrainData> => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return generateTrainData(departureStationId, arrivalStationId)
}