import { useNavigate, useSearchParams } from "react-router-dom";
import "./DisplayAllEmployees.css";
import { Header } from "../../components/header/Header";
import { OptionsField } from "../../components/optionsField/OptionsField";
import React, { Suspense, useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { lazy } from "react";
import { LoadingScreen } from "../../components/loading/Loading";
import { EmployeeStatus } from "../../store/employee/employee.types";
import { useGetEmployeeListQuery } from "../../api-service/employees/employees.api";

//LAZY LOAD FOR NON DEFAULT EXPORT
// const LazyDisplayCard = lazy(()=>import('../../components/displayCard/DisplayCard')
//     .then(({ DisplayCard }) => ({ default: DisplayCard })),
// );
const LazyDisplayCard = lazy(
	() => import("../../components/listingTable/ListingTable")
);

export const DisplayAllEmployees = () => {
	const { data: data1, error } = useGetEmployeeListQuery();

	const [filterParams, setFilterParams] = useSearchParams();
	// )
	const navigate = useNavigate();
	const setSearchParams = (status: string) => {
		const urlparams = new URLSearchParams(filterParams);
		if (status === "ALL") {
			urlparams.delete("status");
		} else {
			// const urlparams = new URLSearchParams(filterParams)
			urlparams.set("status", status);
			// setFilterParams(urlparams);
		}
		setFilterParams(urlparams);
	};
	const navigateToCreateEmployeePage = () => {
		navigate("create");
	};
	const title = [
		"Employee Name",
		"Employee ID",
		"Joining Date",
		"Role",
		"status",
		"Experience",
		"Action",
	];
	console.log("Data1 :", data1);
	const [filteredData, setFilteredData] = useState(data1);

	useEffect(() => {
		console.log("Status :", filterParams.get("status"));
		filterData(filterParams.get("status"));
	}, [filterParams]);

	useEffect(() => {
		console.log("Status :", filterParams.get("status"));
		filterData(filterParams.get("status"));
	}, [data1]);

	const filterData = (status: string | null) => {
		if (status) {
			let newData = data1?.filter(
				(employee) => employee.status == status
			);
			setFilteredData(newData);
		} else {
			setFilteredData(data1);
		}
	};
	console.log("Filtered data", filteredData);

	return (
		<>
			{/* <Layout> */}
			<div className="emp-list-header">
				<Header title="Employee List">
					<div className="edit-option-status">
						<OptionsField
							classname="edit-status-in-view"
							label=""
							value={filterParams.get("status") || "ALL"}
							options={["ALL", ...Object.keys(EmployeeStatus)]}
							noDisabledField={true}
							onChange={(
								e: React.ChangeEvent<HTMLSelectElement>
							) => {
								setSearchParams(e.target.value);
							}}
						/>
					</div>
					<div className="edit-option">
						<button
							className="edit-button-in-view"
							onClick={navigateToCreateEmployeePage}
						>
							<IoMdAdd className="edit-icon-in-view" />
							Create
						</button>
					</div>
				</Header>
			</div>

			<Suspense fallback={<LoadingScreen />}>
				<LazyDisplayCard title={title} data={filteredData || []} />
			</Suspense>
		</>
	);
};
