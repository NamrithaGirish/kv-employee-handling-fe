import { baseApi } from "../api";
import type { LoginPayload, LoginResponse } from "./types";

export const LoginApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation<LoginResponse, LoginPayload>({
			query: (payload) => ({
				url: "/auth/login",
				method: "POST",
				body: payload,
			}),
		}),
	}),
});

export const { useLoginMutation } = LoginApi;
