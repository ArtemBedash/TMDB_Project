import {useGetPopularMoviesQuery} from "@/features/movies/api/tmdbApi.ts";
import {MoviesGrid} from "@/common/components/MoviesGrid/MoviesGrid.tsx";
import s from "../CategoriesMoviesSection.module.css"
import {Pagination} from "@/common/components/Pagination/Pagination.tsx";
import {useState} from "react";

type Props = {

    title: string

}
export const PopularMoviesFull = ({title}:Props) => {
    const [currentPage, setCurrentPage] = useState(1)

    const {data, isLoading} = useGetPopularMoviesQuery(currentPage)
    const safeTotalPages = Math.min(data?.total_pages ?? 1, 500);
    const columns = 5


    if (isLoading) return <p>Loading...</p>

    return (

        <section className={s.section}>
            <h1>{title}</h1>
            <MoviesGrid  movies={data?.results || []} columns={columns}/>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pagesCount={safeTotalPages}/>
        </section>


    )

};

