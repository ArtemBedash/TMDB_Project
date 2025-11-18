import {useGetFilteredMoviesQuery} from "@/features/movies/api/tmdbApi.ts";
import s from './Filter.module.css'
import {MoviesGrid} from "@/common/components/MoviesGrid/MoviesGrid.tsx";
import {useState} from "react";
import {Pagination} from "@/common/components/Pagination/Pagination";
import {Slider} from "@mui/material";
import {useDebounceValue} from "@/common/utils/useDebounceValue.ts";
import {MoviesSkeletons} from "@/features/movies/ui/MoviesSkeletons/MoviesSkeletons.tsx";

const genresAll =

    [
        {"id": 28, "name": "Action"},
        {"id": 12, "name": "Adventure"},
        {"id": 16, "name": "Animation"},
        {"id": 35, "name": "Comedy"},
        {"id": 80, "name": "Crime"},
        {"id": 99, "name": "Documentary"},
        {"id": 18, "name": "Drama"},
        {"id": 10751, "name": "Family"},
        {"id": 14, "name": "Fantasy"},
        {"id": 36, "name": "History"},
        {"id": 27, "name": "Horror"},
        {"id": 10402, "name": "Music"},
        {"id": 9648, "name": "Mystery"},
        {"id": 10749, "name": "Romance"},
        {"id": 878, "name": "Science Fiction"},
        {"id": 10770, "name": "TV Movie"},
        {"id": 53, "name": "Thriller"},
        {"id": 10752, "name": "War"},
        {"id": 37, "name": "Western"}
    ]


const Filter = () => {


    const [sortBy, setSortBy] = useState("popularity.desc");
    const [currentPage, setCurrentPage] = useState(1);
    const [rating, setRating] = useState([0, 10]);
    const debouncedRatingChange = useDebounceValue(rating, 600);
    const [genres, setGenres] = useState<number[]>([]);
    const MoviesCount = 8;


    const {data,isFetching} = useGetFilteredMoviesQuery({

        page: currentPage,
        sortBy: sortBy,
        ratingGte: debouncedRatingChange[0],
        ratingLte: debouncedRatingChange[1],
        genres: genres.join(",")
    })


    const safeTotalPages = Math.min(data?.total_pages ?? 1, 500);


    const handleChangeRating = (_event: Event, value: number[]) => {

        setRating(value)
    }

    const toggleGenre = (id: number) => {

        const isIncluded = genres.includes(id)

        setGenres(prevState => isIncluded ? prevState.filter(item => item !== id) : [...genres, id])

    }
// const handleReset{
//
//
//
//     }

    return (


        <div className={s.page}>

            <aside className={s.filters}>
                <h2>Filters</h2>
                <select className={s.selectNeon} value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="popularity.desc">Popularity ↓</option>
                    <option value="popularity.asc">Popularity ↑</option>
                    <option value="vote_average.desc">Rating ↓</option>
                    <option value="vote_average.asc">Rating ↑</option>
                    <option value="primary_release_date.desc">Release date ↓</option>
                    <option value="primary_release_date.asc">Release date ↑</option>
                </select>

                <Slider
                    getAriaLabel={() => 'Minimum distance'}
                    value={rating}
                    onChange={handleChangeRating}
                    min={0}
                    max={10}
                    color="secondary"
                    step={0.1}
                    valueLabelDisplay="auto"
                    disableSwap
                />

                <div>
                    {genresAll.map((g) => (
                        <button
                            key={g.id}
                            onClick={() => toggleGenre(g.id)}
                            className={`${s.tag} ${genres.includes(g.id) ? s.active : ''}`}
                        >{g.name}
                        </button>

                    ))}
                </div>

            </aside>



            <section className={s.results}>
                {isFetching && <MoviesSkeletons count={MoviesCount} columns={MoviesCount/2}/>}
                {!isFetching && <MoviesGrid movies={data?.results || []} columns={4}/>}
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pagesCount={safeTotalPages}/>

            </section>

        </div>
    );
};

export default Filter;