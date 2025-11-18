import {useGetUpcomingMoviesQuery} from "@/features/movies/api/tmdbApi.ts";
import {MoviesGrid} from "@/common/components/MoviesGrid/MoviesGrid.tsx";
import s from '../CategoriesMoviesSection.module.css'
import {useState} from "react";
import {Pagination} from "@/common/components/Pagination/Pagination.tsx";
import {MoviesSkeletons} from "@/features/movies/ui/MoviesSkeletons/MoviesSkeletons.tsx";
export const UpcomingMoviesFull = () => {
    const [currentPage, setCurrentPage] = useState(1)

    const {data, isLoading} = useGetUpcomingMoviesQuery(currentPage)

    const safeTotalPages = Math.min(data?.total_pages ?? 1, 500);
    const columns =5;

    if (isLoading) return (<MoviesSkeletons count={columns*2} columns={columns} title={'Upcoming Movies'}/>);

    return (
        <section className={s.section}>
            <h1>Upcoming Movies</h1>
            <MoviesGrid movies={data?.results || []} columns={columns}/>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pagesCount={safeTotalPages}/>

        </section>
    )
};

