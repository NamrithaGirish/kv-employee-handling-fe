import type React from "react";
import "./OptionsField.css";
import type { Department } from "../../api-service/department/types";
interface SelectFieldParams {
	label: string;
	options: string[] | Department[];
	classname: string;
	noDisabledField?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	value?: string | number;
}
export const OptionsField = ({
	label,
	options,
	classname,
	noDisabledField,
	onChange,
	value,
}: SelectFieldParams) => {
	return (
		<div className="form-options">
			<label>{label}</label>
			<select
				className={classname}
				onChange={onChange}
				defaultValue={value}
			>
				{!noDisabledField && (
					<option value={label} disabled>
						{label}
					</option>
				)}
				{options.map((option) => {
					return (
						<option
							value={
								typeof option === "string" ? option : option.id
							}
						>
							{typeof option === "string" ? option : option.name}
						</option>
					);
				})}
			</select>
		</div>
	);
};
