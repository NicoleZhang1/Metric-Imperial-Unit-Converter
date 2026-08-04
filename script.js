const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-conv")
const volumeEl = document.getElementById("volume-conv")
const massEl = document.getElementById("mass-conv")

let convertedMeters = 0
let convertedFeet = 0
let convertedLiters = 0
let convertedGallons = 0
let convertedKilograms = 0
let convertedPounds = 0

let lengthStr = ""
let volumeStr = ""
let massStr = ""

let lengthHTML = ""
let volumeHTML = ""
let massHTML = ""

let value = 0

convertBtn.addEventListener("click", function() {
    value = inputEl.value
    convertLength()
    convertVolume()
    convertMass()
    createStrings()
    parseStrings()
    changeDOM()
})

function convertLength() {
    convertedMeters = value*3.281
    convertedFeet = value/3.281
}
function convertVolume() {
    convertedLiters = value*0.264
    convertedGallons = value/0.264
}

function convertMass() {
    convertedKilograms = value*2.204
    convertedPounds = value/2.204
}

function createStrings() {
    lengthStr = `${value} meters = ${convertedFeet} feet | ${value} feet = ${convertedMeters} meters`
    volumeStr = ``
    massStr = ``
}

function parseStrings () {
    
}


function changeDOM() {
    lengthEl.innerHTML = lengthHTML
    volumeEl.innerHTML = volumeHTML
    massEl.innerHTML = massHTML
}