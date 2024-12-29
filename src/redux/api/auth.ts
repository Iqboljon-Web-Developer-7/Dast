import { api } from "./index";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query({
      query: (params) => ({
        url: "api/users",
        params,
      }),
      providesTags: ["User"],
    }),
    loginUser: build.mutation({
      query: (params) => ({
        url: "login",
        method:"POST",
        params,
      }),
      invalidatesTags: ["User"],
    }),
    createUser: build.mutation({
      query: (body) => ({
        url: "api/users",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    updateUser: build.mutation({
      query: ({ id, body }) => ({
        url: `api/users/${id}`,
        method: "PUT",
        body,
      }),
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: `api/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
    deleteAllUsers: build.mutation({
      query: () => ({
        url: `api/users/clear`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
    verifyOtp: build.mutation({
      query: (body) => ({
        url: "api/users/verifyOTP",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useDeleteUserMutation,
  useGetUserQuery,
  useUpdateUserMutation,
  useVerifyOtpMutation,
  useLoginUserMutation,
  useDeleteAllUsersMutation
} = userApi;
