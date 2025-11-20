function objectValuesToArray(object) {
    let array = []
    let arr = ""
    for (let key in object) {
        array.push(object[key])
    }
    return array
}
console.log(objectValuesToArray({ name: "Athila", age: 21, place: "kannur" }))