const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-conv")
const volumeEl = document.getElementById("volume-conv")
const massEl = document.getElementById("mass-conv")
const decimals = 3

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
    convertedMeters = (value*3.281).toFixed(decimals)
    convertedFeet = (value/3.281).toFixed(decimals)
}
function convertVolume() {
    convertedLiters = (value*0.264).toFixed(decimals)
    convertedGallons = (value/0.264).toFixed(decimals)
}

function convertMass() {
    convertedKilograms = (value*2.204).toFixed(decimals)
    convertedPounds = (value/2.204).toFixed(decimals)
}

function createStrings() {
    lengthStr = `${value} meters = ${convertedFeet} feet | ${value} feet = ${convertedMeters} meters`
    volumeStr = `${value} liters = ${convertedGallons} gallons | ${value} gallons = ${convertedLiters} liters`
    massStr = `${value} kilos = ${convertedPounds} pounds | ${value} pounds = ${convertedKilograms} kilos`
}

function parseStrings () {
    lengthHTMl = ``
}


function changeDOM() {
    lengthEl.innerHTML = lengthStr
    volumeEl.innerHTML = volumeStr
    massEl.innerHTML = massStr
}