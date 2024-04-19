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

const CartPersistConfig = {
  key: "cart",
  storage,
  whiteList: ["items"],
};
const WishlistPersistConfig = {
  key: "wishlist",
  storage,
  whiteList: ["itemsId"],
};

const rootReducer = combineReducers({
  auth,
  categories,
  products,
  wishlist: persistReducer(WishlistPersistConfig, wishlist),
  cart: persistReducer(CartPersistConfig, cart),
});

const store = configureStore({
  reducer: rootReducer,
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
