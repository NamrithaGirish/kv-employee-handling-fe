import "./InputBox.css"
export const InputBox = ({text,classname}:{text:string,classname:string}) =>{
    return(
            <input type="text" placeholder={text} className={classname} />
            
    )
}