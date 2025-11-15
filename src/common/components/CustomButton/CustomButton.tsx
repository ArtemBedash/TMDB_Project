import s from './CustomButton.module.css'


type Props = {


    title: string
    onClick?: () => void
    disabled:boolean

}



export const CustomButton = ({title,onClick,disabled}:Props) => {
    return (
        <div>

            <button className={s.button} onClick={onClick} disabled={disabled}>{title}</button>

        </div>
    );
};

