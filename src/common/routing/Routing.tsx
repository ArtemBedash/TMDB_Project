import {Navigate, Route, Routes} from "react-router-dom";
import {MainPage} from "@/pages/MainPage/MainPage.tsx";
import {CategoriesPage} from "@/pages/CategoriesPage/CategoriesPage.tsx";
import {FavoritesPage} from "@/pages/FavoritesPage/FavoritesPage.tsx";
import {FilterPage} from "@/pages/FilterPage/FilterPage.tsx";
import {SearchPage} from "@/pages/SearchPage/SearchPage.tsx";
import {PageNotFound} from "@/common/components/PageNotFound/PageNotFound.tsx";
import {
    NowPlayingMoviesFull,
    PopularMoviesFull,
    TopRatedMoviesFull,
    UpcomingMoviesFull
} from "@/features/movies/ui/CategoriesMoviesSection";
import {MovieInfo} from "@/features/movies/ui/MovieInfo/MovieInfo.tsx";


export const Path = {
    Main: '/',
    Categories: '/categories',
    Favorites: '/favorites',
    Filter: '/filter',
    Search: '/search',
    NotFound: '*',

} as const

export const Routing = () => (


    <Routes>
        <Route path={Path.Main} element={<MainPage/>}/>
        <Route path={Path.Categories} element={<CategoriesPage/>}>
            <Route path='' element={<Navigate to="popular" replace/>}/>
            <Route path='popular' element={<PopularMoviesFull/>}/>
            <Route path='top_rated' element={<TopRatedMoviesFull/>}/>
            <Route path='upcoming' element={<UpcomingMoviesFull/>}/>
            <Route path='now_playing' element={<NowPlayingMoviesFull/>}/>
        </Route>
        <Route path={Path.Favorites} element={<FavoritesPage/>}/>
        <Route path={Path.Filter} element={<FilterPage/>}/>
        <Route path={Path.Search} element={<SearchPage/>}/>
        <Route path={Path.NotFound} element={<PageNotFound/>}/>
        <Route path="movie/:id" element={<MovieInfo />} />


    </Routes>

)
