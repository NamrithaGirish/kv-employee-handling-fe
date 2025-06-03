/**
 * Type definitions for the employee domain in the Redux store.
 * This file contains:
 * - Employee data structure and related types (Address, Role, Status)
 * - Redux action types and action interfaces
 * - State interface for the employee slice
 */

import type { Department } from "../../api-service/department/types";

export interface Address {
	houseNo: string;
	line1: string;
	line2: string;
	pincode: number;
}

export const EmployeeRole = {
	UI: "UI",
	UX: "UX",
	DEVELOPER: "DEVELOPER",
	HR: "HR",
} as const;

export type Role = (typeof EmployeeRole)[keyof typeof EmployeeRole];

export const EmployeeStatus = {
	ACTIIVE: "ACTIIVE",
	INACTIVE: "INACTIVE",
	PROBATION: "PROBATION",
} as const;

export type Status = (typeof EmployeeStatus)[keyof typeof EmployeeStatus];

export interface Employee {
	id: number;
	employeeId: string;
	email: string;
	name: string;
	age: number;
	address: Address;
	password: string;
	role: string;
	joiningDate: Date;
	experience: number;
	status: string;
	deptId: number | null;
	dept?: Department;
}

export const EMPLOYEE_ACTION_TYPES = {
	DELETE: "employee/DELETE",
	UPDATE: "employee/UPDATE",
	CREATE: "employee/CREATE",
} as const;

export type EmployeeActionTypes =
	(typeof EMPLOYEE_ACTION_TYPES)[keyof typeof EMPLOYEE_ACTION_TYPES];

export interface EmployeeState {
	employees: Employee[];
}

export interface DeleteEmployeeAction {
	type: typeof EMPLOYEE_ACTION_TYPES.DELETE;
	payload: string; // employee id
}

export interface UpdateEmployeeAction {
	type: typeof EMPLOYEE_ACTION_TYPES.UPDATE;
	payload: Employee;
}
export interface CreateEmployeeAction {
	type: typeof EMPLOYEE_ACTION_TYPES.CREATE;
	payload: Employee; // employee id
}

export type EmployeeAction =
	| DeleteEmployeeAction
	| UpdateEmployeeAction
	| CreateEmployeeAction;
