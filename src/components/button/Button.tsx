import './Button.css'
export const Button = ({text,classname,functionName}:{text:string,classname:string,functionName:()=>void}) =>{
    return(
        <button type="submit" className={classname} onClick={functionName}>{text}</button>
    )
}