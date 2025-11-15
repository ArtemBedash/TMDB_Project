import type {Movie} from "@/features/movies/model/types.ts";
import s from './MoviesGrid.module.css'
import {Link} from "react-router-dom";


type Props = {
    movies: Movie[]
    quantity?:number
    columns?:number

}


export const MoviesGrid = ({movies,quantity,columns}: Props) => {



    return (

            <div className={s.main} style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
                {movies?.slice(0, quantity).map(m => (
                    <Link to={`/movie/${m.id}`} key={m.id} className={s.cardLink}>
                        <div className={s.card}>
                            <span className={s.rating}>{m.vote_average.toFixed(1)}</span>
<div className={s.posterWrapper}>
                            <img
                                className={s.poster}
                                src={m.poster_path?`https://image.tmdb.org/t/p/w500${m.poster_path}`:"/no_movie.png"}
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

