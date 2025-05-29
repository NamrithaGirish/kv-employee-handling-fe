import "./Header.css"
export const Header = ({title,children}:{title:string,children?:React.ReactNode})=>{
    return (
        <div className="header-container">
            <div className="header">
                {title}
            </div>
            {children}
        </div>
        
    )
}