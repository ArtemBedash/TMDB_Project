import type {Movie} from "@/features/movies/model/types.ts";
import s from './MoviesGrid.module.css'
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {addDelFav, selectFavItems} from "@/app/model/store/slices/favoritesSlice.ts";


type Props = {
    movies: Movie[]
    moviesCount?: number
    columns?: number

}


export const MoviesGrid = ({movies, moviesCount, columns}: Props) => {

    const dispatch = useDispatch()
    const favMovies = useSelector(selectFavItems)


    function getFavExist(id: number) {

        const isFavExist = favMovies.find(m => m.id === id)

        return !!isFavExist

    }


    return (

        <div className={s.main} style={{gridTemplateColumns: `repeat(${columns}, 1fr)`}}>
            {movies?.slice(0, moviesCount).map(m => (
                <Link to={`/movie/${m.id}`} key={m.id} className={s.cardLink}>
                    <div className={s.card}>
                        <span
                            className={
                                m.vote_average >= 8
                                    ? s.rating
                                    : m.vote_average >= 6
                                        ? s.ratingMiddle
                                        : s.ratingLow
                            }>
                            {m.vote_average.toFixed(1)}
                        </span>
                        <button
                            className={getFavExist(m.id) ? s.favActive : s.fav}
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch(addDelFav(m));
                            }}
                        >
                            <svg viewBox="0 0 24 24">
                                <path d="M12 21s-6-4.3-9-9C-1 6.5 3.5 2 7.5 3.2C9.1 3.7 10.4 5 11 6.6C11.6 5 12.9 3.7 14.5 3.2C18.5 2 23 6.5 21 12C18 16.7 12 21 12 21z"/>
                            </svg>
                        </button>
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

    );
};

