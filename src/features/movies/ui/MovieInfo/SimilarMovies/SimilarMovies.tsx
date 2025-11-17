import {Link, useParams} from "react-router-dom";
import {useGetSimilarMoviesQuery} from "@/features/movies/api/tmdbApi.ts";
import s from './SimilarMovies.module.css';
import {MoviesSkeletons} from "@/features/movies/ui/MoviesSkeletons/MoviesSkeletons.tsx";
import {handleSchemaError} from "@/common/utils/handleSchemaError.ts";

export const SimilarMovies = () => {

    const {id} = useParams()
    const {data,isLoading,error} = useGetSimilarMoviesQuery(id!)
    const moviesCount = 6
    handleSchemaError(error)

    if (isLoading) return (<MoviesSkeletons count={moviesCount} columns={moviesCount} title={'Similar Movies'}/>);



    return (
        <div className={s.similarContainer}>
            {data?.results.length !== 0 ? <h3>Similar Movies</h3> : <h3>No similar movies</h3>}
            <div className={s.main}>
                {data?.results.slice(0, moviesCount).map(m => (
                    <Link to={`/movie/${m.id}`} key={m.id} className={s.cardLink}>
                        <div className={s.card}>
                            <span className={s.rating}>{m.vote_average.toFixed(1)}</span>
                            <div className={s.posterWrapper}>
                                <img
                                    className={s.poster}
                                    src={m.poster_path ? `https://image.tmdb.org/t/p/w500${m.poster_path}` : "/no_movie.png"}
                                    alt={m.title}
                                />
                            </div>
                            <h2 className={s.title}>{m.title}</h2>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    );
};

