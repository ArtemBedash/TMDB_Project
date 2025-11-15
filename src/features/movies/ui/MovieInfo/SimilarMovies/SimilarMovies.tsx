import {Link, useParams} from "react-router-dom";
import {useGetSimilarMoviesQuery} from "@/features/movies/api/tmdbApi.ts";
import s from "@/features/movies/ui/MoviesGrid/MoviesGrid.module.css";

export const SimilarMovies = () => {

    const {id} = useParams()
    const {data} = useGetSimilarMoviesQuery(id!)
    const quantityMovies = 6


    return (
        <div className={s.main}>
            {data?.results.slice(0, quantityMovies).map(m => (
                <Link to={`/movie/${m.id}`} key={m.id} className={s.cardLink}>
                    <div className={s.card}>
                        <span className={s.rating}>{m.vote_average.toFixed(1)}</span>
                        <div className={s.posterWrapper}>
                            <img
                                className={s.poster}
                                src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                                alt={m.title}
                            />
                        </div>
                        <h2 className={s.title}>{m.title}</h2>
                    </div>
                </Link>
            ))}
        </div>
    );
};

