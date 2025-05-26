// import { InputBox } from "../inputBox/InputBox"
import "./InputCombination.css"
export const InputCombination=({name,placeholder,type}:{name:string,placeholder:string,type:string})=>{
    return (<div className="form-input">
        <label >{placeholder}</label>
        <input type={type} id={name} name={name} placeholder={placeholder} />
   </div>)
}