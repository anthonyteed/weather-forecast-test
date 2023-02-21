export * from './api'

export const formatDate = (date: Date) => {
  return Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
  }).format(date)
}

export const getWeek = (date: Date) => {
  return Intl.DateTimeFormat('en-US', {
    weekday: 'short',
  }).format(date)
}

export const toggleDarkMode = () => {
  if (typeof window === 'undefined') return
  document.documentElement.classList.toggle('dark')
}
