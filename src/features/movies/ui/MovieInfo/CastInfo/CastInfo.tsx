import {useGetMovieCreditsQuery} from "@/features/movies/api/tmdbApi.ts";
import {useParams} from "react-router-dom";
import s from './CastInfo.module.css'

export const CastInfo = () => {

    const {id} = useParams()


    const {data} = useGetMovieCreditsQuery(id!)

    return (

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

    );
};

