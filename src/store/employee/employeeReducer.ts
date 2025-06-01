import {
	EMPLOYEE_ACTION_TYPES,
	type EmployeeAction,
	type EmployeeActionTypes,
	type EmployeeState,
} from "./employee.types";

const initialState = { employees: [] };
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
