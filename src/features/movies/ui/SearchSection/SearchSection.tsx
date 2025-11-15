import {CustomInput} from "@/common/components/CustomInput/CustomInput.tsx";
import {CustomButton} from "@/common/components/CustomButton/CustomButton.tsx";
import {useGetSearchMoviesQuery} from "@/features/movies/api/tmdbApi.ts";
import {useState} from "react";
import s from "@/features/movies/ui/SearchSection/SearchSection.module.css";
import {MoviesGrid} from "@/common/components/MoviesGrid/MoviesGrid.tsx";
import {Pagination} from "@/common/components/Pagination/Pagination.tsx";
import {useSearchParams} from "react-router-dom";

export const SearchSection = () => {


    const [searchParams] = useSearchParams();
    const initialQuery = searchParams.get("query") || "";

    const [value, setValue] = useState('');
    const [query, setQuery] = useState(initialQuery);
    const [currentPage,setCurrentPage] = useState(1)


    const {data,isLoading} = useGetSearchMoviesQuery({search: query,page:currentPage})
    const columns=5;
    const safeTotalPages = Math.min(data?.total_pages ?? 1, 500);


    const handleSearch = () => {
        setCurrentPage(1)
        setQuery(value.trim())
        setValue('')
    }

    if(isLoading) return <p>Loading...</p>

    return (
        <div className={s.wrapper}>
            <div className={s.searchHeader}>
            <h1>Search</h1>
            <CustomInput
                placeholder={'Search your favorite movie'}
                value={value}
                onChange={e => setValue(e.target.value)}/>
            <CustomButton title={'Search'} onClick={handleSearch} disabled={!value}/>
            </div>
            <div className={s.sectionCards}>
                {query&&!data?.results?.length  && !isLoading && <span className={s.noResults}>No Matches Found</span>}
                {data?.results?.length ? <MoviesGrid movies={data.results} columns={columns} /> : null}
            </div>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pagesCount={safeTotalPages}/>
        </div>
    );
};

