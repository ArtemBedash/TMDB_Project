import s from './App.module.css';
import {Header} from "@/common/components/Header/Header.tsx";
import {Routing} from "@/common/routing";
import {Footer} from "@/common/components/Footer/Footer.tsx";
import LinearProgress from "@mui/material/LinearProgress";
import {useGlobalLoading} from "@/common/utils/useGlobalLoading.ts";
import {ErrorSnackbar} from "@/common/components/common/components/ErrorSnackbar/ErrorSnackbar.tsx";


export const App = () => {

    const isGlobalLoading = useGlobalLoading()

    return (
        <div className={s.appWrapper}>
            <Header/>
            {isGlobalLoading && <LinearProgress color="secondary" style={{
                top: "80px",
                background: "red",
                width: "100%",
                position: "fixed",
                zIndex: 9999
            }}
            />}

            <main className={s.mainContent}>

                <Routing/>
            </main>
            <ErrorSnackbar />

            <Footer/>
        </div>
    );
}
