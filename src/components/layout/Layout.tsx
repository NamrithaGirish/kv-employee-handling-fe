import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { MainContent } from "../mainContent/MainContent"
import { Sidebar } from "../sidebar/Sidebar"
import { Login } from "../../pages/login/Login";
import { useEffect } from "react";

export const Layout = ()=>{
    const navigate = useNavigate();
    const authenticated = localStorage.getItem("isLoggedIn");
    if (!(authenticated=="true")) return(<Navigate to="/login" />);
    // useEffect(()=>{
    // if (!(authenticated=="true")) navigate("/login");
        
    // },[])
    else
    return(
                <>
                <Sidebar />
                <MainContent>
                    <Outlet />
                </MainContent>
                </>
            )
    // const isLoggedIn= ()=>{
    //     console.log(authenticated);
    //     return "true"===authenticated;
    //     }
    // useEffect(()=>{
    
        // const authenticated = localStorage.getItem("isLoggedIn");
        // if ("true"!==authenticated){
        //     <Navigate to="/login" />;}
        // else{
            
        // }
        
    // },[])
    
    
}