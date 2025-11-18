import {z} from "zod";

export const movieSchema = z.object({
    id: z.number(),
    title: z.string(),
    poster_path: z.string().nullable(),
    overview: z.string(),
    release_date: z.string(),
    backdrop_path: z.string().nullable().optional(),
    vote_average: z.number(),
});


export const moviesResponseSchema = z.object({


    page: z.number(),
    results: z.array(movieSchema),
    total_pages: z.number(),
    total_results: z.number(),


})


export const movieDetailsSchema = z.object({
    id: z.number(),
    title: z.string(),
    original_title: z.string(),
    overview: z.string(),
    tagline: z.string().nullable(),
    status: z.string(),
    release_date: z.string(),
    runtime: z.number().nullable(),

    vote_average: z.number(),
    vote_count: z.number(),
    popularity: z.number(),

    poster_path: z.string().nullable(),
    backdrop_path: z.string().nullable(),

    genres: z.array(
        z.object({
            id: z.number(),
            name: z.string(),
        })
    ),

    production_companies: z.array(
        z.object({
            id: z.number(),
            name: z.string(),
            logo_path: z.string().nullable(),
            origin_country: z.string(),
        })
    ),

    production_countries: z.array(
        z.object({
            iso_3166_1: z.string(),
            name: z.string(),
        })
    ),

    spoken_languages: z.array(
        z.object({
            iso_639_1: z.string(),
            name: z.string(),
        })
    ),

    budget: z.number(),
    revenue: z.number(),

    homepage: z.string().nullable(),
    imdb_id: z.string().nullable(),
});


export const movieCreditsSchema = z.object({


    id: z.number(),
    cast: z.array(
        z.object({

            cast_id: z.number(),
            character: z.string(),
            credit_id: z.string(),
            gender: z.number().nullable(),
            id: z.number(),
            name: z.string(),
            original_name: z.string(),
            profile_path: z.string().nullable(),
            order: z.number(),


        })
    ),


    crew: z.array(
        z.object({


            department: z.string(),
            job: z.string(),
            credit_id: z.string(),
            gender: z.number().nullable(),
            id: z.number(),
            name: z.string(),
            original_name: z.string(),
            profile_path: z.string().nullable(),


        })
    ),


})






