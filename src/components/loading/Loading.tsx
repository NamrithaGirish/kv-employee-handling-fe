import { OrbitProgress } from "react-loading-indicators"

export const LoadingScreen = ()=>{
    return(
        <div className="loading-icon-div">
        <OrbitProgress color={"blue"} size={"large"}/>

    </div>
    )
    
}