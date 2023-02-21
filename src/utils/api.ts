import { type Weather } from "@/types"

export const fetchForecast = async (city: string) => {
  const res = await fetch(`/api/forecast?city=${city}`)
  const data = await res.json()
  return data as Weather
}
