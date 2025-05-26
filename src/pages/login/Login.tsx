
import { Button } from "../../components/button/Button"
import { InputBox } from "../../components/inputBox/InputBox"
import "./Login.css"
// import login_image from "../../assets/kv-login.jpeg"
const print = ()=>{
    console.log("Hello");
}
export const Login = ()=>{
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
                            <InputBox text={"Username"} classname="username" />
                            <InputBox text="Password" classname="textinput"/>
                            <Button text="Log In" classname="login" functionName={print} />
                          </form>
                </div>
            </div>
        </div>
    )
}