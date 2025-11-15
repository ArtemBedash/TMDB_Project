import s from "./NavBar.module.css";
import {NavLink} from "react-router-dom";




const navItems = [
    { to: 'popular', label: 'Popular' },
    { to: 'top_rated', label: 'Top Rated' },
    { to: 'upcoming', label: 'Upcoming' },
    { to: 'now_playing', label: 'Now Playing' },
];



export const NavBar = () => {
    return (

        <nav className={s.nav}>
            <ul className={s.list}>
                {navItems.map(item => (
                    <li key={item.to} className={s.item}>
                        <NavLink
                            to={item.to}
                            className={({isActive}) =>
                                `${s.link} ${isActive ? s.activeLink : ""}`}
                        >
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

