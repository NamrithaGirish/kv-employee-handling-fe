import { InputBox } from "../inputBox/InputBox";
import "./InputCombination.css";
interface InputParams {
	name: string;
	placeholder: string;
	type: string;
	disabled?: boolean;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const InputCombination = ({
	name,
	placeholder,
	type,
	disabled,
	value,
	onChange,
}: InputParams) => {
	return (
		<div className="form-input">
			<label>{placeholder}</label>
			<InputBox
				inputType={type}
				name={name}
				text={placeholder}
				disabled={disabled}
				defaultValue={value}
				onchange={onChange}
				classname="input-box"
			/>
			{/* <input
				type={type}
				id={name}
				name={name}
				placeholder={placeholder}
				disabled={disabled}
				defaultValue={value}
				onChange={onChange}
			/> */}
			{/* <InputBox
				inputType={type}
				name={name}
				text={placeholder}
				disabled={disabled}
				defaultValue={value}
				onchange={onChange}
				classname="input-box"
			/> */}
		</div>
	);
};
