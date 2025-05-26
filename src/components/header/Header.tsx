import "./Header.css"
export const Header = ({title}:{title:string})=>{
    return (
        <div className="header">
            {title}
        </div>
    )
}