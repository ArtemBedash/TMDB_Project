import {useGetNowPlayingMoviesQuery} from "@/features/movies/api/tmdbApi.ts";
import {MoviesGrid} from "@/common/components/MoviesGrid/MoviesGrid.tsx";
import s from "../CategoriesMoviesSection.module.css"
import {Pagination} from "@/common/components/Pagination/Pagination.tsx";
import {useState} from "react";
import {MoviesSkeletons} from "@/features/movies/ui/MoviesSkeletons/MoviesSkeletons.tsx";

export const NowPlayingMoviesFull = () => {
    const [currentPage, setCurrentPage] = useState(1)

    const {data, isLoading} = useGetNowPlayingMoviesQuery(currentPage)
    const safeTotalPages = Math.min(data?.total_pages ?? 1, 500);
    const columns = 5

    if (isLoading)
        return (
            <section className={s.section}>
                <h1>Now Playing Movies</h1>

                <div className={s.main} style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
                    <MoviesSkeletons count={columns * 2} />
                </div>

            </section>
        );

    return (
        <section className={s.section}>
            <h1>Now Playing Movies</h1>
            <MoviesGrid movies={data?.results || []} columns={columns}/>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pagesCount={safeTotalPages}/>

        </section>
    )
};

