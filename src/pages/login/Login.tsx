
import React, { use, useEffect, useRef, useState } from "react";
import { Button } from "../../components/button/Button"
import { InputBox } from "../../components/inputBox/InputBox"
import "./Login.css"
// import login_image from "../../assets/kv-login.jpeg"
const print = ()=>{
    console.log("Hello");
}
// import { MouseTracker } from "../../hooks/MouseTrackingHook";
import { SetLocalStorage } from "../../hooks/LocalStorage";
import { Navigate, useNavigate } from "react-router-dom";
export const Login = ()=>{
    // const mouseTrack = MouseTracker();
    const [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [value,setValue] = useState("");
    let [clearButtonDisable,setclearButtonDisable] = useState(true);
    let navigate = useNavigate();

    const localStorageHook = SetLocalStorage("show-password");
    const authlocalStorageHook = SetLocalStorage("isLoggedIn");
    console.log("helooooooooooo")
    
    useEffect(()=>{
        if (authlocalStorageHook.value===true){
            navigate("/employee");
        }
    },[])
    const handleLogin=()=>{
        if (username=="hello" && password=="hello"){
            // localStorage.setItem("isLoggedIn","true");
            authlocalStorageHook.setter(true);
            setValue("")
            navigate("/employee");
        }
        else{
            // localStorage.setItem("isLoggedIn","false");
            authlocalStorageHook.setter(false);
            setValue("Invalid Username or Password")
        }
    }
    const handleLogout=()=>{
        authlocalStorageHook.setter(false);

    }
    // const [passwordView, setPasswordView] = useState()
    // useEffect(()=>{
    //     // if (passwordView) setPasswordView(true);
    //     // else setPasswordView(false)
    //     localStorage.setItem('show-password',passwordView.toString())
    //     // console.log(passwordView);

    // },[passwordView])
    const usernameRef = useRef<HTMLInputElement>(null);
    useEffect(()=>{
        // console.log(username);
        if (username.length>0){
            setclearButtonDisable(false);
            // value=
        }

        // return()=>{
        //     console.log("in return")
        //     setValue("")
        // }

    },[username]

    )
    useEffect(()=>{
        if (usernameRef.current){
            console.log(usernameRef);
            usernameRef.current.focus();
        }
        return()=>{
            console.log("in ref return")
            // setValue("")
        }

    },[username])
    // const displayUsername = (e:React.ChangeEvent<HTMLInputElement>)=>{
    //     setUsername(e.target.value)
    // }
    // if (authlocalStorageHook.value===true){
    //         return (<Navigate to="/employee" />);
    // }
    // else
    return (
        <div className="row">
            <div className="column1">
                {/* <image>
                    login_image
                </image> */}
                    <img src="./src/assets/kv-login.jpeg" alt="Login Image" className="login_image" />
            </div>
            <div className="column2">
                <div className="login-box">
                    <img src="./src/assets/kv-logo.png" alt="Keyvalue Logo" className="logo" />
                          <form className="form">
                            <div className="username-clear-holder">
                            <InputBox value={username} text={"Username"} classname="username" onchange={(e:React.ChangeEvent<HTMLInputElement>)=>setUsername(e.target.value)} substring={value} reference={usernameRef} endAdornment={<Button classname="clear" type="button" text="Clear" functionName={()=>{setUsername("");setclearButtonDisable(true)} } disabled={clearButtonDisable}/>} />
                            </div>
                            {/* <p>
                               x= {mouseTrack.x} y={mouseTrack.y}
                            </p> */}
                            <div className="username-clear-holder">
                            <InputBox text="Password" classname="textinput" substring={value} onchange={(e:React.ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)} inputType={localStorageHook.value? "text" :"password"}/>
                            </div>
                            <div className="show-password">
                                <InputBox value={password} text="checkbox" classname="password-checkbox" inputType="checkbox" onchange={(e:React.ChangeEvent<HTMLInputElement>)=>localStorageHook.setter(e.target.checked)} checked={localStorageHook.value}/>
                                Show password
                            </div>
                            {/* {password && <p>
                                The password is {password}
                            </p>} */}
                            <Button type={"submit"} text="Log In" classname="login" functionName={handleLogin}  />
                           
                          </form>
                </div>
            </div>
        </div>
    )
}