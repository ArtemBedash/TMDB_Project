import s from './App.module.css';
import {Header} from "@/common/components/Header/Header.tsx";
import {Routing} from "@/common/routing";
import {Footer} from "@/common/components/Footer/Footer.tsx";

export const App = () => {
    return (
        <div className={s.appWrapper}>
            <Header />
            <main className={s.mainContent}>
                <Routing />
            </main>
            <Footer />
        </div>
    );
}
