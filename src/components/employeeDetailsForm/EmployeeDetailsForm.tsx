import { useNavigate } from "react-router-dom";
import {
	EmployeeRole,
	EmployeeStatus,
	type Employee,
} from "../../store/employee/employee.types";
import { tempEmployee } from "../../utils/DataFormatter";
import { Button } from "../button/Button";
import { InputBox } from "../inputBox/InputBox";
import { InputCombination } from "../inputCombination/InputCombination";
import { OptionsField } from "../optionsField/OptionsField";
import { useEffect, useState } from "react";
import {
	useCreateEmployeeMutation,
	useGetEmployeeQuery,
	useUpdateEmployeeMutation,
} from "../../api-service/employees/employees.api";
import { useGetDepartmentListQuery } from "../../api-service/department/department.api";

interface FormParams {
	type: string;
	data?: Employee;
	id?: number;
}

const EmployeeDetailsForm = ({ type, id }: FormParams) => {
	const [error, setError] = useState([]);
	const { data } = useGetEmployeeQuery({ id: Number(id) });

	const checkIsEdit = () => {
		return type == "edit";
	};
	const [employeeValues, setEmployeeValues] = useState(
		data ? data : tempEmployee
	);
	useEffect(() => {
		setEmployeeValues(data ? data : tempEmployee);
	}, [data]);

	console.log("Loading form with data : ", data);
	const { data: deptList } = useGetDepartmentListQuery();
	const navigate = useNavigate();
	const [edit] = useUpdateEmployeeMutation();
	const [create] = useCreateEmployeeMutation();
	const statusList: string[] = Object.keys(EmployeeStatus);
	const roleList: string[] = Object.keys(EmployeeRole);
	// const deptList: string[] = departments;

	useEffect(() => {
		setError([]);
	}, [employeeValues]);
	//FORMAT DATE NOT USED - EASIER WAY TO DISPLAY AND SEND FOUND OUT
	// const formatDate = (date: string | undefined | Date) => {
	// 	const formatedDate = new Date(date ? date : "");
	// 	return `${formatedDate.getFullYear()}-0${formatedDate.getMonth()}-${formatedDate.getDate()}`;
	// };
	const createEmployee = async () => {
		console.log("final state", employeeValues);
		await create(employeeValues)
			.unwrap()
			.then((response) => {
				console.log(response);
				setError([]);
				navigate(`/employee/${response.id}`);
			})
			.catch((error) => {
				console.log(error);

				setError(error.data.error || JSON.parse(error.data.message));
				console.log(
					"Error for creation :",
					error.data.message || error.data.error
				);
			});
	};
	const editEmployee = async () => {
		// const { data: data1 } = useUpdateEmployeeQuery();
		await edit(employeeValues)
			.unwrap()
			.then((response) => {
				console.log(response);
				setError([]);
				navigate(`/employee/${employeeValues.id}`);
			})
			.catch((error) => {
				console.log("Edit error : ", error);
				setError(error.data.error || error.data.message);
			});
	};
	const updateEmployeeData = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
		field: string,
		subfield?: string,
		isNumber?: boolean
	) => {
		subfield
			? setEmployeeValues({
					...employeeValues,
					[field]: {
						...employeeValues.address,
						[subfield]: isNumber
							? Number(e.target.value)
							: e.target.value,
					},
			  })
			: setEmployeeValues({
					...employeeValues,
					[field]: isNumber ? Number(e.target.value) : e.target.value,
			  });
	};
	useEffect(() => {
		console.log("Employeevalues : ", employeeValues);
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
					updateEmployeeData(e, "age", "", true);
				}}
			/>

			<InputCombination
				name="joining_date"
				placeholder="Joining Date"
				type="date"
				value={
					checkIsEdit()
						? data?.joiningDate.toString().substring(0, 10)
						: ""
				}
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
				options={deptList ? deptList : []}
				value={checkIsEdit() ? data?.dept?.id : "Department"}
				onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
					updateEmployeeData(e, "deptId", "", true);
				}}
			/>
			<InputCombination
				name="experience"
				placeholder="Experience"
				type="number"
				value={checkIsEdit() ? data?.experience.toString() : ""}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					updateEmployeeData(e, "experience", "", true);
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
					defaultValue={
						checkIsEdit() ? data?.address.pincode.toString() : ""
					}
					onchange={(e: React.ChangeEvent<HTMLInputElement>) => {
						updateEmployeeData(e, "address", "pincode", true);
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
					onClickFunction={
						checkIsEdit() ? editEmployee : createEmployee
					}
				/>
				<Button
					text="Cancel"
					classname="cancel"
					onClickFunction={() => navigate(-1)}
				/>
			</div>
			<div>
				{typeof error !== "string" &&
					error.length > 0 &&
					error.map((err) => {
						return <p>{err}</p>;
					})}
			</div>
			<div>{typeof error === "string" && error}</div>
		</div>
	);
};
export default EmployeeDetailsForm;
