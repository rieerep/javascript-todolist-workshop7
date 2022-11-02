let url = "data.json"

async function getToDo() {

    let response = await fetch (url);
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let data = await response.json();
        console.log(data)
        console.log(data.todolist[0].name);
        let todos = data.todolist;
        console.log(typeof todos);

        /* for (let i = 0; i < todos.length; i++){
            console.log('i', i)
            let li = document.createElement("li");
            li.innerHTML = data[i].
            console.log('li: ', li)

        } */
        

        // gives us the json of the response body


} else {
 console.log("HTTP-Error: " + response.status);
}
}

getToDo();