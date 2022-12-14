const dateCha = document.getElementById("datetod");
const dateYear = document.getElementById("yearnow");
const dateCha2 = document.getElementById("datetod2");
const dateYear2 = document.getElementById("yearnow2");

const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
};

const yearOptions = {
    year: "numeric",
};

dateCha.textContent = new Date().toLocaleDateString("en-US", options);
dateCha2.textContent = new Date().toLocaleDateString("en-US", options);
dateYear2.textContent = new Date().toLocaleDateString("en-US", yearOptions);