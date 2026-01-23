// services/productsApi.js
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const imgApi = createApi({
//   reducerPath: 'imgApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://dummyjson.com/',
//   }),
//   endpoints: (builder) => ({
//     getImage: builder.query({
//       query: () => 'products/',
//     }),
//     getImageById: builder.query({
//       query: (id) => `products/${id}`,
//     }),
//   }),
// });

// export const {
//   useGetImageQuery,
//   useGetImageByIdQuery,
// } = imgApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const imgApi = createApi({
  reducerPath: 'imgApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/',
  }),
  endpoints: (builder) => ({
    getImage: builder.query({
      query: () => 'users',
    }),
  }),
});

export const { useGetImageQuery } = imgApi;
