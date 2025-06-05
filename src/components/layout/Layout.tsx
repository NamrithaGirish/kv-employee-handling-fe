import { Navigate, Outlet } from "react-router-dom";
import { MainContent } from "../mainContent/MainContent";
import { Sidebar } from "../sidebar/Sidebar";

export const Layout = () => {
	const authenticated = localStorage.getItem("isLoggedIn");
	if (!(authenticated == "true")) return <Navigate to="/login" />;
	else
		return (
			<>
				<Sidebar />
				<MainContent>
					<Outlet />
				</MainContent>
			</>
		);
};
