import {useGetMovieByIdQuery} from "@/features/movies/api/tmdbApi.ts";
import {useNavigate, useParams} from "react-router-dom";
import s from './MovieInfo.module.css'
import {CastInfo} from "@/features/movies/ui/MovieInfo/CastInfo/CastInfo.tsx";
import {SimilarMovies} from "@/features/movies/ui/MovieInfo/SimilarMovies/SimilarMovies.tsx";
import {CustomButton} from "@/common/components/CustomButton/CustomButton.tsx";

export const MovieInfo = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const {data} = useGetMovieByIdQuery(id!)


    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <img className={s.poster}
                     src={data?.poster_path ? `https://image.tmdb.org/t/p/w500${data?.poster_path}` : '/no_movie.png'}/>
                <div className={s.info}>
                    <h1 className={s.title}>{data?.original_title}</h1>
                    <span className={s.rating}>Rating: {data?.vote_average.toFixed(1)}</span>
                    <p className={s.overview}>{data?.overview}</p>
                    <dl className={s.details}>
                        <dt>Release Date:</dt>
                        <dd>{data?.release_date}</dd>

                        <dt>Runtime:</dt>
                        <dd>{data?.runtime}</dd>

                        <dt>Genres:</dt>
                        <dd>{data?.genres.map(genre => genre.name).join(", ")}</dd>
                        <dt>Budget:</dt>
                        <dd>{`${data?.budget}$`}</dd>
                    </dl>
                </div>
             <CustomButton title={"Back"} onClick={()=>navigate(-1)}/>
            </div>
                <CastInfo/>
                <SimilarMovies/>
        </div>

    );
};

