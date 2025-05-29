import { useEffect, useState } from "react"

export const SetLocalStorage = (key:string)=>{
    
    const [passwordView,setPasswordView] = useState("true"===localStorage.getItem(key)?true:false);
    // console.log("In setLocal");
    useEffect(()=>{
    // console.log("In setLocal use effect");

        localStorage.setItem(key,passwordView.toString());
    },[passwordView])

    return {
        "value":passwordView,
        "setter":setPasswordView
    }
}