export type Movie = {
    id: number
    title: string
    poster_path: string | null
    overview: string
    release_date: string
    backdrop_path?: string | null
    vote_average:number
}

export type MoviesResponse = {
    page: number
    results: Movie[]
    total_pages: number
    total_results: number
}

export type MovieDetails = {
    id: number
    title: string
    original_title: string
    overview: string
    tagline: string | null
    status: string
    release_date: string
    runtime: number | null

    vote_average: number
    vote_count: number
    popularity: number

    poster_path: string | null
    backdrop_path: string | null

    genres: {
        id: number
        name: string
    }[]

    production_companies: {
        id: number
        name: string
        logo_path: string | null
        origin_country: string
    }[]

    production_countries: {
        iso_3166_1: string
        name: string
    }[]

    spoken_languages: {
        iso_639_1: string
        name: string
    }[]

    budget: number
    revenue: number

    homepage: string | null
    imdb_id: string | null
};

export type MovieCredits = {
    id: number
    cast: {
        cast_id: number
        character: string
        credit_id: string
        gender: number | null
        id: number
        name: string
        original_name: string
        profile_path: string | null
        order: number
    }[]
    crew: {
        department: string
        job: string
        credit_id: string
        gender: number | null
        id: number
        name: string
        original_name: string
        profile_path: string | null
    }[]
}

