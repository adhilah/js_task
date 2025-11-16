// function minMax(arr){
//     for(let i of arr){
//         for(let j of arr){
//             if(arr[i]==arr[j]){

//             }
//         }
//     }
// }


// =====================================

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
console.log(minMax([1, 2, 3, 4, 5]))