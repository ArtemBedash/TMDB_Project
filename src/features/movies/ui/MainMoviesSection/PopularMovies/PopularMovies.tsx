import {useGetPopularMoviesQuery} from "@/features/movies/api/tmdbApi.ts";
import {MoviesGrid} from "@/common/components/MoviesGrid/MoviesGrid.tsx";
import s from "../MainMoviesSection.module.css"
import {NavLink} from "react-router-dom";
import {MoviesSkeletons} from "@/features/movies/ui/MoviesSkeletons/MoviesSkeletons.tsx";


export const PopularMovies = () => {

    const {data, isLoading} = useGetPopularMoviesQuery()
    const columns = 6


    if (isLoading) return (<MoviesSkeletons count={columns} columns={columns} title={'Popular Movies'}/>);


    return (

        <section className={s.section}>
            <h1>Popular Movies</h1>
            <MoviesGrid moviesCount={6} movies={data?.results || []}/>
            <div className={s.viewAllWrapper}>
                <NavLink className={s.viewAll} to={'/categories/popular'}> View all →
                </NavLink>
            </div>
        </section>

    )

};

