
const fetch = require('node-fetch')
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(json=>{
        json.forEach(element=>{
            console.log(element.name)
        })
    })
    .catch(error=>{
        console.log("Error")
    })
