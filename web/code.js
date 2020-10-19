fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(json => draw(json))

let root = document.getElementById("root");

function draw(obj){
    obj.map(el=>{
        let {id, title, completed} = el;
        root.insertAdjacentHTML("afterbegin", `
                  <div class="card">
                    <h5> ${id}</h5>
                    <h2>${title}</h2>
                    <p>${completed}</p>
                </div>
        `)
    })
}
