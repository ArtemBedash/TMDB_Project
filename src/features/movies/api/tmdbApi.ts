import type {FilteredMovies, MovieCredits, MovieDetails, MoviesResponse} from "@/features/movies/model/types.ts";
import {baseApi} from "@/app/api/baseApi.ts";
import {movieCreditsSchema, movieDetailsSchema, moviesResponseSchema} from "@/features/movies/model/schemas/schemas.ts";


export const tmdbApi = baseApi.injectEndpoints({


    endpoints: (builder) => ({
        getPopularMovies: builder.query<MoviesResponse, number | void>({
            query: (page) => ({
                url: 'movie/popular',
                params: {page},
            }),
            responseSchema: moviesResponseSchema,
            catchSchemaFailure: () => {
                return { status: 'CUSTOM_ERROR', error: 'Schema validation failed' }

            },
        }),
        getTopRatedMovies: builder.query<MoviesResponse, number | void>({
            query: (page) => ({
                url: 'movie/top_rated',
                params: {page},
            }),
            responseSchema: moviesResponseSchema,
            catchSchemaFailure: () => {
                return { status: 'CUSTOM_ERROR', error: 'Schema validation failed' }

            },
        }),
        getUpcomingMovies: builder.query<MoviesResponse, number | void>({
            query: (page) => ({
                url: 'movie/upcoming',
                params: {page},
            }),
            responseSchema: moviesResponseSchema,
            catchSchemaFailure: () => {
                return { status: 'CUSTOM_ERROR', error: 'Schema validation failed' }

            },
        }),
        getNowPlayingMovies: builder.query<MoviesResponse, number | void>({
            query: (page) => ({
                url: 'movie/now_playing',
                params: {page},
            }),
            responseSchema: moviesResponseSchema,
            catchSchemaFailure: () => {
                return { status: 'CUSTOM_ERROR', error: 'Schema validation failed' }

            },
        }),
        getSearchMovies: builder.query<MoviesResponse, { search: string, page: number }>({
            query: ({search, page}) => ({
                url: `search/movie`,
                params: {
                    query: search,
                    page
                },

            }),
            responseSchema: moviesResponseSchema,
            catchSchemaFailure: () => {
                return { status: 'CUSTOM_ERROR', error: 'Schema validation failed' }

            },
        }),
        getMovieById: builder.query<MovieDetails, string>({
            query: (id) => ({
                url: `movie/${id}`,
            }),
            responseSchema: movieDetailsSchema,
            catchSchemaFailure: () => {
                return { status: 'CUSTOM_ERROR', error: 'Schema validation failed' }

            },
        }),
        getMovieCredits: builder.query<MovieCredits, string>({
            query: (id) => ({
                url: `movie/${id}/credits`,
            }),
            responseSchema: movieCreditsSchema,
            catchSchemaFailure: () => {
                return { status: 'CUSTOM_ERROR', error: 'Schema validation failed' }

            },

        }),
        getSimilarMovies: builder.query<MoviesResponse, string>({
            query: (id) => ({
                url: `movie/${id}/similar`,
            }),
            responseSchema: moviesResponseSchema,
            catchSchemaFailure: () => {
                return { status: 'CUSTOM_ERROR', error: 'Schema validation failed' }

            },
        }),
        getFilteredMovies: builder.query<MoviesResponse, FilteredMovies>({
            query: ({page, genres, ratingLte, ratingGte, sortBy}) => ({
                url: `discover/movie`,
                params: {
                    sort_by: sortBy,
                    'vote_average.gte': ratingGte,
                    'vote_average.lte': ratingLte,
                    'with_genres': genres,
                    page
                },

            }),
            responseSchema: moviesResponseSchema,
            catchSchemaFailure: () => {
                return { status: 'CUSTOM_ERROR', error: 'Schema validation failed' }
            },
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
    useGetSimilarMoviesQuery,
    useGetFilteredMoviesQuery,
} = tmdbApi
