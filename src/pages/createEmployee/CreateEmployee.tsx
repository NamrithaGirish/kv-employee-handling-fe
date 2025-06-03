import { Header } from "../../components/header/Header";
import "./CreateEmployee.css";
import EmployeeDetailsForm from "../../components/employeeDetailsForm/EmployeeDetailsForm";

export const CreateEmployee = () => {
	return (
		<>
			<Header title="Create Employee" />
			<EmployeeDetailsForm type="create" />
		</>
	);
};
