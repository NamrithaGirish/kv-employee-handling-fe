// import { format } from "date-fns";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";

import "./ListingTable.css";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import { PopupComponent } from "../popup/Popup";
import { useState } from "react";
import type { Employee } from "../../store/employee/employee.types";
import { useDeleteEmployeeListMutation } from "../../api-service/employees/employees.api";
interface display {
	title: string[];
	data: Employee[];
}
const ListingTable = ({ title, data }: display) => {
	const [deleteEmployee] = useDeleteEmployeeListMutation();
	const navigate = useNavigate();
	// const dispatch = useAppDispatch(); // FOR REACT TOOLKIT
	const navigateToEdit = (
		e: React.MouseEvent<HTMLButtonElement>,
		id: number
	) => {
		e.stopPropagation();
		navigate(`/employee/edit/${id}`);
	};
	// const data1 = useSelector((state: EmployeeState) => state.employees);
	// const [open, setOpen] = useState(false);
	const [activePopupId, setActivePopupId] = useState<number | null>(null);

	const deleteEmployeeAlert = (id: number) => {
		const data = deleteEmployee({ id });
		console.log(data);
		setActivePopupId(null);
		//CALLING DISPATCH FOR RTK
		// dispatch(deleteEmployee(id));
		// console.log("final state" ,values);
		// store.dispatch({
		// 	type: "employee/DELETE",
		// 	payload: id,
		// });
		// alert("Sure?");
	};
	const navigateToEmployeeDetails = (id: number) => {
		navigate(`/employee/${id}`);
	};
	return (
		<div className="display-container">
			<table className="display-table">
				<tr>
					{title.map((content) => {
						return <th>{content}</th>;
					})}
				</tr>
				{data.map((content) => {
					return (
						<tr
							onClick={() =>
								navigateToEmployeeDetails(content.id)
							}
						>
							<td>{content.name}</td>
							<td>{content.employeeId}</td>
							<td>
								{/* {format(content.joiningDate,"dd-mm-yyyy")} */}
								{new Date(
									content.joiningDate
								).toLocaleDateString([], {
									year: "numeric",
									month: "long",
									day: "numeric",
								})}
							</td>
							<td>{content.role}</td>
							<td>
								<div
									className={`status-cell-${content.status}`}
								>
									{content.status}
								</div>
							</td>
							<td>{content.experience}</td>
							<td>
								<div className="action-emp">
									<Popup
										open={activePopupId == content.id}
										modal
										lockScroll
									>
										{/* <p>{content.id}</p> */}
										<PopupComponent
											id={content.id}
											heading="Are you sure?"
											text={`Do you want to delete the Employee ${content.employeeId} ?`}
											yesFnCall={() => {
												console.log(
													"id to delete :",
													content.id
												);
												deleteEmployeeAlert(content.id);
											}}
											noFnCall={() => {
												setActivePopupId(null);
											}}
										/>
									</Popup>
									<button
										className="delete-emp"
										onClick={(
											e: React.MouseEvent<HTMLButtonElement>
										) => {
											e.stopPropagation();
											setActivePopupId(content.id);
										}}
									>
										<FaRegTrashCan className="delete-icon" />

										{/* <i className="fa fa-trash-o"></i> */}
										{/* <img src={icon} /> */}
										{/* <FontAwesomeIcon icon="fa-solid fa-trash" style={{color: "#e31616",}} /> */}
									</button>
									<button
										className="edit-emp"
										onClick={(
											e: React.MouseEvent<HTMLButtonElement>
										) => navigateToEdit(e, content.id)}
									>
										<MdOutlineModeEdit className="edit-icon" />

										{/* <img src={icon} /> */}
									</button>
								</div>
							</td>
						</tr>
					);
				})}
			</table>
		</div>
	);
};
export default ListingTable;
