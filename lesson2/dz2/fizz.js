for (let i = 1; i<101; i++){
    if (i % 3 === 0 ){
        console.log(i + " Fizz")  // i + чтобы не запутаться
    }
    else if (i % 5 === 0){
        console.log(i + " Buzz")
    }
    if (i % 15 ===  0){
        console.log( i + " FizzBuzz")
    }
    console.log(i)
}