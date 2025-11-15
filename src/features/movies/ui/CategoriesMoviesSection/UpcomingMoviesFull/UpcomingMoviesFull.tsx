import {useGetUpcomingMoviesQuery} from "@/features/movies/api/tmdbApi.ts";
import {MoviesGrid} from "@/features/movies/ui/MoviesGrid/MoviesGrid.tsx";
import s from '../CategoriesMoviesSection.module.css'
import {useState} from "react";
import {Pagination} from "@/common/components/Pagination/Pagination.tsx";
export const UpcomingMoviesFull = () => {
    const [currentPage, setCurrentPage] = useState(1)

    const {data, isLoading, error} = useGetUpcomingMoviesQuery(currentPage)

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Ошибка загрузки</p>
    const safeTotalPages = Math.min(data?.total_pages ?? 1, 500);
    const columns =5;
    return (
        <section className={s.section}>
            <h1>Upcoming Movies</h1>
            <MoviesGrid movies={data?.results || []} columns={columns}/>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pagesCount={safeTotalPages}/>

        </section>
    )
};

