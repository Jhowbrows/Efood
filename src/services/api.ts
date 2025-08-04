import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurant } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ebac-fake-api.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurantSelected: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`
    }),
    getRestaurant: builder.query<Restaurant[], void>({
      query: () => 'restaurantes'
    })
  })
})

export const { useGetRestaurantQuery, useGetRestaurantSelectedQuery } = api

export default api
