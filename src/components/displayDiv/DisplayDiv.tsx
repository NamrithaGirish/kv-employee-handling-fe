import "./DisplayDiv.css"
interface empData{
    title:string,
    value:string
}
export const DisplayDiv = ({title,value}:empData)=>{
    return(
        <div className="emp-data-holder">
            <div className="emp-data-key">{title}</div>
            <div className="emp-data-value">{value}</div>
        </div>
    )
}