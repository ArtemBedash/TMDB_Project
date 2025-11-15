import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import type {MovieCredits, MovieDetails, MoviesResponse} from "@/features/movies/model/types.ts";

const BASE_URL = import.meta.env.VITE_TMDB_API_URL
const API_KEY_2 = import.meta.env.VITE_TMDB_API_KEY_BEARER


export const tmdbApi = createApi({

    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({

        baseUrl: BASE_URL,
        prepareHeaders: (headers) => {
            headers.set('Authorization', `Bearer ${API_KEY_2}`)
            return headers
        },
    }),
    endpoints: (builder) => ({
        getPopularMovies: builder.query<MoviesResponse, number | void>({
            query: (page ) => ({
                url: 'movie/popular',
                params: { page},
            }),
        }),
        getTopRatedMovies: builder.query<MoviesResponse, number | void >({
            query: (page) => ({
                url: 'movie/top_rated',
                params: { page},
            }),
        }),
        getUpcomingMovies: builder.query<MoviesResponse, number |void>({
            query: (page ) => ({
                url: 'movie/upcoming',
                params: { page},
            }),
        }),
        getNowPlayingMovies: builder.query<MoviesResponse, number | void>({
            query: (page ) => ({
                url: 'movie/now_playing',
                params: { page},
            }),
        }),
        getSearchMovies: builder.query<MoviesResponse, {search:string,page:number}>({
            query: ({search,page}) => ({
                url: `search/movie`,
                params: {
                    query: search,
                    page
                },

            }),
        }),
        getMovieById: builder.query<MovieDetails,string>({
            query: (id) => ({
                url: `movie/${id}`,

            }),
        }),
        getMovieCredits: builder.query<MovieCredits, string >({
            query: (id) => ({
                url: `movie/${id}/credits`,
            }),
        }),
        getSimilarMovies: builder.query<MoviesResponse, string >({
            query: (id) => ({
                url: `movie/${id}/similar`,
            }),
        }),
    }),
})

export const {
    useGetPopularMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetUpcomingMoviesQuery,
    useGetNowPlayingMoviesQuery,
    useGetSearchMoviesQuery,
    useGetMovieByIdQuery,
    useGetMovieCreditsQuery,
    useGetSimilarMoviesQuery
} = tmdbApi
