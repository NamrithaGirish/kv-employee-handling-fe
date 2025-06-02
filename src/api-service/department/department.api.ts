import { baseApi } from "../api";
import type { Department } from "./types";

export const departmentApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getDepartmentList: builder.query<Department[], void>({
			query: () => ({
				url: "/department",
				method: "GET",
			}),
			providesTags: ["DEPARTMENTS"],
		}),
	}),
});
export const { useGetDepartmentListQuery } = departmentApi;
