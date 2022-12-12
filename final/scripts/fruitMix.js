fetch("scripts/fruits.json")
.then(function(resp) { return resp.json() }) // Convert data to json
.then(function (jsonObject) {
    fruits = jsonObject;
    fruits.forEach(postFruitData);
})
.catch(function() {
    // catch any errors
});

const drinkNutritionTable = document.getElementById("mix-nutrition-table");
const drinkTable = document.getElementById("mix-list-table");
const drinkTableScrollableDiv = document.getElementById("mix-list-inner-div");
const drinkTableSelected = document.getElementsByClassName("selected");
const drinkForm = document.getElementById("mix-form");
const drinkFormReset = document.getElementById("mix-form-reset");
const fruit1 = document.getElementById("fruit-1");
const fruit2 = document.getElementById("fruit-2");
const fruit3 = document.getElementById("fruit-3");
const fruitNames = 1;
const carbs = 2;
const fat = 3;
const protein = 4;
const sugar = 5;
const calories = 6;
const grams = 7;
const specialInstructions = 8;
const date = 9;
const email = 10;
const cellPhone = 11;
const userName = 12;

function postFruitData (fruit) {
    let newFruit1 = document.createElement('option');
    let newFruit2 = document.createElement('option');
    let newFruit3 = document.createElement('option');
    newFruit1.innerText = fruit.name;
    newFruit2.innerText = fruit.name;
    newFruit3.innerText = fruit.name;
    fruit1.appendChild(newFruit1);
    fruit2.appendChild(newFruit2);
    fruit3.appendChild(newFruit3);
    
}

function CalculateMix() {
    if (isFormValid()) {
        const drink_selection = [];
        drink_selection[date] = new Date().getTime();
        drink_selection[userName] = document.getElementById("user-name").value;
        drink_selection[email] = document.getElementById("email").value;
        drink_selection[cellPhone] = document.getElementById("cell-phone").value;
        drink_selection[specialInstructions] = document.getElementById("special-instructions").value;
        drink_selection[fruitNames] = "";
        drink_selection[carbs] = 0;
        drink_selection[protein] = 0;
        drink_selection[fat] = 0;
        drink_selection[sugar] = 0;
        drink_selection[calories] = 0;
        drink_selection[grams] = 0;
        const fruitSelectionList = [fruit1,fruit2, fruit3];
        fruitSelectionList.forEach((item) => {
            if (item.selectedIndex != 0) {
                const currentFruit = fruits[item.selectedIndex - 1];
                const currentCarbs = currentFruit.nutritions.carbohydrates;
                const currentProtein = currentFruit.nutritions.protein;
                const currentFat = currentFruit.nutritions.fat;
                const currentSugar = currentFruit.nutritions.sugar;
                const currentCalories = currentFruit.nutritions.calories;
                
                drink_selection[fruitNames] += currentFruit.name + " ";
                drink_selection[carbs] += (currentCarbs);
                drink_selection[protein] += (currentProtein);
                drink_selection[fat] += (currentFat);
                drink_selection[sugar] += (currentSugar);
                drink_selection[calories] += (currentCalories);
                drink_selection[grams] += (100);

            }
        })
        ratio = 450 / drink_selection[grams];
        drink_selection[carbs] = Math.round(drink_selection[carbs] * ratio);
        drink_selection[protein] = Math.round(drink_selection[protein] * ratio);
        drink_selection[fat] = Math.round(drink_selection[fat] * ratio);
        drink_selection[sugar] = Math.round(drink_selection[sugar] * ratio);
        drink_selection[calories] = Math.round(drink_selection[calories] * ratio);
        drink_selection[grams] = Math.round(drink_selection[grams] * ratio);
        let drinkList = localStorage.drinkList;
        if (drinkList != null) {
            drinkList = JSON.parse(drinkList);
            drinkList.push(drink_selection);
        }
        else {
            drinkList = [drink_selection];
        }
        localStorage.drinkList = JSON.stringify(drinkList);
        localStorage.numDrinks = drinkList.length;
        loadMixTable();
        //selects the last row in the table.
        drinkTable.lastChild.click();
        // brings the latest drink mix into view for the user
        drinkTableScrollableDiv.scrollTo(0,drinkTable.scrollHeight);
    }
}

function isFormValid() {
    if (fruit1.selectedIndex != 0) {
                return true;
    } else {
        return false;
    }
}

function loadMixTable() {
    let drinkList = [];
    drinkTable.innerHTML = "";
    const drinkObject = localStorage.drinkList 
    if (drinkObject != null) {
        drinkList = JSON.parse(localStorage.drinkList);
    } else {
    }
    drinkList.forEach((drink, index) => {
        let drinkRow = document.createElement('tr');
        drinkRow.addEventListener("click", function () {
            const rowNumber = parseInt(this.children[0].innerText);
            this.classList.add("selected")
            getSiblings(this).forEach((item) => {
                item.classList.remove("selected");
            });
            loadNutritionData(rowNumber);
        })
        let drinkNumber = document.createElement('td');
        drinkNumber.innerHTML = "<p>" + (index + 1) + "</p>";
        let drinkName = document.createElement('td');
        drinkName.innerHTML= "<p>" + drink[fruitNames] + "</p>";
        drinkRow.appendChild(drinkNumber);
        drinkRow.appendChild(drinkName);
        drinkTable.appendChild(drinkRow);
    })
}

function loadNutritionData(value) {
    let drinkList = JSON.parse(localStorage.drinkList);
    const drink = drinkList[value - 1]
    drinkDate = new Date(parseInt(drink[date])).toDateString();
    document.getElementById("date-cell").innerHTML = "<p>" + drinkDate +"<p>";
    document.getElementById("username-cell").innerHTML = "<p>" + drink[userName] + "</p>";
    document.getElementById("user-email-cell").innerHTML = "<p>" + drink[email] + "</p>";
    document.getElementById("user-phone-cell").innerHTML = "<p>" + drink[cellPhone] + "<p>";
    document.getElementById("special-instructions-cell").innerHTML = "<p>" + drink[specialInstructions] + "</p>";
    document.getElementById("fruit-names-cell").innerHTML = "<p>" + drink[fruitNames]+ "</p>";
    document.getElementById("carbs-cell").innerHTML = "<p>" + drink[carbs] + "</p>";
    document.getElementById("protein-cell").innerHTML = "<p>" + drink[protein] + "</p>";
    document.getElementById("fat-cell").innerHTML = "<p>" + drink[fat] + "</p>";
    document.getElementById("sugar-cell").innerHTML = "<p>" + drink[sugar] + "</p>";
    document.getElementById("calories-cell").innerHTML = "<p>" + drink[calories] + "</p>";
    document.getElementById("grams-cell").innerHTML = "<p>" + drink[grams] +"<p>";
}

let getSiblings = function (e) {
    let siblings = []; 
    if(!e.parentNode) {
        return siblings;
    }
    let sibling  = e.parentNode.firstChild;
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};
loadMixTable();
// Activates when button is clicked
const calcDrinkButton = document.getElementById("mix-info-button");
calcDrinkButton.onclick = CalculateMix;
const clearFormButton = document.getElementById("clear-form-button");
//const clearDrinks = document.getElementById("mix-drink-reset")
//clearDrinks.onclick = localStorage.clear();