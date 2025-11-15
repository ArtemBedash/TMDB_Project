import {useGetPopularMoviesQuery} from "@/features/movies/api/tmdbApi.ts";
import {MoviesGrid} from "@/features/movies/ui/MoviesGrid/MoviesGrid.tsx";
import s from "../CategoriesMoviesSection.module.css"
import {Pagination} from "@/common/components/Pagination/Pagination.tsx";
import {useState} from "react";


export const PopularMoviesFull = () => {
    const [currentPage, setCurrentPage] = useState(1)

    const {data, isLoading, error} = useGetPopularMoviesQuery(currentPage)
    const safeTotalPages = Math.min(data?.total_pages ?? 1, 500);
    const columns = 5


    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Ошибка загрузки</p>

    return (

        <section className={s.section}>
            <h1>Popular Movies</h1>
            <MoviesGrid  movies={data?.results || []} columns={columns}/>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pagesCount={safeTotalPages}/>
        </section>
        

    )

};

