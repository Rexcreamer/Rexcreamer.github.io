const myInput = document.getElementById("favchap");
    const myList = document.querySelector(".list");
    const myButton = document.querySelector("main div button");

    myButton.addEventListener("click", () => {
        if (myInput.value==""){
            return;
        }
        const newItem = document.createElement("li");
        const newButton = document.createElement("button");
        newItem.textContent = myInput.value;
        newButton.textContent = "❌";
        newItem.append(newButton);
        myList.append(newItem);
        newButton.addEventListener("click", () => {
            newItem.remove();
        });
        myInput.value="";  
    });