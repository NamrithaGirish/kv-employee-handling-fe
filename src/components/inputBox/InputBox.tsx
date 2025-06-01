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
	name,
	checked,
	defaultValue,
}: InputBoxParams) => {
	return (
		<div className="input-box">
			<input
				type={inputType || "text"}
				placeholder={text}
				className={classname}
				onChange={onchange}
				ref={reference}
				value={value}
				name={name}
				checked={checked}
				defaultValue={defaultValue}
			/>
			{/* <label>{text}</label> */}
			{endAdornment}
			{/* <span>{text}</span> */}
			{substring && (
				<div className={`subscript-${classname}`}>{substring}</div>
			)}
		</div>
	);
};
