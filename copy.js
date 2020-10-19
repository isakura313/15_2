//нужно провести копию
let arr = [1,2,3,4];
// как сделать копию
let arr_copy= [];
for(let i = 0; i < arr.length; i++){
    arr_copy.push(arr[i]);
}
console.log(arr_copy); // независимая копия
// очень длинный вариант
//использования slice
let arr_copy_2 = arr.slice() // вариант копирования
arr_copy_2.push(5)
console.log(arr)
console.log(arr_copy_2)

// современные варианты копирования
let arr_copy_3 = arr.map(el => el);
arr_copy_3.push(6)
console.log(arr_copy_3)
// самый хороший способ
let arr_copy_4 = [...arr];
console.log(arr_copy_4)

