function operations(arr){
    let init=0
    for(let op of arr)
    if(op.includes("++")){
        init++
    }
    else if(op.includes("--")){
        init--
    }
    return init
}
console.log(operations(["++X","++X","X++"]) )