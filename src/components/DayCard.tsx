import Image from 'next/image'

import { type Condition } from '@/types'
import { formatDate, getWeek } from '@/utils'

type Props = {
  date: string
  condition: Condition
  temp: {
    min: number
    max: number
  }
}

export const DayCard = ({ date, condition, temp }: Props) => {
  const dt = new Date(date)
  const isToday = dt.getDate() === new Date().getDate()
  return (
    <div className="w-44 h-56 bg-white dark:bg-slate-900 rounded-md text-black dark:text-white dark:border border-slate-500 p-5">
      <div className="text-center font-bold text-sm h-5 uppercase leading-3">
        {getWeek(dt)}
      </div>
      <div className="text-xs text-slate-500 text-center">{formatDate(dt)}</div>
      <div className="h-16 mt-5 flex justify-center items-center">
        <Image src={`https:${condition.icon}`} alt="" width={64} height={64} />
      </div>
      <div className="text-xs text-slate-500 text-center mb-2 whitespace-nowrap truncate">
        {condition.text}
      </div>
      <div className="text-xl text-center font-semibold">
        {Math.round(temp.max)}° / {Math.round(temp.min)}°
      </div>
      {isToday && (
        <div className="text-center text-xs font-semibold text-slate-400">
          TODAY
        </div>
      )}
    </div>
  )
}
