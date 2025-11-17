import {useGetNowPlayingMoviesQuery} from "@/features/movies/api/tmdbApi.ts";
import {MoviesGrid} from "@/common/components/MoviesGrid/MoviesGrid.tsx";
import s from "../MainMoviesSection.module.css"
import {NavLink} from "react-router-dom";
import {MoviesSkeletons} from "@/features/movies/ui/MoviesSkeletons/MoviesSkeletons.tsx";
import {handleSchemaError} from "@/common/utils/handleSchemaError.ts";

export const NowPlayingMovies = () => {

    const {data, isLoading,error} = useGetNowPlayingMoviesQuery()

    const columns = 6
    handleSchemaError(error)

    if (isLoading) return (<MoviesSkeletons count={columns} columns={columns} title={'Now Playing Movies'}/>);


    return (
        <section className={s.section}>
            <h1>Now Playing Movies</h1>
            <MoviesGrid moviesCount={6} movies={data?.results || []}/>
            <div className={s.viewAllWrapper}>
                <NavLink className={s.viewAll} to={'/categories/now_playing'}>    View all →
                </NavLink>
            </div>
        </section>
    )
};

