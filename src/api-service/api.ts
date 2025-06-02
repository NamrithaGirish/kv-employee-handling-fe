import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import reducer from "../store/employee/employeeReducer";

export const baseApi = createApi({
	reducerPath: "employeeApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:4000",
		prepareHeaders: (headers) => {
			const token = localStorage.getItem("token");
			if (token) {
				headers.set("Authorization", `Bearer ${token}`);
			}
			return headers;
		},
	}),
	tagTypes: ["EMPLOYEES", "EMPLOYEE_DETAILS", "DEPARTMENTS"],
	refetchOnMountOrArgChange: true,
	refetchOnReconnect: true,
	endpoints: () => ({}),
});
