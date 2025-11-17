import s from './CustomInput.module.css'

type Props = {
    value: string
    placeholder?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const CustomInput = ({placeholder,value,onChange}: Props) => {


    return (
        <div className={s.wrapper}>
            <input
                type={"search"}
                className={s.input}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};
