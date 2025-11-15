import {CustomInput} from "@/common/components/CustomInput/CustomInput.tsx";
import s from './SearchMovies.module.css'
import {CustomButton} from "@/common/components/CustomButton/CustomButton.tsx";
import {useEffect, useState} from "react";
import {useGetPopularMoviesQuery} from "@/features/movies/api/tmdbApi.ts";
import {useNavigate} from "react-router-dom";


export const SearchMovies = () => {

    const [value, setValue] = useState('')
    const { data } = useGetPopularMoviesQuery();
    const [poster, setPoster] = useState<string|null>(null);
    const navigate = useNavigate()

    useEffect(()=>{

        if(data?.results?.length){

            const random = Math.floor(Math.random() * data.results.length);
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setPoster(`https://image.tmdb.org/t/p/original${data.results[random].backdrop_path}`);


        }


    },[data])

    const handleSearch = () => {
        if (value.trim()) {
            navigate(`/search?query=${encodeURIComponent(value)}`)
        }
    }


    return (
        <div
            className={s.section}
            style={{
                backgroundImage: poster ? `url(${poster})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className={s.overlay}>
                <h1>Welcome to TMDB</h1>
                <h2>Discover millions of movies, TV shows and people. Explore now</h2>
                <CustomInput
                    placeholder="Search your favorite movie"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <CustomButton title="search" disabled={!value} onClick={handleSearch}/>
            </div>

        </div>
    );
};

