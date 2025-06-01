// import { format } from "date-fns"
import { useNavigate } from "react-router-dom";
import {
	EMPLOYEE_ACTION_TYPES,
	EmployeeRole,
	EmployeeStatus,
	type Address,
	type Employee,
} from "../../store/employee/employee.types";
import store from "../../store/store";
import { departments, tempEmployee } from "../../utils/DataFormatter";
import { Button } from "../button/Button";
import { InputBox } from "../inputBox/InputBox";
import { InputCombination } from "../inputCombination/InputCombination";
import { OptionsField } from "../optionsField/OptionsField";
import { useEffect, useState } from "react";

interface FormParams {
	type: string;
	data?: Employee;
}

export const EmployeeDetailsForm = ({ type, data }: FormParams) => {
	const navigate = useNavigate();
	const statusList: string[] = Object.keys(EmployeeStatus);
	const roleList: string[] = Object.keys(EmployeeRole);
	const deptList: string[] = departments;
	const checkIsEdit = () => {
		return type == "edit";
	};

	const [employeeValues, setEmployeeValues] = useState(
		checkIsEdit() && data ? data : tempEmployee
	);

	const formatDate = (date: string | undefined | Date) => {
		const formatedDate = new Date(date ? date : "");
		return `${formatedDate.getFullYear()}-0${formatedDate.getMonth()}-${formatedDate.getDate()}`;
	};
	const createEmployee = () => {
		console.log("final state", employeeValues);
		store.dispatch({
			type: EMPLOYEE_ACTION_TYPES.CREATE,
			payload: employeeValues,
		});
		navigate(`/employee/${employeeValues.employeeId}`);
	};
	const editEmployee = () => {
		console.log("final state", employeeValues);
		store.dispatch({
			type: EMPLOYEE_ACTION_TYPES.UPDATE,
			payload: employeeValues,
		});
		navigate(`/employee/${employeeValues.employeeId}`);
	};
	const updateEmployeeData = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
		field: string,
		subfield?: string
	) => {
		subfield
			? setEmployeeValues({
					...employeeValues,
					[field]: {
						...employeeValues.address,
						[subfield]: e.target.value,
					},
			  })
			: setEmployeeValues({ ...employeeValues, [field]: e.target.value });
	};
	useEffect(() => {
		console.log(employeeValues);
		// console.log(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`)
	}, [employeeValues]);
	return (
		<div className="employee-creation-details">
			<InputCombination
				name="emp_name"
				placeholder="Employee Name"
				type="text"
				value={checkIsEdit() ? data?.name : ""}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					updateEmployeeData(e, "name");
				}}
			/>
			<InputCombination
				name="email"
				placeholder="Email"
				type="text"
				value={checkIsEdit() ? data?.email : ""}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					updateEmployeeData(e, "email");
				}}
			/>
			<InputCombination
				name="age"
				placeholder="Age"
				type="number"
				value={checkIsEdit() ? data?.age.toString() : ""}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					updateEmployeeData(e, "age");
				}}
			/>

			<InputCombination
				name="joining_date"
				placeholder="Joining Date"
				type="date"
				value={checkIsEdit() ? formatDate(data?.joiningDate) : ""}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					updateEmployeeData(e, "joiningDate");
				}}
			/>
			<OptionsField
				label="Status"
				classname="status"
				options={statusList}
				value={checkIsEdit() ? data?.status : "Status"}
				onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
					updateEmployeeData(e, "status");
				}}
			/>
			<OptionsField
				label="Role"
				classname="role"
				options={roleList}
				value={checkIsEdit() ? data?.role : "Role"}
				onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
					updateEmployeeData(e, "role");
				}}
			/>

			<InputCombination
				name="address"
				value={checkIsEdit() ? data?.address.houseNo : ""}
				placeholder="Address"
				type="text"
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					updateEmployeeData(e, "address", "houseNo");
				}}
			/>
			<OptionsField
				label="Department"
				classname="department"
				options={deptList}
				value={
					checkIsEdit()
						? data?.dept !== null
							? data?.dept
							: ""
						: "Department"
				}
				onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
					updateEmployeeData(e, "dept");
				}}
			/>
			<InputCombination
				name="experience"
				placeholder="Experience"
				type="number"
				value={checkIsEdit() ? data?.experience.toString() : ""}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					updateEmployeeData(e, "experience");
				}}
			/>

			<div className="AddressLine">
				<InputBox
					classname="line_1"
					text="Line 1"
					defaultValue={checkIsEdit() ? data?.address.line1 : ""}
					onchange={(e: React.ChangeEvent<HTMLInputElement>) => {
						updateEmployeeData(e, "address", "line1");
					}}
				/>
				<InputBox
					classname="line_1"
					text="Line 2"
					defaultValue={checkIsEdit() ? data?.address.line2 : ""}
					onchange={(e: React.ChangeEvent<HTMLInputElement>) => {
						updateEmployeeData(e, "address", "line2");
					}}
				/>
				<InputBox
					classname="line_2"
					text="Pincode"
					defaultValue={checkIsEdit() ? data?.address.line1 : ""}
					onchange={(e: React.ChangeEvent<HTMLInputElement>) => {
						updateEmployeeData(e, "address", "pincode");
					}}
				/>
			</div>
			<InputCombination
				name="emp_id"
				placeholder="Employee ID"
				type="text"
				disabled={checkIsEdit() ? true : false}
				value={checkIsEdit() ? data?.employeeId : ""}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					updateEmployeeData(e, "employeeId");
				}}
			/>
			{!checkIsEdit() ? (
				<InputCombination
					name="password"
					placeholder="Password"
					type="password"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						updateEmployeeData(e, "password");
					}}
				/>
			) : (
				<div className="simpleDiv"></div>
			)}
			<div className="button-holder">
				<Button
					text={"Save"}
					classname="create"
					functionName={checkIsEdit() ? editEmployee : createEmployee}
				/>
				<Button
					text="Cancel"
					classname="cancel"
					functionName={() => setEmployeeValues(tempEmployee)}
				/>
			</div>
		</div>
	);
};
