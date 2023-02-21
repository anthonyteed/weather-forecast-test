import { DarkModeButton, Select } from '@/components'

const locations = [
  { city: 'Reno', state: 'NV' },
  { city: 'Austin', state: 'TX' },
  { city: 'Tampa', state: 'FL' },
]

type Props = {
  city: string
  setCity: (city: string) => void
}

export const Header = ({ city, setCity }: Props) => {
  const location = locations.find((loc) => loc.city === city)

  return (
    <div className="flex flex-col gap-10 sm:flex-row justify-between mb-20">
      <div>
        <div className="mb-2 text-3xl font-bold">Forecast</div>
        <div>
          {location?.city}, {location?.state}
        </div>
      </div>

      <div className="flex gap-3 mb-20 items-center">
        <DarkModeButton />
        <Select
          options={locations.map((location) => ({
            label: `${location.city}, ${location.state}`,
            value: location.city,
          }))}
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-80 mx-auto"
        />
      </div>
    </div>
  )
}
