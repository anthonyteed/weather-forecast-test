import { toggleDarkMode } from '@/utils'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'

export const DarkModeButton = () => {
  return (
    <button onClick={toggleDarkMode}>
      <HiOutlineSun className="text-3xl hidden dark:block" />
      <HiOutlineMoon className="text-3xl dark:hidden" />
    </button>
  )
}
