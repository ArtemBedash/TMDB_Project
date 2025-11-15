import {FavoritesSection} from "@/features/movies/ui/FavoritesSection/FavoritesSection.tsx";
import s from './FavoritesPage.module.css'

export const FavoritesPage = () => {



    return (
        <div className={s.page}>
            <h1>My Favorite Movies</h1>
            <FavoritesSection/>
        </div>
    );
};

