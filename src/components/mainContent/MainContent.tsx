import type React from "react";
import "./MainContent.css"
export const MainContent = ({children}:{children:React.ReactNode})=>{
    return(
        <div className="main-page">
            <div className="top-bar">   
            </div>
            {children}
        </div>
    )
}