

/// creting a function called save() that save the log of count variable when it's called //////
let count = 0
let DisCounter
let DisLog
let DiSaved
let CountStr

DisCounter = document.getElementById("Counter")
DisLog = document.getElementById("LogDis")
DiSaved = document.getElementById("SavedValues")

function    reset()
{
    count = 0
    DisCounter.innerText = count
}

function    save()
{
    CountStr = count + " - "
    DiSaved.textContent += CountStr
}

function    increment()
{
    count++
    DisCounter.innerText = count
}

