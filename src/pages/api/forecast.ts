import type { NextApiRequest, NextApiResponse } from 'next'
import { type Weather } from '@/types'
import dummy from '@/mock'

const apiUrl = 'http://api.weatherapi.com/v1/forecast.json'
const key = '4b6c6b7c1b82424ca6453244231902'
const isProd = process.env.NODE_ENV === 'production'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Weather>
) {
  const city = req.query.city || 'New York'
  if (isProd) {
    const response = await fetch(
      `${apiUrl}?key=${key}&q=${city}&days=14&aqi=no&alerts=no`
    )
    const data = await response.json()
    res.status(200).json(data)
  } else {
    const data: Weather = dummy
    res.status(200).json(data)
  }
}
