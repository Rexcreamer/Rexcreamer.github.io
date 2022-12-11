function getFruit(fruit) {
    fetch("final/scripts/fruits.json")
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        console.log(data);
    })
    .catch(function() {
        // catch any errors
    });
}

window.onclick = function() {
    
}