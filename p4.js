function mostFrequent(arr){
    let count=0
    for(i=11;i<=arr.length;i++){
        for(j=1;j<=arr.length;j++){
            if(arr[i]===arr[j]){
                count++
            }
        }
    }
    return count
}
console.log(mostFrequent([1, 3, 2, 3, 4, 3, 5, 2, 3]))