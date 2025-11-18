import {useGetMovieCreditsQuery} from "@/features/movies/api/tmdbApi.ts";
import {useParams} from "react-router-dom";
import s from './CastInfo.module.css'
import {MoviesSkeletons} from "@/features/movies/ui/MoviesSkeletons/MoviesSkeletons.tsx";

export const CastInfo = () => {

    const {id} = useParams()


    const {data,isLoading} = useGetMovieCreditsQuery(id!)

    const castCount=6

    if (isLoading) return (<MoviesSkeletons count={castCount} columns={castCount} title={'Top Cast'}/>);


    return (
        <div className={s.castContainer}>
            {data?.cast.length !== 0 ? <h3>Top Cast</h3> : <h3>No Info about Top Cast</h3>}
        <div className={s.castGrid}>
            {data?.cast.slice(0, 6).map(actor => (
                <div className={s.castCard} key={actor.id}>
                    <img
                        className={s.castPhoto}
                        src={actor.profile_path?`https://image.tmdb.org/t/p/w200${actor.profile_path}`:'/no_actor.png'}
                        alt={actor.name}
                    />
                    <h2 className={s.castName}>{actor.name}</h2>
                    <small className={s.castRole}>{actor.character}</small>
                </div>
            ))}
        </div>
        </div>

    );
};

