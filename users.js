async function MethodGetUsers() {
    let line = "<tr style='width: 50%; margin: auto;'>" +
    "<th>№</th>" +
    "<th>Name</th>" +
    "<th>Title</th>" +
    "<th>Completion</th>" + 
    "</tr>"
    
    $("table thead").append(line)
    
    var xhr_U = new XMLHttpRequest()    

    xhr_U.open("GET", "https://jsonplaceholder.typicode.com/users")
    xhr_U.send()
    
    var xhr_TD = new XMLHttpRequest()

    xhr_TD.open("GET", "https://jsonplaceholder.typicode.com/todos")
    xhr_TD.send()
    
    xhr_U.onload = function() {
        let response_u = JSON.parse(xhr_U.response)

        xhr_TD.onload = function() {
            let response_td = JSON.parse(xhr_TD.response)

            response_u.forEach((user, index) => {
                let mixed = response_td.filter(todo => todo.userId === user.id)    

                mixed.forEach((mixed) => {
                    let row = "<tr>"
                    row += "<th>"+index+"</th>"
                    row += "<th>"+user.name+"</th>"
                    row += "<th>"+mixed.title+"</th>"
                    row += "<th><input type='checkbox' " + (mixed.completed ? 'checked' : '') + " disabled></th>"
                    row += "</tr>"

                    $("table tbody").append(row)
                  })        
            })
        }
    }
}            