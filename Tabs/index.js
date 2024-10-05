let aboutTab = document.getElementById("aboutTab")
let timeToVisitTab = document.getElementById("timeToVisitTab")
let attractionsTab = document.getElementById("attractionsTab")

let aboutButtonEl = document.getElementById("aboutButton")
let timeToVisitButtonEl = document.getElementById("timeToVisitButton")
let attractionsButtonEl = document.getElementById("attractionsButton")

timeToVisitTab.classList.add("d-none")
attractionsTab.classList.add("d-none")

function aboutButton(){
    aboutTab.classList.remove("d-none")
    timeToVisitTab.classList.add("d-none")
    attractionsTab.classList.add("d-none")
    
    aboutButtonEl.classList.add("selected-button")
    timeToVisitButtonEl.classList.remove("selected-button")
    attractionsButtonEl.classList.remove("selected-button")
}

function timeToVisitButton(){
    aboutTab.classList.add("d-none")
    timeToVisitTab.classList.remove("d-none")
    attractionsTab.classList.add("d-none")
    
    aboutButtonEl.classList.remove("selected-button")
    timeToVisitButtonEl.classList.add("selected-button")
    attractionsButtonEl.classList.remove("selected-button")
    
}

function attractionsButton(){
    aboutTab.classList.add("d-none")
    timeToVisitTab.classList.add("d-none")
    attractionsTab.classList.remove("d-none")
    
    aboutButtonEl.classList.remove("selected-button")
    timeToVisitButtonEl.classList.remove("selected-button")
    attractionsButtonEl.classList.add("selected-button")
    
}