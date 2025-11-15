import {NavBar} from "@/common/components/NavBar/NavBar.tsx";
import {Outlet} from "react-router-dom";
import s from './CategoriesPage.module.css'

export const CategoriesPage = () => {
    return (
        <div className={s.page}>
            <h1>Categories Page</h1>
            <NavBar/>
            <Outlet/>

        </div>
    );
};

