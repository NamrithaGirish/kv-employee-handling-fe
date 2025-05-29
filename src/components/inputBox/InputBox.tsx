import type { Ref } from "react"
import "./InputBox.css"
import type React from "react"
export const InputBox = ({text,classname,onchange,substring,reference, inputType,endAdornment,value,name,checked}:{checked?:boolean, name?:string,text:string,classname:string,onchange?:any,substring?:string, reference?:Ref<HTMLInputElement|null>, inputType?:string,endAdornment?:React.ReactNode, value?:string}) =>{
    return(
        <div className="input-box">
            <input type={inputType || 'text'} placeholder={text} className={classname} onChange={onchange} ref={reference} defaultValue={value} name={name} checked={checked}/>
            {/* <label>{text}</label> */}
            {endAdornment}
            {/* <span>{text}</span> */}
            {substring && <div className={`subscript-${classname}`}>
                {substring}
            
            </div>
            }
        </div>
            
    )
}