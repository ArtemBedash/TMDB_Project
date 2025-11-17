import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {setAppError} from "@/app/model/store/slices/appSlice.ts";
import type {TMDBError} from "@/features/movies/model/types.ts";


export const baseApi = createApi({

    reducerPath: 'baseApi',
    baseQuery: async (args, api, extraOptions) => {
        const result = await fetchBaseQuery({

            baseUrl: import.meta.env.VITE_TMDB_API_URL,
            prepareHeaders: (headers) => {
                headers.set('Authorization', `Bearer ${import.meta.env.VITE_TMDB_API_KEY_BEARER}`)
                return headers
            },

        })(args, api, extraOptions)

        if (result.error) {
            switch (result.error.status) {

                case 404: {
                    const data = result.error.data as TMDBError
                    api.dispatch(setAppError(`404 ${data.status_message}`))
                    break
                }

                case 401:{

                    const data = result.error.data as TMDBError
                    api.dispatch(setAppError(`401 ${data.status_message}`))
                    break
                }

                case 400:{

                    const data = result.error.data as TMDBError
                    api.dispatch(setAppError(`400 ${data.status_message}`))
                    break

                }
                case "FETCH_ERROR":{
                    api.dispatch(setAppError(result.error.error))
                    break
                }

                default:{

                    api.dispatch(setAppError(result.error))
                }
            }

        }

        return result;
    },


    endpoints: () => ({}),


})


