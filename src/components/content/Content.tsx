import { Button } from "../button/Button";
import { InputCombination } from "../inputCombination/InputCombination";
import { OptionsField } from "../optionsField/OptionsField";
import "./Content.css";

// NOT BEING USED NOW - TO PASS LIST OF FIELDS AND GENERATE THE FIELDS ACCORDINGLY
type inputFieldArray = {
	id_name: string;
	placeholder: string;
	type: string;
};
type optionsFieldArray = {
	label: string;
	classname: string;
	options: string[];
};
export const Content = ({
	inputFieldList,
	optionsFieldList,
}: {
	inputFieldList: inputFieldArray[];
	optionsFieldList: optionsFieldArray[];
}) => {
	return (
		<div className="content">
			{inputFieldList.map((field) => {
				return (
					<InputCombination
						type={field.type}
						name={field.id_name}
						placeholder={field.placeholder}
					/>
				);
			})}
			{optionsFieldList.map((field) => {
				return (
					<OptionsField
						label={field.label}
						classname={field.classname}
						options={field.options}
					/>
				);
			})}
			<Button
				text="Create"
				classname="create"
				onClickFunction={() => {
					console.log("Created");
				}}
			/>
			<Button
				text="Cancel"
				classname="cancel"
				onClickFunction={() => {
					console.log("Created");
				}}
			/>
		</div>
	);
};
