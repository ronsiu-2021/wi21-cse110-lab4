function modifyArray(array, callback) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i], x => x * 2));
    }
    return newArr;
}

function doSomething(num, callback) {
    return callback(num + 2);
}

var result = modifyArray([1, 2, 3], doSomething);
console.log(result);