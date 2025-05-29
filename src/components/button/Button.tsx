import './Button.css'
export const Button = ({text,classname,onSubmit,functionName,type,disabled}:{text:string,classname:string,functionName?:()=>void,type?:any,disabled?:boolean, onSubmit?:()=>void}) =>{
    return(
        <button type={type || "submit"} className={classname} onClick={functionName} disabled={disabled} onSubmit={onSubmit}>{text}</button>
    )
}