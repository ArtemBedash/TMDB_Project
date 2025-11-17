import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import s from './ErrorSnackbar.module.css'
import Slide, { type SlideProps } from "@mui/material/Slide";
import {useDispatch, useSelector} from "react-redux";
import {selectAppError, setAppError} from "@/app/model/store/slices/appSlice.ts";



export const ErrorSnackbar = () => {

    const error = useSelector(selectAppError);
    const dispatch = useDispatch()

    console.log(error)
    function SlideRight(props:SlideProps) {
        return <Slide {...props} direction="left" />;

    }

    const handleClose = () => dispatch(setAppError(null));


    return (
        <Snackbar
            open={!!error}
            autoHideDuration={3000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            slots={{ transition: SlideRight }}
            className={s.snackbarOffset}



        >
            <Alert
                onClose={handleClose}
                severity="error"
                variant="filled"
                sx={{ width: '100%'}}
                className={s.snackbarPaper}

            >{error}</Alert>
        </Snackbar>
    )
}