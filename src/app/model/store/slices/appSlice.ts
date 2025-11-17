import {createSlice} from '@reduxjs/toolkit';
import {storage} from "@/common/utils/storage.ts";

type Theme = 'dark' | 'light'


const initialState = {
    theme: storage.get('theme', 'dark') as Theme,
    error: null,
}
export const appSlice = createSlice({


    name: 'app',
    initialState,
    selectors: {
        selectTheme: (state) => state.theme,

        selectAppError: (state) => state.error, // ← вот он

    },
    reducers: {

        changeTheme: (state, action) => {

            state.theme = action.payload;


        },
        setAppError: (state, action) => {
            state.error = action.payload;
            console.log(state.error)
        },
    }
})

export const {changeTheme, setAppError} = appSlice.actions;
export const {selectTheme, selectAppError} = appSlice.selectors;
