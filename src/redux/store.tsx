import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/characterSlice";
import { userApi } from "./rtkquery/characterapi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
export const store = configureStore({
  reducer: {
    counterReducer,
    [userApi.reducerPath]: userApi.reducer
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([userApi.middleware]),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//////////////////////////////////
// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./slice/characterSlice";
// export const store = configureStore({
//   reducer: {
//     counterReducer
//   },
//   devTools: process.env.NODE_ENV !== "production",
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;


//for rtk query
// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./features/counterSlice";
// import { userApi } from "./services/userApi";
// import { setupListeners } from "@reduxjs/toolkit/dist/query";

// export const store = configureStore({
//   reducer: {
//     counterReducer,
//     [userApi.reducerPath]: userApi.reducer,
//   },
//   devTools: process.env.NODE_ENV !== "production",
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({}).concat([userApi.middleware]),
// });

// setupListeners(store.dispatch);

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
