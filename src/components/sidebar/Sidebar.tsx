import "./Sidebar.css";
import kv_logo from "../../assets/kv-logo.png";
import createEmployeeImage from "../../assets/icon.svg";
import { SetLocalStorage } from "../../hooks/LocalStorage";
import { Button } from "../button/Button";
import { Link, useNavigate } from "react-router-dom";
export const Sidebar = () => {
	const navigate = useNavigate();
	const authlocalStorageHook = SetLocalStorage("isLoggedIn");
	// const userId = SetLocalStorage("UserId");
	const handleLogout = () => {
		authlocalStorageHook.setter(false);
		console.log("move to login");
		console.log(authlocalStorageHook.setter(false));
		navigate("/login");
	};
	return (
		<div className="side-bar">
			<header className="logo">
				<img id="kv-logo-img" src={kv_logo} />
			</header>
			<nav className="nav-bar">
				<ul className="emp-list">
					<li>
						<img src={createEmployeeImage} />

						<Button
							text="Profile Page"
							classname="logout"
							type={"button"}
							functionName={() => {
								navigate(
									`/employee/${localStorage.getItem(
										"UserId"
									)}`
								);
							}}
						/>
					</li>
					<li>
						<img src={createEmployeeImage} />
						{/* <Link to = "/employee" className="sidebar-link"> 
                        Dashboard 
                    </Link> */}

						<Button
							text="Employee List"
							classname="logout"
							type={"button"}
							functionName={() => {
								navigate("/employee");
							}}
						/>
					</li>
					<li>
						<img src={createEmployeeImage} />

						<Button
							text="Create Employee"
							classname="logout"
							type={"button"}
							functionName={() => {
								navigate("/employee/create");
							}}
						/>
					</li>
					<li>
						<img src={createEmployeeImage} />

						<Button
							text="Log Out"
							classname="logout"
							type={"button"}
							functionName={handleLogout}
						/>
					</li>
				</ul>
			</nav>
		</div>
	);
};
