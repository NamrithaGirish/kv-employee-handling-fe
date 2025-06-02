import type { Employee } from "../store/employee/employee.types";
import store, { useAppDispatch, useAppSelector } from "../store/store";

export const getDetailsOfEmployee = (employeeId: string | undefined) => {
	// const selectpr = useAppSelector(state=>state.employee.employees)
	const empList: Employee[] = useAppSelector(
		(state) => state.employee.employees
	);
	return empList.find((employee) => employeeId === employee.employeeId);
};
