let dateCha = document.getElementById("datetod")
let dateYear = document.getElementById("yearnow")
const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
}
const yearOptions = {
    year: "numeric",
}
dateCha.textContent = new Date().toLocaleDateString("en-US", options)
dateYear.textContent = new Date().toLocaleDateString("en-US", yearOptions)
