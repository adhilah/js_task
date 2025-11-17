// function timeForMilkAndCookies(date) {
//   return date.getMonth() === 11 && date.getDate() === 24;
// }

// =====================================

function  timeForMilkAndCookies(dat) {
    const[year,month,date]=dat
   return  month== 11 && date==24
}
console.log(timeForMilkAndCookies([2025,10,24]))