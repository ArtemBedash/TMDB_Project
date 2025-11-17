import {useGetNowPlayingMoviesQuery} from "@/features/movies/api/tmdbApi.ts";
import {MoviesGrid} from "@/common/components/MoviesGrid/MoviesGrid.tsx";
import s from "../CategoriesMoviesSection.module.css"
import {Pagination} from "@/common/components/Pagination/Pagination.tsx";
import {useState} from "react";
import {MoviesSkeletons} from "@/features/movies/ui/MoviesSkeletons/MoviesSkeletons.tsx";
import {handleSchemaError} from "@/common/utils/handleSchemaError.ts";

export const NowPlayingMoviesFull = () => {
    const [currentPage, setCurrentPage] = useState(1)

    const {data, isLoading,error} = useGetNowPlayingMoviesQuery(currentPage)
    const safeTotalPages = Math.min(data?.total_pages ?? 1, 500);
    const columns = 5
    handleSchemaError(error)

    if (isLoading) return (<MoviesSkeletons count={columns*2} columns={columns} title={'Now Playing Movies'}/>);

    return (
        <section className={s.section}>
            <h1>Now Playing Movies</h1>
            <MoviesGrid movies={data?.results || []} columns={columns}/>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pagesCount={safeTotalPages}/>

        </section>
    )
};

