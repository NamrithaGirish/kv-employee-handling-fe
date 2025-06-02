import type { Employee } from "../../store/employee/employee.types";
import { baseApi } from "../api";
import type { DeleteArgs } from "./types";

export const employeeApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getEmployeeList: builder.query<Employee[], void>({
			query: () => ({
				url: "/employee",
				method: "GET",
			}),
			providesTags: ["EMPLOYEES"],
		}),
		deleteEmployeeList: builder.mutation<Employee, DeleteArgs>({
			query: ({ id }) => ({
				url: `/employee/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["EMPLOYEES"],
		}),
		getEmployee: builder.query<Employee, DeleteArgs>({
			query: ({ id }) => ({
				url: `/employee/${id}`,
				method: "GET",
			}),
			providesTags: ["EMPLOYEE_DETAILS"],
		}),
		updateEmployee: builder.mutation<Employee, Employee>({
			query: (employee) => ({
				url: `/employee/${employee.id}`,
				method: "PATCH",
				body: employee,
			}),
			invalidatesTags: ["EMPLOYEE_DETAILS"],
		}),
		createEmployee: builder.mutation<Employee, Employee>({
			query: (employee) => ({
				url: `/employee`,
				method: "POST",
				body: employee,
			}),
			invalidatesTags: ["EMPLOYEES"],
		}),
	}),
});
export const {
	useGetEmployeeListQuery,
	useDeleteEmployeeListMutation,
	useGetEmployeeQuery,
	useUpdateEmployeeMutation,
	useCreateEmployeeMutation
} = employeeApi;
