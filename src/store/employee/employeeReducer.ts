import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
	EMPLOYEE_ACTION_TYPES,
	type Employee,
	type EmployeeAction,
	type EmployeeState,
} from "./employee.types";

//USING REACT-REDUX FOR DEFNING ACTIONS
//PASS payload and action FOR DISPATCH
const initialState: { employees: Employee[] } = { employees: [] };
export const employeeReducer = (
	state: EmployeeState = initialState,
	action: EmployeeAction
): EmployeeState => {
	switch (action.type) {
		case EMPLOYEE_ACTION_TYPES.DELETE:
			return {
				...state,
				employees: state.employees.filter(
					(employee) => employee.employeeId !== action.payload
				),
			};

		case EMPLOYEE_ACTION_TYPES.UPDATE:
			return {
				...state,
				employees: state.employees.map((employee) => {
					return employee.employeeId == action.payload.employeeId
						? action.payload
						: employee;
				}),
				// employees:[...state.employees]
			};
		case EMPLOYEE_ACTION_TYPES.CREATE:
			console.log([...state.employees, action.payload]);
			return {
				...state,
				employees: [...state.employees, action.payload],
			};

		default:
			return state;
	}
};

//USING RTK
//CALL THE REDUCER NAME AS A FUNCTION WITH ITS PARAMETERS
export const employeeSlice = createSlice({
	name: "employee",
	initialState,
	reducers: {
		addEmployee: (state, action: PayloadAction<Employee>) => {
			state.employees.push(action.payload);
		},
		deleteEmployee: (state, action: PayloadAction<string>) => {
			state.employees = state.employees.filter(
				(employee) => employee.employeeId !== action.payload
			);
			// return newList;
		},
	},
});
export const { addEmployee, deleteEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
