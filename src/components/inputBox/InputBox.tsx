import type { Ref } from "react";
import "./InputBox.css";
import type React from "react";

interface InputBoxParams {
	checked?: boolean;
	name?: string;
	text: string;
	classname: string;
	onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	substring?: string;
	reference?: Ref<HTMLInputElement | null>;
	inputType?: string;
	endAdornment?: React.ReactNode;
	value?: string;
	defaultValue?: string;
	disabled?: boolean;
}
export const InputBox = ({
	text,
	classname,
	onchange,
	substring,
	reference,
	inputType,
	endAdornment,
	value,
	checked,
	defaultValue,
	disabled,
}: InputBoxParams) => {
	return (
		<div className="input-box">
			{/* <label htmlFor={text}>{text}</label> */}
			<input
				type={inputType || "text"}
				placeholder={text}
				className={classname}
				onChange={onchange}
				ref={reference}
				value={value}
				name={text}
				checked={checked}
				defaultValue={defaultValue}
				id={text}
				disabled={disabled}
			/>
			{/* <label>{text}</label> */}
			{endAdornment}
			{/* <span>{text}</span> */}
			{substring && (
				<label className={`subscript-${classname}`}>{substring}</label>
			)}
		</div>
	);
};
