import { useParams } from "react-router-dom";
import EmployeeDetailsForm from "../../components/employeeDetailsForm/EmployeeDetailsForm";
import { Header } from "../../components/header/Header";
import "./EditEmployee.css";
import { useGetEmployeeQuery } from "../../api-service/employees/employees.api";
export const EditEmployee = () => {
	const { id } = useParams();

	const { data } = useGetEmployeeQuery({ id: Number(id) });
	console.log(data);
	return (
		<>
			<Header title="Edit Employee" />
			<EmployeeDetailsForm type="edit" id={Number(id)} />
		</>
	);
};
