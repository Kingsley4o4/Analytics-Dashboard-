import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const activityApi = createApi({
    reducerPath: "activityApi",
  
    baseQuery: fetchBaseQuery({
      
      baseUrl: "https://dummyjson.com/",
  
    }),
    endpoints: (builder) => ({
        getActivity: builder.query({
            query: () => "posts/"
        })
    })
});

export const {useGetActivityQuery} = activityApi;