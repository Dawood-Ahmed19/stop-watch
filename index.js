const number = document.querySelector("#timer")
const stopButton = document.querySelector("#s-btn")
const lapButton = document.querySelector("#l-btn")
const continueButton = document.querySelector("#c-btn")
const divLaps = document.querySelector(".Laps")
const Laps = document.querySelector("#laps")
let lapsCounter = 0

let countWatch = setInterval(() => {
    
    if (number.innerText > 0) number.innerText -= 1
    
}, 1000);

continueButton.addEventListener("click", function () {
    setInterval(() => {

        if (number.innerText > 0) number.innerText -= 1
        
    }, 1000);
})

stopButton.addEventListener("click", function () {
    clearInterval(countWatch);
})

lapButton.addEventListener("click", function () {
    lapsCounter += 1
    divLaps.innerHTML += `<div class="lap-container">
    <div class="div-lap">
        <h2 id="laps">${lapsCounter}</h2><span>Laps</span>
    </div>
    <div class="div-seconds">
        <h2 id="seconds">${number.innerText}</h2><span>s</span>
    </div>
</div>`
})