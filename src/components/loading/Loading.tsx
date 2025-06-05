import { OrbitProgress } from "react-loading-indicators";
//LAZY LODING ICON - NEED TO CORRECT POSITION OF LOADNG SCREEN
export const LoadingScreen = () => {
	return (
		<div className="loading-icon-div">
			<OrbitProgress color={"blue"} size={"large"} />
		</div>
	);
};
