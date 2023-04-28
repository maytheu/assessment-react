import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
    }),
  }),
});

export const { useLoadFlightQuery } = flightApi;
