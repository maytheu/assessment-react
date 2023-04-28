import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const flightApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://opensky-network.org/api/flights",
  }),

  endpoints: (build) => ({
    loadFlight: build.query({
      url: (begin, end) => `/all?begin=${begin}&end=${end}`,
    }),
  }),
});

export const { useLoadFlightQuery } = flightApi;
