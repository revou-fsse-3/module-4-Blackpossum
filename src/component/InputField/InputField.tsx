import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const InputField:React.FC<InputProps> = (props:InputProps) => {
    return (
        <input type="text" {...props}/>
    )
}

export default InputField;