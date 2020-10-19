// анаграммы - выявить, являются ли слова анараммами друг друга

// Лунь
// нуль
// Воз
// зов

// алгоритм решения анаграмм
let a = "зов";
a = a.toLowerCase().split("").sort()
console.log(a)
function anagram_test(first, second) {
    return first.toLowerCase().split("").sort().join() === second.toLowerCase().split("").sort().join();
}

console.log(anagram_test("Лунь", "нуль"))
let arr = {};
if(Array.isArray(arr)){
    console.log("Это массив");
}
