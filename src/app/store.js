import { configureStore } from "@reduxjs/toolkit";
import { securityApi } from "../app/services/security/securtiyService";
import securityReducer from "../features/security/securitySlice";
import fileUploadSlice from "../features/redux/fileupload/fileUploadSlice";

export const store = configureStore({
  reducer: {
    security: securityReducer,
    fileupload: fileUploadSlice,
    [securityApi.reducerPath]: securityApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(securityApi.middleware),
});
