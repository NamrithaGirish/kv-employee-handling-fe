// import { format } from "date-fns";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";

import "./DisplayCard.css";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import { PopupComponent } from "../popup/Popup";
import { useState } from "react";
import type { Employee } from "../../store/employee/employee.types";
import store from "../../store/store";
interface display {
	title: string[];
	data: Employee[];
	// statusFilter:string
}
const DisplayCard = ({ title, data }: display) => {
	const navigate = useNavigate();
	const navigateToEdit = (
		e: React.MouseEvent<HTMLButtonElement>,
		id: string
	) => {
		e.stopPropagation();
		navigate(`/employee/edit/${id}`);
	};
	const data1 = store.getState().employees;
	const [open, setOpen] = useState(false);

	const deleteEmployeeAlert = (id: string) => {
		setOpen(false);
		// console.log("final state" ,values);
		store.dispatch({
			type: "employee/DELETE",
			payload: id,
		});
		// alert("Sure?");
	};
	const navigateToEmployeeDetails = (id: number | string) => {
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
								navigateToEmployeeDetails(content.employeeId)
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
							{/* {
                                    Object.values(content).map((value)=>{
                                        return(
                                            <td>
                                                {value}
                                            </td>
                                        )
                                    })
                                } */}
							<td>
								<div className="action-emp">
									<Popup open={open} modal lockScroll>
										<PopupComponent
											heading="Are you sure?"
											text="Do you want to delete the Employee?"
											yesFnCall={() =>
												deleteEmployeeAlert(
													content.employeeId
												)
											}
											noFnCall={() => setOpen(false)}
										/>
									</Popup>
									<button
										className="delete-emp"
										onClick={(
											e: React.MouseEvent<HTMLButtonElement>
										) => {
											e.stopPropagation();
											setOpen(true);
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
										) =>
											navigateToEdit(
												e,
												content.employeeId
											)
										}
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
export default DisplayCard;
