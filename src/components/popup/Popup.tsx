
import "./Popup.css";
import { Button } from "../button/Button";

interface PopupParams {
	id: number;
	heading: string;
	text: string;
	yesFnCall: () => void;
	noFnCall: () => void;
}
export const PopupComponent = ({
	id,
	heading,
	text,
	yesFnCall,
	noFnCall,
}: PopupParams) => {
	console.log(id);
	return (
		<>
			<div className="popup-container">
				<Button
					type={"button"}
					text="X"
					classname="popup-close"
					onClickFunction={noFnCall}
				/>

				<h1 className="popup-heading">{heading}</h1>
				<p className="popup-text">{text}</p>
				<div className="popup-button-holder">
					<Button
						type="button"
						text="Yes"
						classname="create"
						onClickFunction={yesFnCall}
					/>
					<Button
						type="button"
						text="No"
						classname="cancel"
						onClickFunction={noFnCall}
					/>
				</div>
			</div>
		</>
	);
};
