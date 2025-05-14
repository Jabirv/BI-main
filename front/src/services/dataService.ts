import type { Station, TrainData } from "../types";

const mockStations: Station[] = [
  {
    id: "aix-en-provence-tgv",
    name: "AIX EN PROVENCE TGV",
    region: "Inconnue",
  },
  { id: "angers-saint-laud", name: "ANGERS SAINT LAUD", region: "Inconnue" },
  { id: "angouleme", name: "ANGOULEME", region: "Inconnue" },
  { id: "annecy", name: "ANNECY", region: "Inconnue" },
  { id: "arras", name: "ARRAS", region: "Inconnue" },
  { id: "avignon-tgv", name: "AVIGNON TGV", region: "Inconnue" },
  { id: "barcelona", name: "BARCELONA", region: "Inconnue" },
  { id: "bellegarde-ain", name: "BELLEGARDE (AIN)", region: "Inconnue" },
  {
    id: "besancon-franche-comte-tgv",
    name: "BESANCON FRANCHE COMTE TGV",
    region: "Inconnue",
  },
  { id: "bordeaux-st-jean", name: "BORDEAUX ST JEAN", region: "Inconnue" },
  { id: "brest", name: "BREST", region: "Inconnue" },
  {
    id: "chambery-challes-les-eaux",
    name: "CHAMBERY CHALLES LES EAUX",
    region: "Inconnue",
  },
  { id: "dijon-ville", name: "DIJON VILLE", region: "Inconnue" },
  { id: "douai", name: "DOUAI", region: "Inconnue" },
  { id: "dunkerque", name: "DUNKERQUE", region: "Inconnue" },
  { id: "francfort", name: "FRANCFORT", region: "Inconnue" },
  { id: "geneve", name: "GENEVE", region: "Inconnue" },
  { id: "grenoble", name: "GRENOBLE", region: "Inconnue" },
  { id: "italie", name: "ITALIE", region: "Inconnue" },
  { id: "la-rochelle-ville", name: "LA ROCHELLE VILLE", region: "Inconnue" },
  { id: "lausanne", name: "LAUSANNE", region: "Inconnue" },
  { id: "laval", name: "LAVAL", region: "Inconnue" },
  {
    id: "le-creusot-montceau-montchanin",
    name: "LE CREUSOT MONTCEAU MONTCHANIN",
    region: "Inconnue",
  },
  { id: "le-mans", name: "LE MANS", region: "Inconnue" },
  { id: "lille", name: "LILLE", region: "Inconnue" },
  { id: "lyon-part-dieu", name: "LYON PART DIEU", region: "Inconnue" },
  { id: "macon-loche", name: "MACON LOCHE", region: "Inconnue" },
  { id: "madrid", name: "MADRID", region: "Inconnue" },
  { id: "marne-la-vallee", name: "MARNE LA VALLEE", region: "Inconnue" },
  {
    id: "marseille-st-charles",
    name: "MARSEILLE ST CHARLES",
    region: "Inconnue",
  },
  { id: "metz", name: "METZ", region: "Inconnue" },
  { id: "montpellier", name: "MONTPELLIER", region: "Inconnue" },
  { id: "mulhouse-ville", name: "MULHOUSE VILLE", region: "Inconnue" },
  { id: "nancy", name: "NANCY", region: "Inconnue" },
  { id: "nantes", name: "NANTES", region: "Inconnue" },
  { id: "nice-ville", name: "NICE VILLE", region: "Inconnue" },
  { id: "nimes", name: "NIMES", region: "Inconnue" },
  { id: "paris-est", name: "PARIS EST", region: "Île-de-France" },
  { id: "paris-lyon", name: "PARIS LYON", region: "Île-de-France" },
  {
    id: "paris-montparnasse",
    name: "PARIS MONTPARNASSE",
    region: "Île-de-France",
  },
  { id: "paris-nord", name: "PARIS NORD", region: "Île-de-France" },
  { id: "paris-vaugirard", name: "PARIS VAUGIRARD", region: "Île-de-France" },
  { id: "perpignan", name: "PERPIGNAN", region: "Inconnue" },
  { id: "poitiers", name: "POITIERS", region: "Inconnue" },
  { id: "quimper", name: "QUIMPER", region: "Inconnue" },
  { id: "reims", name: "REIMS", region: "Inconnue" },
  { id: "rennes", name: "RENNES", region: "Inconnue" },
  {
    id: "saint-etienne-chateaucreux",
    name: "SAINT ETIENNE CHATEAUCREUX",
    region: "Inconnue",
  },
  { id: "st-malo", name: "ST MALO", region: "Inconnue" },
  {
    id: "st-pierre-des-corps",
    name: "ST PIERRE DES CORPS",
    region: "Inconnue",
  },
  { id: "strasbourg", name: "STRASBOURG", region: "Inconnue" },
  { id: "stuttgart", name: "STUTTGART", region: "Inconnue" },
  { id: "toulon", name: "TOULON", region: "Inconnue" },
  { id: "toulouse-matabiau", name: "TOULOUSE MATABIAU", region: "Inconnue" },
  { id: "tourcoing", name: "TOURCOING", region: "Inconnue" },
  { id: "tours", name: "TOURS", region: "Inconnue" },
  { id: "valence-alixan-tgv", name: "VALENCE ALIXAN TGV", region: "Inconnue" },
  { id: "vannes", name: "VANNES", region: "Inconnue" },
  { id: "zurich", name: "ZURICH", region: "Inconnue" },
];

const generateTrainData = (
  departureStationId: string,
  arrivalStationId: string
): TrainData => {
  const totalTrains = Math.floor(Math.random() * 500) + 300; // 300-800 trains

  // Generate delays with realistic proportions
  const delayedDepartures = Math.floor(
    totalTrains * (Math.random() * 0.15 + 0.05)
  ); // 5-20% delayed departures
  const delayedArrivals = Math.floor(totalTrains * (Math.random() * 0.2 + 0.1)); // 10-30% delayed arrivals

  // Calculate progressive delay categories
  const above15min = Math.floor(delayedArrivals * 0.7); // 70% of delayed arrivals
  const above30min = Math.floor(delayedArrivals * 0.4); // 40% of delayed arrivals
  const above60min = Math.floor(delayedArrivals * 0.15); // 15% of delayed arrivals

  // Generate average delays
  const averageDelayDeparture = Math.floor(Math.random() * 10) + 5; // 5-15 minutes
  const averageDelayArrival = Math.floor(Math.random() * 20) + 10; // 10-30 minutes

  return {
    id: `${departureStationId}-${arrivalStationId}`,
    departureStationId,
    arrivalStationId,
    trainType: Math.random() > 0.5 ? "TGV" : "TER",
    totalTrains,
    delayedDepartures,
    delayedArrivals,
    averageDelayDeparture,
    averageDelayArrival,
    delays: {
      above15min,
      above30min,
      above60min,
    },
  };
};

export const fetchStations = async (): Promise<Station[]> => {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return [...mockStations];
};

export const fetchTrainData = async (
  departureStationId: string,
  arrivalStationId: string
): Promise<TrainData> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return generateTrainData(departureStationId, arrivalStationId);
};
