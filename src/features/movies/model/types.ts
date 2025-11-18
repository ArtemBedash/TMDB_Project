import {movieCreditsSchema, movieDetailsSchema, moviesResponseSchema} from "@/features/movies/model/schemas/schemas.ts";
import {z} from "zod";

export type Movie = {
    id: number
    title: string
    poster_path: string | null
    overview: string
    release_date: string
    backdrop_path?: string | null
    vote_average:number
}


export type FilteredMovies = {

    page: number
    sortBy: string
    ratingGte: number
    ratingLte: number
    genres: string

}

export type TMDBError = {
    status_message: string;
    status_code: number;
};

export type SchemaErr = {
    status?: string
    error?: string
}

export type MoviesResponse = z.infer<typeof moviesResponseSchema>;
export type MovieCredits = z.infer<typeof movieCreditsSchema>;
export type MovieDetails = z.infer<typeof movieDetailsSchema>;

