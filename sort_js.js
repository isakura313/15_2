let x = [15, 4, 15, 4, 6, 98, 15, 15, 7];
// просто удалить повторящиеся символы

let arr_sort = x.sort((a, b) => a - b);
let revese_arr_sort = arr_sort.reverse()
let sort_arr = [];

for (let n of x) {
    if (!sort_arr.includes(n)) {
        sort_arr.push(n);
    }
}
console.log(arr_sort);
console.log(revese_arr_sort)
console.log(sort_arr)

