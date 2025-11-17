import { configureStore } from '@reduxjs/toolkit'
import {setupListeners} from "@reduxjs/toolkit/query";
import favoritesSlice from "@/app/model/store/slices/favoritesSlice.ts";
import {appSlice} from "@/app/model/store/slices/appSlice.ts";
import {baseApi} from "@/app/api/baseApi.ts";

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        [favoritesSlice.name]: favoritesSlice.reducer,
        [appSlice.name]:appSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),

})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>

