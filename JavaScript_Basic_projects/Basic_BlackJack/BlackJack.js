/* 
    Funciton Description : implentaion of function ran()
    Function returns a random Nubmer between 1 and 5
    in each call it will return a diffrent number
 */

// function    getRandomCard()
// {
//     let card

//     if (i === 0)
//     card = randomNbrs[randomNbrs.length - 1]
//     randomNbrs.pop()
//     i++
//     if (i === 20)
//         i = 0 
//     return (card)
// }

let sum
let wonBlackJack = 0
let losBlackJack = 0
let isAlive = false
let message = ""
let cardsArr
let i = 0
let player = {
    Name : "Aissam",
    Balance: 150,
} 

let gameStatus
let cards
let sumEl
let blackJack
let disPlayer


gameStatus = document.getElementById("Message-el")
cards = document.getElementById("Cards")
sumEl = document.getElementById("Sum")
blackJack = document.getElementById("BlackJacks")
disPlayer = document.getElementById("PlayerStat")




// Practicing objects:

/*
 This function return a random number between 0 and 5,
 using the object Math
 random () = returns a random number between 0 and 1
 floor () = converts a floot nubmer to decimal
*/

function    restartGame()
{
    cardsArr = [randomNumber(), randomNumber()]
    sum = cardsArr[0] + cardsArr[1]
    player.Balance = 150
    message = "Want to play a round?"
    gameStatus.textContent = message
    cards.textContent = "Cards: "
    sumEl.textContent = "Sum: "
    blackJack.textContent = "No BlackJack"
}

function    randomNumber()
{
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1)
        return (11)
    if (randomNumber >= 10 && randomNumber <= 13)
        return (10)
    return (randomNumber)
}

function    newCard()
{
    if (isAlive === true)
    {
        cardsArr.push(randomNumber())
        sum += cardsArr[cardsArr.length - 1]
        renderGame()
        cards.textContent += " - " + cardsArr[cardsArr.length - 1]
    }
}

function    renderGame()
{
    if (sum < 21)
        message = "Do you want to draw a new card?"
    else if (sum === 21)
    {
        wonBlackJack++
        player.Balance += 50
        blackJack.textContent = "You've got the BlackJack:  " + wonBlackJack + "  Times"
        message = "Congratulations, you've got the blackJack!"
    }
    else
    {
        isAlive = false
        player.Balance -= 50
        losBlackJack++
        message = "You're out of the Game!"
    }
    sumEl.textContent = "Sum: " + sum
    gameStatus.textContent = message
}

function    startGame()
{   
    cardsArr = [randomNumber(), randomNumber()]
    sum = cardsArr[0] + cardsArr[1]
    cards.textContent = "Cards: " + cardsArr[0] + " - " + cardsArr[1]
    isAlive = true
    disPlayer.textContent = player.Name + ": $" + player.Balance
    renderGame()
}

// let arrStr = [
//     "C language",
//     "Bash",
//     "Linux OS",
//     "Git",
//     "Github",
//     "HTML",
//     "CSS",
//     "JAVASCRIPT"
// ]
// let renderArray

// renderArray = document.getElementById("renderArr")

// let i = 0

// while (arrStr[i])
// {
//     renderArray.textContent += " - " + arrStr[i]
//     i++
// }

// let roundOne = 105
// let roundTwo = 120

// function    raceTimeCalcul()
// {
//     if ((roundOne + roundTwo) == 225)
//         return (roundOne + roundTwo)
//     else
//         return("Non Valid time")
// }

// let totalTime = raceTimeCalcul()

// console.log(totalTime)