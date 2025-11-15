import {useGetNowPlayingMoviesQuery} from "@/features/movies/api/tmdbApi.ts";
import {MoviesGrid} from "@/features/movies/ui/MoviesGrid/MoviesGrid.tsx";
import s from "../MainMoviesSection.module.css"
import {NavLink} from "react-router-dom";

export const NowPlayingMovies = () => {

    const {data, isLoading, error} = useGetNowPlayingMoviesQuery()

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Ошибка загрузки</p>

    return (
        <section className={s.section}>
            <h1>Now Playing Movies</h1>
            <MoviesGrid quantity={6} movies={data?.results || []}/>
            <div className={s.viewAllWrapper}>
                <NavLink className={s.viewAll} to={'/categories/now_playing'}>    View all →
                </NavLink>
            </div>
        </section>
    )
};

