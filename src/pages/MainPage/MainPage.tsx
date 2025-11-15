import s from './MainPage.module.css'
import {
    NowPlayingMovies,
    PopularMovies,
    SearchMovies,
    TopRatedMovies,
    UpcomingMovies
} from "@/features/movies/ui/MainMoviesSection";


export const MainPage = () => {


    return (
        <div className={s.page}>
            <SearchMovies/>
            <PopularMovies/>
            <TopRatedMovies/>
            <UpcomingMovies/>
            <NowPlayingMovies/>
        </div>
    )
}
