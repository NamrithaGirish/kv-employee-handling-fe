// import { Content } from "../../components/content/Content"
import { useParams } from "react-router-dom";
import { Button } from "../../components/button/Button";
import EmployeeDetailsForm from "../../components/employeeDetailsForm/EmployeeDetailsForm";
import { Header } from "../../components/header/Header";
import { InputBox } from "../../components/inputBox/InputBox";
import { InputCombination } from "../../components/inputCombination/InputCombination";
// import { InputCombination } from "../../components/inputCombination/InputCombination"
import { MainContent } from "../../components/mainContent/MainContent";
import { OptionsField } from "../../components/optionsField/OptionsField";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "./EditEmployee.css";
import store from "../../store/store";
import { getDetailsOfEmployee } from "../../utils/EmployeeFunctions";
import { useGetEmployeeQuery } from "../../api-service/employees/employees.api";
import { lazy, useEffect } from "react";
// const LazyEmployeeDetailsForm = lazy(
// 	() => import("../../components/employeeDetailsForm/EmployeeDetailsForm")
// );
export const EditEmployee = () => {
	const { id } = useParams();
	//     const data = {
	//     "id": 71,
	//     "createdAt": "2025-05-23T05:22:11.080Z",
	//     "updatedAt": "2025-05-23T05:22:11.080Z",
	//     "deletedAt": null,
	//     "email": "testname7@mail.com",
	//     "age": 23,
	//     "name": "test name2",
	//     "password": "$2b$10$ALm4re8edh51gjLA.r1Vj.9s55rtJf79Vg0/8.WRlkgRxQ2r9zgMG",
	//     "role": "HR",
	//     "joiningDate": "2025-05-23T14:00:00.000Z",
	//     "experience": 0,
	//     "status": "INACTIVE",
	//     "employeeId": "E2",
	//     "address": {
	//         "id": 48,
	//         "createdAt": "2025-05-23T05:22:11.080Z",
	//         "updatedAt": "2025-05-23T05:22:11.080Z",
	//         "deletedAt": null,
	//         "pincode": 120344,
	//         "line1": "Line 1",
	//         "line2": "Line2",
	//         "houseNo": "house no"
	//     },
	//     "dept": null
	// }

	const { data } = useGetEmployeeQuery({ id: Number(id) });
	console.log(data);
	return (
		<>
			<Header title="Edit Employee" />
			<EmployeeDetailsForm type="edit" id={Number(id)} />
		</>
	);
};
