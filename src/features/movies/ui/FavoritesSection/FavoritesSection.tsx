import {useSelector} from "react-redux";
import {selectFavItems} from "@/app/model/store/slices/favoritesSlice.ts";
import s from "@/features/movies/ui/MainMoviesSection/MainMoviesSection.module.css";
import {MoviesGrid} from "@/common/components/MoviesGrid/MoviesGrid.tsx";
import {useEffect, useState} from "react";
import {storage} from "@/common/utils/storage.ts";
import {MoviesSkeletons} from "@/features/movies/ui/MoviesSkeletons/MoviesSkeletons.tsx";


export const FavoritesSection = () => {

    const favorites = useSelector(selectFavItems)
    const [isLoading, setIsLoading] = useState(false)


    const countSkeletons = 5



    useEffect(() => {


        storage.set('favorites', favorites)
        setTimeout(() => {
            setIsLoading(true)
        }, 1000)

    }, [favorites]);

  if (!isLoading && favorites.length) return (<MoviesSkeletons count={countSkeletons} columns={countSkeletons}/>)

    return (

        <section className={s.section}>
            {favorites.length === 0 && <span>You haven't added any movies to favorites yet.</span>}
            <MoviesGrid movies={favorites}/>
        </section>
    );
};



