import { DayCard } from '@/components'
import { type Forecast } from '@/types'

type Props = {
  forecast: Forecast
}

export const ForecastGrid = ({ forecast }: Props) => {
  return (
    <div className="flex gap-3 flex-wrap justify-center">
      {forecast.forecastday.map(({ date, day }) => (
        <DayCard
          key={date}
          date={date}
          condition={day.condition}
          temp={{
            max: day.maxtemp_c,
            min: day.mintemp_c,
          }}
        />
      ))}
    </div>
  )
}
