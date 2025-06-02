import { useNavigate, useSearchParams } from "react-router-dom";
// import { MainContent } from "../../components/mainContent/MainContent"
// import { Sidebar } from "../../components/sidebar/Sidebar"
import "./DisplayAllEmployees.css";
import { Header } from "../../components/header/Header";
// import { InputBox } from "../../components/inputBox/InputBox"
import { OptionsField } from "../../components/optionsField/OptionsField";
// import { Button } from "../../components/button/Button"
// import { DisplayCard } from "../../components/displayCard/DisplayCard"
import React, { Suspense, useEffect, useState } from "react";
// import { MdOutlineModeEdit } from "react-icons/md"
import { IoMdAdd } from "react-icons/io";
import { lazy } from "react";
import { LoadingScreen } from "../../components/loading/Loading";
import store, { useAppSelector } from "../../store/store";
import { useSelector } from "react-redux";
import { type RootState } from "../../store/store";
import {
	EmployeeRole,
	EmployeeStatus,
	type Employee,
	type EmployeeState,
} from "../../store/employee/employee.types";
import { useGetEmployeeListQuery } from "../../api-service/employees/employees.api";
import { useGetDepartmentListQuery } from "../../api-service/department/department.api";

// const LazyDisplayCard = lazy(()=>import('../../components/displayCard/DisplayCard')
//     .then(({ DisplayCard }) => ({ default: DisplayCard })),
// );
const LazyDisplayCard = lazy(
	() => import("../../components/displayCard/DisplayCard")
);

export const DisplayAllEmployees = () => {
	// const data1:Employee[]=[];
	const { data: data1 } = useGetEmployeeListQuery();
	
	const [filterParams, setFilterParams] = useSearchParams();
	// const edit = queryParams.get("isEdit")==="true";
	// if (edit) return(
	//     <div> Inside edit</div>
	// )
	const navigate = useNavigate();
	const setSearchParams = (status: string) => {
		const urlparams = new URLSearchParams(filterParams);
		if (status === "ALL") {
			console.log("hello");
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
	//     const data =[
	//     {
	//         "id": 75,
	//         "createdAt": "2025-05-27T10:29:46.286Z",
	//         "updatedAt": "2025-05-27T10:29:46.286Z",
	//         "deletedAt": null,
	//         "email": "testname@mail.com",
	//         "age": 23,
	//         "name": "test name",
	//         "password": "$2b$10$SqlEHWnFdi3Pu8HIL3sccuo0tpDBeU.pwsnYEmuNq4vofqjq/kHEG",
	//         "role": "HR",
	//         "joiningDate": "2025-05-23T14:00:00.000Z",
	//         "experience": 0,
	//         "status": "PROBATION",
	//         "employeeId": "E145",
	//         "address": {
	//             "id": 52,
	//             "createdAt": "2025-05-27T10:29:46.286Z",
	//             "updatedAt": "2025-05-27T10:29:46.286Z",
	//             "deletedAt": null,
	//             "pincode": 120344,
	//             "line1": "Line 1",
	//             "line2": "Line 2",
	//             "houseNo": "house no"
	//         },
	//         "dept": {
	//             "id": 24,
	//             "createdAt": "2025-05-23T05:20:34.216Z",
	//             "updatedAt": "2025-05-27T10:38:36.140Z",
	//             "deletedAt": null,
	//             "name": "D6"
	//         }
	//     },
	//     {
	//         "id": 78,
	//         "createdAt": "2025-05-27T10:58:14.991Z",
	//         "updatedAt": "2025-05-27T10:58:14.991Z",
	//         "deletedAt": null,
	//         "email": "testnam8e@mail.com",
	//         "age": 23,
	//         "name": "test name",
	//         "password": "$2b$10$v4zNWSoO6sQd2cQZ4oj/HeB0lI/9IYC2r2D46Jejut03oeNQmVVC6",
	//         "role": "HR",
	//         "joiningDate": "2025-05-23T14:00:00.000Z",
	//         "experience": 0,
	//         "status": "PROBATION",
	//         "employeeId": "E1458",
	//         "address": {
	//             "id": 53,
	//             "createdAt": "2025-05-27T10:58:14.991Z",
	//             "updatedAt": "2025-05-27T10:58:14.991Z",
	//             "deletedAt": null,
	//             "pincode": 120344,
	//             "line1": "Line 1",
	//             "line2": "Line 2",
	//             "houseNo": "house no"
	//         },
	//         "dept": {
	//             "id": 24,
	//             "createdAt": "2025-05-23T05:20:34.216Z",
	//             "updatedAt": "2025-05-27T10:38:36.140Z",
	//             "deletedAt": null,
	//             "name": "D6"
	//         }
	//     },
	//     {
	//         "id": 71,
	//         "createdAt": "2025-05-23T05:22:11.080Z",
	//         "updatedAt": "2025-05-23T05:22:11.080Z",
	//         "deletedAt": null,
	//         "email": "testn0me7@mail.com",
	//         "age": 23,
	//         "name": "test name2",
	//         "password": "$2b$10$ALm4re8edh51gjLA.r1Vj.9s55rtJf79Vg0/8.WRlkgRxQ2r9zgMG",
	//         "role": "HR",
	//         "joiningDate": "2025-05-23T14:00:00.000Z",
	//         "experience": 0,
	//         "status": "INACTIVE",
	//         "employeeId": "E2",
	//         "address": {
	//             "id": 48,
	//             "createdAt": "2025-05-23T05:22:11.080Z",
	//             "updatedAt": "2025-05-23T05:22:11.080Z",
	//             "deletedAt": null,
	//             "pincode": 120344,
	//             "line1": "Line 1",
	//             "line2": "Line2",
	//             "houseNo": "house no"
	//         },
	//         "dept": null
	//     },
	//     {
	//         "id": 81,
	//         "createdAt": "2025-05-27T12:05:44.986Z",
	//         "updatedAt": "2025-05-27T12:05:44.986Z",
	//         "deletedAt": null,
	//         "email": "testnam8ye@mail.com",
	//         "age": 23,
	//         "name": "test name",
	//         "password": "$2b$10$RWxS61ftfhulY00ck1kZk.7z3EU1nbzIfQcb.lsjns0sZl3QDZmEC",
	//         "role": "HR",
	//         "joiningDate": "2025-05-23T14:00:00.000Z",
	//         "experience": 6,
	//         "status": "PROBATION",
	//         "employeeId": "E18458",
	//         "address": {
	//             "id": 54,
	//             "createdAt": "2025-05-27T12:05:44.986Z",
	//             "updatedAt": "2025-05-27T12:05:44.986Z",
	//             "deletedAt": null,
	//             "pincode": 120344,
	//             "line1": "Line 1",
	//             "line2": "Line 2",
	//             "houseNo": "house no"
	//         },
	//         "dept": {
	//             "id": 24,
	//             "createdAt": "2025-05-23T05:20:34.216Z",
	//             "updatedAt": "2025-05-27T10:38:36.140Z",
	//             "deletedAt": null,
	//             "name": "D6"
	//         }
	//     },
	//     {
	//         "id": 82,
	//         "createdAt": "2025-05-27T12:10:44.722Z",
	//         "updatedAt": "2025-05-27T12:10:44.722Z",
	//         "deletedAt": null,
	//         "email": "testne7@mail.com",
	//         "age": 23,
	//         "name": "test name",
	//         "password": "$2b$10$O.C8mwiPfvafkH4J82WFB.Z1iO2wDNc7rYBZ9NyhFlP8vIr2ptAF.",
	//         "role": "DEVELOPER",
	//         "joiningDate": "2025-05-23T14:00:00.000Z",
	//         "experience": 6,
	//         "status": "ACTIVE",
	//         "employeeId": "E458",
	//         "address": {
	//             "id": 55,
	//             "createdAt": "2025-05-27T12:10:44.722Z",
	//             "updatedAt": "2025-05-27T12:10:44.722Z",
	//             "deletedAt": null,
	//             "pincode": 120344,
	//             "line1": "Line 1",
	//             "line2": "Line 2",
	//             "houseNo": "house no"
	//         },
	//         "dept": {
	//             "id": 24,
	//             "createdAt": "2025-05-23T05:20:34.216Z",
	//             "updatedAt": "2025-05-27T10:38:36.140Z",
	//             "deletedAt": null,
	//             "name": "D6"
	//         }
	//     },
	//     {
	//         "id": 73,
	//         "createdAt": "2025-05-23T05:36:37.507Z",
	//         "updatedAt": "2025-05-23T05:36:37.507Z",
	//         "deletedAt": null,
	//         "email": "test@gmail.com",
	//         "age": 23,
	//         "name": "test name4",
	//         "password": "$2b$10$f/s8saBqOlc6h3P3zu9Z/uKf.KH/D175TgENNhi.CpW1Z4HpLEkhm",
	//         "role": "DEVELOPER",
	//         "joiningDate": "2025-05-23T14:00:00.000Z",
	//         "experience": 0,
	//         "status": "ACTIVE",
	//         "employeeId": "E83",
	//         "address": {
	//             "id": 50,
	//             "createdAt": "2025-05-23T05:36:37.507Z",
	//             "updatedAt": "2025-05-23T05:36:37.507Z",
	//             "deletedAt": null,
	//             "pincode": 1244,
	//             "line1": "Line 1",
	//             "line2": "Line2",
	//             "houseNo": "house no"
	//         },
	//         "dept": null
	//     },
	//     {
	//         "id": 74,
	//         "createdAt": "2025-05-23T07:43:20.766Z",
	//         "updatedAt": "2025-05-23T07:43:20.766Z",
	//         "deletedAt": null,
	//         "email": "test94@mail.com",
	//         "age": 23,
	//         "name": "test name4",
	//         "password": "$2b$10$gaGKPwNGunxy2IZVBanpNu28xh7zvGabTY5S7pjy7F4n6/4A3EKOS",
	//         "role": "DEVELOPER",
	//         "joiningDate": "2025-05-23T14:00:00.000Z",
	//         "experience": 0,
	//         "status": "ACTIVE",
	//         "employeeId": "E93",
	//         "address": {
	//             "id": 51,
	//             "createdAt": "2025-05-23T07:43:20.766Z",
	//             "updatedAt": "2025-05-23T07:43:20.766Z",
	//             "deletedAt": null,
	//             "pincode": 1244,
	//             "line1": "Line 1",
	//             "line2": "Line2",
	//             "houseNo": "house no"
	//         },
	//         "dept": null
	//     }
	// ]

	// const data1: Employee[] = useAppSelector(
	// 	(state) => state.employee.employees
	// );
	console.log("Data1 :", data1);

	const [filteredData, setFilteredData] = useState(data1);
	useEffect(() => {
		setFilteredData(data1);
		// navigate("")
		console.log("Data1 changed");
	}, [data1]);

	useEffect(() => {
		console.log(filterParams.get("status"));
		filterData(filterParams.get("status"));
	}, [filterParams]);

	const filterData = (status: string | null) => {
		if (status) {
			console.log("data1 from store : ", data1);
			let newData = data1?.filter(
				(employee) => employee.status == status
			);
			console.log("new Date : ", newData);
			setFilteredData(newData);
		} else {
			console.log("else new Date : ", data1);

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
