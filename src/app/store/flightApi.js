import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { timeFormat } from "../common/function";

export const flightApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://opensky-network.org/api/flights",
  }),

  endpoints: (build) => ({
    loadFlight: build.query({
      query: () => {
        const end = Math.floor(Date.now() / 1000);
        const begin = end - 7200;
        return `/all?begin=${begin}&end=${end}`;
      },
      transformResponse: (flights) => {
        const data = flights.map((flight) => {
          return {
            estDepartureAirport: flight.estDepartureAirport,
            estArrivalAirport: flight.estArrivalAirport,
            lastSeen: timeFormat(flight.lastSeen),
            departureAirportCandidatesCount:
              flight.departureAirportCandidatesCount,
            arrivalAirportCandidatesCount: flight.arrivalAirportCandidatesCount,
            callsign: flight.callsign,
            estArrivalAirportHorizDistance:
              flight.estArrivalAirportHorizDistance,
            estArrivalAirportVertDistance: flight.estArrivalAirportVertDistance,
            estDepartureAirportHorizDistance:
              flight.estDepartureAirportHorizDistance,
            estDepartureAirportVertDistance:
              flight.estDepartureAirportVertDistance,
            firstSeen: timeFormat(flight.firstSeen),
            icao24: flight.icao24,
          };
        });
        console.log(data);
        return data;
      },
    }),
  }),
});

export const { useLoadFlightQuery } = flightApi;
