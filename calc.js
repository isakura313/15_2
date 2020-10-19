let data = "14 + 14 - 21";


// задача - написать парсер, который выполнит это выражение
// console.log(eval(data));
function parser(str) {
    let data_array = str.split("")
    data_array.map(el =>{
        if(Number.isNaN(+el)){
            // добавить библиотеку операторов
            console.log("не число");
        }else if(el === " "){
            console.log("это пробел");
        }
        else{
            console.log("число");
        }
    })
    // return result;
}
parser(data);
