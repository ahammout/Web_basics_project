
let OpOne
let OpTwo
let Result
let Op1 = 67
let Op2 = 8

OpOne = document.getElementById("Op1")
OpTwo = document.getElementById("Op2")
Result = document.getElementById("Res")

OpOne.innerText = Op1
OpTwo.innerText = Op2

function    add()
{
    Result.textContent = "Result: " + (Op1 + Op2)
}

function    sub()
{
    Result.textContent = "Result: " + (Op1 - Op2)
}

function    mult()
{

    Result.textContent = "Result: " + (Op1 * Op2)
}

function    div()
{
    Result.textContent = "Result: " + " " + (Op1 / Op2)
}