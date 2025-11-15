import {Link, NavLink} from 'react-router-dom'
import { useState, useEffect } from 'react'
import s from './Header.module.css'
import { Path } from '@/common/routing/Routing.tsx'
import logo from '@/common/assets/mainLogo.svg'
import darkIcon from '@/common/assets/icons/theme-day.png'
import lightIcon from '@/common/assets/icons/theme-night.png'



const navItems = [
    { to: Path.Main, label: 'Main' },
    { to: Path.Categories, label: 'Categories' },
    { to: Path.Favorites, label: 'Favorites' },
    { to: Path.Filter, label: 'Filter' },
    { to: Path.Search, label: 'Search' },
]

export const Header = () => {

    const [theme, setTheme] = useState<'dark' | 'light'>('dark')

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    const toggleTheme = () =>
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))

    return (
        <header className={s.container}>

            <Link to="/" className={s.logoLink}>
                <img src={logo} alt="Logo" className={s.logo} />
            </Link>

            <nav className={s.nav}>
                <ul className={s.list}>
                    {navItems.map(item => (
                        <li key={item.to}>
                            <NavLink
                                to={item.to}
                                className={({ isActive }) => `${s.link} ${isActive ? s.activeLink : ''}`}
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

            </nav>
            <button onClick={toggleTheme} className={s.themeBtn}>
                <img

                    src={theme === 'dark' ? lightIcon : darkIcon}
                    alt='theme toggle'
                    className={s.icon}
                />
            </button>
        </header>
    )
}
