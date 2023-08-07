import { format } from 'date-fns'

export function getDate(time: number | undefined) {
  if(time === undefined) return null
  return format(new Date(time * 1000), 'dd.MM.yyyy hh:mm')
}