import {useGetUpcomingMoviesQuery} from "@/features/movies/api/tmdbApi.ts";
import {MoviesGrid} from "@/common/components/MoviesGrid/MoviesGrid.tsx";
import s from "../MainMoviesSection.module.css"
import {NavLink} from "react-router-dom";
import {MoviesSkeletons} from "@/features/movies/ui/MoviesSkeletons/MoviesSkeletons.tsx";
import {handleSchemaError} from "@/common/utils/handleSchemaError.ts";

export const UpcomingMovies = () => {

    const {data, isLoading,error} = useGetUpcomingMoviesQuery()

    const columns = 6
    handleSchemaError(error)

    if (isLoading) return (<MoviesSkeletons count={columns} columns={columns} title={'Upcoming Movies'}/>);



    return (
        <section className={s.section}>
            <h1>Upcoming Movies</h1>
            <MoviesGrid moviesCount={6} movies={data?.results || []}/>
            <div className={s.viewAllWrapper}>
                <NavLink className={s.viewAll} to={'/categories/upcoming'}> View all →
                </NavLink>
            </div>
        </section>
    )
};

