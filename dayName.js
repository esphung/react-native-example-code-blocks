const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]


const d = new Date();
const dayName = days[d.getDay()];

const abbreviatedDayName = dayName.substring(0, 3)

console.log('abbreviatedDayName: ', abbreviatedDayName);