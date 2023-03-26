
let hours
let minutes
let seconds
let h
let m
let s

hours = document.getElementById("Hours")
minutes = document.getElementById("Minutes")
seconds = document.getElementById("Seconds")
h = 0
m = 0
s = 0

function    rendering()
{
    if (h < 10)
        hours.textContent = "0" + h + " : "
    else if (h >= 10)
        hours.textContent = h + " : "
    if (m < 10)
        minutes.textContent = "0" + m + " : "
    else if (m >= 10)
        minutes.textContent = m + " : "
    if (s < 10)
        seconds.textContent = "0" + s
    else if (s >= 10)
        seconds.textContent = s
}


function    startCount()
{
    while (h < 60)
    {
        while (m < 60)
        {
            while (s < 60)
            {
                rendering(h, m, s)
                /// Add function to sleep One second then go to next iteration.
                s++;
            }
            s = 0;
            m++;
        }
        m = 0;
        h++;
    }
}

//// add pause funciton 

//// add reset function / stop function


//// Add countDown 
