import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { fetchForecast } from '@/utils'
import { Header } from '@/components'
import { Base } from '@/layouts'
import { ForecastGrid } from '@/containers'

export default function Home() {
  const [city, setCity] = useState('Reno')
  const { data } = useQuery(['forecast', city], () => fetchForecast(city))

  return (
    <Base>
      <div className="py-10 px-16">
        <Header city={city} setCity={setCity} />
        {data && <ForecastGrid forecast={data.forecast} />}
      </div>
    </Base>
  )
}
