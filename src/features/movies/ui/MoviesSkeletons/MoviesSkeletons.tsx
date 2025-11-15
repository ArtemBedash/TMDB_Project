
import s from './MoviesSkeletons.module.css'

type Props = { count: number }


export const MoviesSkeletons = ({ count }:Props) => {

    return (
        <>
            {Array.from({ length: count }).map((_, i) => (
                <div key={i} className={s.skeletonCard} />
            ))}
        </>
    );
};
