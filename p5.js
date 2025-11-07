function getAverage(obj){
    let mark=obj.marks
    let sum=mark.reduce((acc,curr)=> acc + curr,0);
    let avg=sum/mark.length
    return avg
}
console.log( getAverage({name: "John", marks: [25, 45, 10, 30] }) )         