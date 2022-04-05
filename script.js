
let area = [2, 4, 8, 10]

function sum(areaArray) {
    let num = 0
    for (
        let i =0; i < areaArray.length; i ++
    ) {
        num += areaArray[i]
    }

    return num;

}

console.log(sum(area))