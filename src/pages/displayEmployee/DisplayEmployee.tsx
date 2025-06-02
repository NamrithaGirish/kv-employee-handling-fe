import { useNavigate, useParams } from "react-router-dom";
import "./DisplayEmployee.css";
import { Header } from "../../components/header/Header";
import { DisplayDiv } from "../../components/displayDiv/DisplayDiv";
import { format } from "date-fns";
import { MdOutlineModeEdit } from "react-icons/md";
import store from "../../store/store";
import { useSelector } from "react-redux";
import type {
	Address,
	EmployeeState,
} from "../../store/employee/employee.types";
import { getDetailsOfEmployee } from "../../utils/EmployeeFunctions";
import {
	useGetEmployeeListQuery,
	useGetEmployeeQuery,
} from "../../api-service/employees/employees.api";
function camelCaseToNormal(camelCaseString: string) {
	const result = camelCaseString.replace(/([A-Z])/g, " $1");
	return result.charAt(0).toUpperCase() + result.slice(1);
}
const formatAddress = (address: Address) => {
	return (
		address.houseNo +
		", " +
		address.line1 +
		", " +
		address.line2 +
		", " +
		address.pincode
	);
};

export const DisplayEmployee = () => {
	const { id } = useParams();

	// const data = getDetailsOfEmployee(id);
	const { data } = useGetEmployeeQuery({ id: Number(id) });
	const navigate = useNavigate();
	const navigateToEdit = (id: number) => {
		navigate(`/employee/edit/${id}`);
	};

	return (
		<>
			<Header title="Employee List">
				{data && (
					<div className="edit-option">
						<button
							className="edit-button-in-view"
							onClick={() => navigateToEdit(data.id)}
						>
							<MdOutlineModeEdit className="edit-icon-in-view" />
							Edit
						</button>
					</div>
				)}
			</Header>

			{data && (
				<div className="employee-details">
					<DisplayDiv title="Employee Name" value={data.name} />
					<DisplayDiv title="E-Mail" value={data.email} />
					<DisplayDiv
						title="Joining Date"
						value={format(data.joiningDate, "dd-mm-yyyy")}
					/>
					<DisplayDiv title="Age" value={data.age.toString()} />
					<hr className="solid-line" />
					<DisplayDiv title="Role" value={data.role} />
					<DisplayDiv title="Status" value={data.status} />
					<DisplayDiv
						title="Experience"
						value={data.experience.toString() + "Yrs"}
					/>
					<DisplayDiv
						title="Address"
						value={formatAddress(data.address)}
					/>
					<hr className="solid-line" />
					<DisplayDiv title="Employee ID" value={data.employeeId} />
				</div>
			)}
		</>
	);
};
