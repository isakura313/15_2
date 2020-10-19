let todos = [
    {id: 1, text: "дело 1"},
    {id: 2, text: "дело 2"}
];


let arr = [1, 2, 3, 4];

let arr_square = arr.map((el) => {
    return el ** 2
});

console.log(arr_square)
let result = todos.filter(item => item.id === 1);
console.log(result);



// синтаксис стрелочной функции
let result1 = (x, y) => x * y;

console.log(result1(2,2))
