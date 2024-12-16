import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import productReducer from "./features/product/productSlice";
import cartReducer from "./features/cart/cartSlice";
import authReducer from "./features/auth/authSlice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
const persistConfig = {
  key: "root",
  storage,
};

const persistedProductReducer = persistReducer(persistConfig, productReducer);
const persistedCartReducer = persistReducer(persistConfig, cartReducer);
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    product: persistedProductReducer,
    cart: persistedCartReducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

export default store;
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
