import s from './PageNotFound.module.css'
import {Link} from "react-router-dom";

export const PageNotFound = () => {
    return (
        <div className={s.wrapper}>
            <h1 className={s.title}>404</h1>
            <h2 className={s.subtitle}>page not found</h2>
            <div className={s.linkWrapper}>
            <Link to="/" className={s.link}>⬅ Вернуться на главную</Link>
            </div>
        </div>

    )
}