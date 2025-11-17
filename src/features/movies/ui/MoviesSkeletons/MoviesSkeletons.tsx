import s from './MoviesSkeletons.module.css'

type Props = {

    count: number
    columns?: number
    title?: string
}


export const MoviesSkeletons = ({count,columns,title}:Props) => {

    return (


        <section className={s.section}>
            <h1>{title}</h1>

            <div className={s.main} style={{gridTemplateColumns: `repeat(${columns}, 1fr)`}}>
                {Array.from({length: count}).map((_, i) => (
                    <div key={i} className={s.skeletonCard}/>
                ))}

            </div>

        </section>


    );
};
