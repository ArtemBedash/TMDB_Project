import {createSlice} from '@reduxjs/toolkit';
import {storage} from "@/common/utils/storage.ts";

type Theme = 'dark' | 'light'


const initialState = {
    theme: storage.get('theme', 'dark') as Theme,
}

export const appSlice = createSlice({


    name: 'app',
    initialState,
    selectors: {
        selectTheme: (state) => state.theme,
    },
    reducers: {

        changeTheme: (state, action) => {

            state.theme = action.payload;
    }
}})

export const {changeTheme} = appSlice.actions;
export const {selectTheme} = appSlice.selectors;
