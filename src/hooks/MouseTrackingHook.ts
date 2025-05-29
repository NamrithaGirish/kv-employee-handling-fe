import { useEffect, useState } from "react";
export const MouseTracker = ()=>{
    const [mousePosition, setMousePosition] = useState({
        x:0,
        y:0
    })
    useEffect(()=>{
        window.addEventListener('mousemove',(event)=>{
        setMousePosition({x:event.clientX,y:event.clientY})
    })
        console.log("inside useeffect")
         return ()=>{
            window.removeEventListener('mousemove',()=>{});
        console.log("inside useeffect return")

        }
    },[]);
    return mousePosition;
}
