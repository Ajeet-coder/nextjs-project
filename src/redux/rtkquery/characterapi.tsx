import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type User = {
  id: number;
  name: string;
  email: number;
};

export const userApi:any = createApi({
  reducerPath: "userApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], null>({
      query: () => "users",
    }),
    getUserById: builder.query<User, { id: string }>({
      query: ({ id }) => `users/${id}`,
    }),

    getcharacter: builder.query({
        query:()=>({
            url:"character",
            method: "GET",
        })
    })
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery , useGetcharacterQuery} = userApi;
