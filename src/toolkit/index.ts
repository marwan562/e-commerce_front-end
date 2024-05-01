import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import auth from "./Auth/authSlice";
import categories from "./categories/categoriesSlice";
import products from "./products/productsSlice";
import cart from "./Cart/CartSlice";
import wishlist from "./Cart/wishlist/wishlistSlice";
import storage from "redux-persist/lib/storage";
import orders from "./orders/ordersSlice";

const rootPersistConfig = {
  key: "root",
  storage,
  whiteList: ["cart", "auth"],
};

const authPersistConfig = {
  key: "auth",
  storage,
  whiteList: ["user", "accessToken"],
};

const CartPersistConfig = {
  key: "cart",
  storage,
  whiteList: ["items"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, auth),
  categories,
  products,
  wishlist,
  cart: persistReducer(CartPersistConfig, cart),
  orders,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export { store, persistor };
