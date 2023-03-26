////// IMPLEMENTING FIZZBUZZ ////////////////////////////////////
///// if the current i is multiple of 3 print "fizz" ////////////
///// if the current i is multiple of 5 print "buzz" ////////////
///// if the cuurent i is multiple of both print "fizzbuzz" /////
/////////////////////////////////////////////////////////////////

function    fizzBuzz()
{
    let i = 1

    while (i <= 100)
    {
        if ((i % 3) === 0)
            console.log("fizz")
        else if ((i % 5) === 0)
            console.log("buzz")
        else if ((i % 3) === 0 && (i % 5) === 0)
            console.log("fizzbuzz")
        else
            console.log(i)
        i++
    }
}
fizzBuzz()