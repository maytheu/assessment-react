import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { flightApi } from "./flightApi";
import authReducer from "./authSlice";

const rootReducer = {
  [flightApi.reducerPath]: flightApi.reducer,
  auth: authReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(flightApi.middleware, logger),
});

export default store;
