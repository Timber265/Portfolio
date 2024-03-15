import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pizzaApi = createApi({
  reducerPath: 'pizzaApi',
  baseQuery: fetchBaseQuery({ baseUrl: '../dataJson/' }),
  endpoints: (builder) => builder.query({
    getPizzaApiByName: builder.query({
      query: (name) => `${name}.json`
    })
  }),
})

export const { useGetPizzaApiByNameQuery } = pizzaApi