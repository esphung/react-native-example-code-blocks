/*
FILENAME:     convertNonTimeZonedDate.js
PURPOSE:      convertNonTimeZonedDate
AUTHOR:       David Marselus
CREATED:      03/30/2022 09:29 AM
*/
let DB = "2022-03-30T12:15:25.000Z"
let DB_DATE = new Date(DB)
let now = new Date()
let offset = now.getTimezoneOffset()

console.log(convertNonTimeZonedDate(DB_DATE, offset)) //2022-03-30T07:15:25.000Z 
/* 
  convertNonTimeZonedDate
  
  param
    db_date (timestamp/ varchar): date returned from db
    timezoneOffset (int): local timezone offset resulted from getTimezoneOffset()
  
    return
    date object in local time
*/
function convertNonTimeZonedDate(db_date, timezoneOffset) {
  let utc_date = new Date(db_date)
  utc_date.setHours(utc_date.getHours() - timezoneOffset / 60)
  return utc_date 
}
