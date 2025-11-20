// function objectValuesToArray(object) {
//     let array = []
//     let arr = ""
//     for (let key in object) {
//         array.push(object[key])
//     }
//     return array
// }
// console.log(objectValuesToArray({ name: "Athila", age: 21, place: "kannur" }))



// -------------------------------------------------------------

// function arrayOfMultiples(num, length){
//     let array=[]
//     for(i=1; i<=length;i++){
//        let sum=num*i
//        array.push(sum)
//         }
//         return array
// }
// console.log(arrayOfMultiples(3,6))


// --------------------------------------------

// function evenKeys(obj){
//     let arr=[]
//     for(let key in obj){
//         if(obj[key]%2==0){
//             arr.push(key)
//         }
//     }
//     return arr
// }
// console.log(evenKeys({ a: 2, b: 5, c: 8 }))

// +++++++++++++++++++++++++++++++
function operations(arr){
    for(let key of arr){
        if("++X"||"X++"){
            return 1 
        }
        return 0
    }
}
console.log(operations(["++X","++X","X++"]))