import dateFormat from "dateformat";
import slugify from "slugify";


export const getInitials = (text: string) =>
 text
  .split(' ')
  .map((n) => n[0])
  .join('')
  .toUpperCase()

export const formatDate = (date: string) => dateFormat(date, 'mmm d yyyy')

export const getDates = () => {
 const today = new Date()
 const twoDaysBack = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 2
 ).toISOString()

 const randomDaysBack = Math.floor(Math.random() * 24) + 1

 const randomDate = new Date(
  today.getFullYear(),
  today.getMonth() - randomDaysBack
 ).toISOString()

 const nextWeekLocal = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() + 5
 ).toISOString()
 return {
  randomDate: formatDate(randomDate),
  date: twoDaysBack,
  nextWeek: nextWeekLocal,
 }
}

export const getRandomDate = () => formatDate(getDates().randomDate)

export const slug = (text: string) => slugify(text, { lower: true })

export const getRandomNumber = (min = 0, max = 100) => {
 const difference = max - min
 let rand = Math.random()
 rand = Math.floor(rand * difference)
 rand += min
 return rand
}