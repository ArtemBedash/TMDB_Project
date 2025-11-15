import {createSlice} from '@reduxjs/toolkit';
import type {Movie} from "@/features/movies/model/types.ts";
import {storage} from "@/common/utils/storage.ts";


const initialState = {
    items: storage.get('favorites', []) as Movie[],
}

const favoritesSlice = createSlice({


    name: 'favorite',
    initialState,
    selectors: {
        selectFavItems: (state) => state.items,
    },
    reducers: {

        addDelFav: (state, action) => {

            const favExist = state.items.find((item) => item.id === action.payload.id);
            if (!favExist) {
                state.items.push(action.payload);
            }
            if (favExist) {
                state.items = state.items.filter((item) => item.id !== action.payload.id);
            }

        }
    }
})

export const {addDelFav} = favoritesSlice.actions;
export const {selectFavItems} = favoritesSlice.selectors;
export default favoritesSlice;