import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../components/button/Button";
import { InputBox } from "../../components/inputBox/InputBox";
import "./Login.css";
import loginImage from "../../assets/kv-login.jpeg";
import kvLogo from "../../assets/kv-logo.png";
import { SetLocalStorage } from "../../hooks/LocalStorage";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../api-service/auth/login.api";
export const Login = () => {
	const [login, { isLoading }] = useLoginMutation();
	// const mouseTrack = MouseTracker();
	const [username, setUsername] = useState("");
	let [password, setPassword] = useState("");
	let [usernameValue, setUsernameValue] = useState("");
	let [passwordValue, setPasswordValue] = useState("");
	let [clearButtonDisable, setclearButtonDisable] = useState(true);
	let navigate = useNavigate();

	const localStorageHook = SetLocalStorage("show-password");
	const authlocalStorageHook = SetLocalStorage("isLoggedIn");

	useEffect(() => {
		if (authlocalStorageHook.value === true) {
			navigate("/employee");
		}
	}, []);
	const handleLogin = async () => {
		console.log("username", username, "password", password);
		await login({ email: username, password: password })
			.unwrap()
			.then((response) => {
				localStorage.setItem("token", response.accessToken);
				console.log("Access token : ", response.accessToken);
				authlocalStorageHook.setter(true);
				const userId = JSON.parse(
					atob(response.accessToken.split(".")[1])
				);
				console.log("userId", userId.id);
				localStorage.setItem("UserId", userId.id);
				navigate(`/employee`);
			})
			.catch((error) => {
				console.log("Login Error : ", error);
				const errMsg = error.data.error || error.data.message;
				authlocalStorageHook.setter(false);
				setPasswordValue(errMsg);
			});
	};
	const usernameRef = useRef<HTMLInputElement>(null);
	useEffect(() => {
		// console.log(username);
		if (username.length > 0) {
			setclearButtonDisable(false);
		} else {
			setclearButtonDisable(true);
		}

		if (username.length > 20) {
			setUsernameValue("Username too lengthy");
		}
	}, [username]);
	useEffect(() => {
		if (usernameRef.current) {
			console.log("Username Reference : ", usernameRef);
			usernameRef.current.focus();
		}
		return () => {
			console.log("Returning from reference for username input");
		};
	}, [username]);
	return (
		<div className="row">
			<div className="column1">
				<img
					src={loginImage}
					alt="Login Image"
					className="login_image"
				/>
			</div>
			<div className="column2">
				<div className="login-box">
					<img src={kvLogo} alt="Keyvalue Logo" className="logo" />
					<div className="form">
						<div className="username-clear-holder">
							<InputBox
								value={username}
								text={"Username"}
								classname="username"
								onchange={(
									e: React.ChangeEvent<HTMLInputElement>
								) => setUsername(e.target.value)}
								substring={usernameValue}
								reference={usernameRef}
								endAdornment={
									<Button
										classname="clear"
										type="button"
										text="Clear"
										onClickFunction={() => {
											setUsername("");
											setclearButtonDisable(true);
										}}
										disabled={clearButtonDisable}
									/>
								}
							/>
						</div>
						{/* <label>{value}</label> */}
						{/* <p>
                               x= {mouseTrack.x} y={mouseTrack.y}
                            </p> */}
						<div className="username-clear-holder">
							<InputBox
								text="Password"
								classname="textinput"
								substring={passwordValue}
								onchange={(
									e: React.ChangeEvent<HTMLInputElement>
								) => setPassword(e.target.value)}
								inputType={
									localStorageHook.value ? "text" : "password"
								}
							/>
						</div>
						<div className="show-password">
							<InputBox
								value={password}
								text="checkbox"
								classname="password-checkbox"
								inputType="checkbox"
								onchange={(
									e: React.ChangeEvent<HTMLInputElement>
								) => localStorageHook.setter(e.target.checked)}
								checked={localStorageHook.value}
							/>
							Show password
						</div>
						<Button
							type={"submit"}
							text="Log In"
							classname="login"
							disabled={isLoading}
							onClickFunction={handleLogin}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
