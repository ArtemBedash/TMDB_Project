import { configureStore } from '@reduxjs/toolkit'
import { tmdbApi } from '@/features/movies/api/tmdbApi.ts'
import {setupListeners} from "@reduxjs/toolkit/query";
import favoritesSlice from "@/app/store/slices/favoritesSlice.ts";
import {appSlice} from "@/app/store/slices/appSlice.ts";

export const store = configureStore({
    reducer: {
        [tmdbApi.reducerPath]: tmdbApi.reducer,
        [favoritesSlice.name]: favoritesSlice.reducer,
        [appSlice.name]:appSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tmdbApi.middleware),

})

setupListeners(store.dispatch)
