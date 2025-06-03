import React, { useEffect, useRef } from "react";
import { Button } from "../../components/button/Button";
import { InputBox } from "../../components/inputBox/InputBox";
import "./Login.css";
const print = () => {
	console.log("Hello");
};
export const UncontrolledLogin = () => {
	const usernameRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const clearButtonRef = useRef<HTMLButtonElement>(null);
	// const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
	// 	event.preventDefault();
	// 	const form = event.currentTarget;
	// 	const formdata = new FormData(form);
	// 	const username = formdata.get("username") as string;
	// 	const password = formdata.get("password") as string;
	// 	console.log(username, password);
	// };
	const handleRefLogin = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(usernameRef.current?.value);
	};
	const clearUsername = () => {
		console.log("hello");
		if (!usernameRef.current) return;
		usernameRef.current.value = "";
		clearButtonRef.current
			? (clearButtonRef.current.disabled = true)
			: false;
	};
	const updateClearButton = (value: string) => {
		if (!clearButtonRef.current) return;
		if (value.length > 0) {
			clearButtonRef.current.disabled = false;
		}
		if (value.length <= 0) {
			clearButtonRef.current.disabled = true;
		}
		console.log(clearButtonRef.current.onclick);
		clearButtonRef.current.onclick = clearUsername;
		console.log(clearButtonRef.current.onclick);
	};
	const clearPassword = () => {
		if (!passwordRef.current) return;
		passwordRef.current.value = "";
	};
	useEffect(() => {
		if (usernameRef.current) {
			console.log(usernameRef);
			usernameRef.current.focus();
		}
		return () => {
			console.log("in ref return");
		};
	}, []);

	return (
		<div className="row">
			<div className="column1">
				<img
					src="./src/assets/kv-login.jpeg"
					alt="Login Image"
					className="login_image"
				/>
			</div>
			<div className="column2">
				<div className="login-box">
					<img
						src="./src/assets/kv-logo.png"
						alt="Keyvalue Logo"
						className="logo"
					/>
					<form className="form" onSubmit={handleRefLogin}>
						<InputBox
							text={"Username"}
							classname="username"
							onchange={(
								e: React.ChangeEvent<HTMLInputElement>
							) => updateClearButton(e.target.value)}
							reference={usernameRef}
							name="username"
							endAdornment={
								<button
									ref={clearButtonRef}
									disabled={true}
									className="clear"
									type={"button"}
									onClick={clearUsername}
								>
									Clear
								</button>
							}
						/>
						<InputBox
							text="Password"
							classname="textinput"
							reference={passwordRef}
							name="password"
							endAdornment={
								<Button
									text="clear"
									classname="clear"
									type={"button"}
									functionName={clearPassword}
								/>
							}
						/>
						<Button
							text="Log In"
							classname="login"
							functionName={print}
						/>
					</form>
				</div>
			</div>
		</div>
	);
};
