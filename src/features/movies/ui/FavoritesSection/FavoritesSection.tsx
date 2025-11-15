import {useSelector} from "react-redux";
import {selectFavItems} from "@/app/store/slices/favoritesSlice.ts";
import s from "@/features/movies/ui/MainMoviesSection/MainMoviesSection.module.css";
import {MoviesGrid} from "@/common/components/MoviesGrid/MoviesGrid.tsx";
import {useEffect} from "react";
import {storage} from "@/common/utils/storage.ts";


export const FavoritesSection = () => {

    const favorites = useSelector(selectFavItems)

    useEffect(() => {


        storage.set('favorites', favorites)

    }, [favorites]);

    return (

        <section className={s.section}>
            {favorites.length === 0 && <span>You haven't added any movies to favorites yet.</span>}
            <MoviesGrid movies={favorites}/>
        </section>
    );
};



