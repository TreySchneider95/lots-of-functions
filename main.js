function sayHi(str){
    // return with interpolation
    return `Hi ${str}`
}
function bigString(strOne, strTwo){
    // casting to variables so I do not have to call the length function multiple times
    let l1 = strOne.length
    let l2 = strTwo.length
    //     Check if same length     else if one is bigger  else two
    return l1 === l2 ? "Same length" : l1 > l2 ? strOne : strTwo
}
function bigNumber(numOne, numTwo){
    //    check if one is bigger     else if equal                else two
    return numOne > numTwo ? numOne : numOne === numTwo ? "Equal" : numTwo
}
function fiveMore(arr){
    //    loop array    check for odd  add 5  or not
    return arr.map((x)=>(x % 2 !== 0 ? x + 5 : x))
}
function arraySummer(arr){
    // used reduce to add array     added default for empty list
    return arr.reduce((x,y) => (x + y), 0)
}
function everyDivisible(num){
    // fist num must be number given
    counter = num
    // check for invalid input
    if(num >= 10){
        console.log("error number must be less than 10")
    }else{
        // loop until 100
        while(counter < 100){
            console.log(counter)
            // next num must be counter plus number
            counter += num
        }
    }
}
console.log(sayHi("Trey"))
console.log(bigString("Hi", "hi"))
console.log(bigString("Hello", "hi"))
console.log(bigString("Hi", "hello"))
console.log(bigNumber(10, 2))
console.log(bigNumber(2, 10))
console.log(bigNumber(10, 10))
console.log(fiveMore([1,2,3,4]))
console.log(arraySummer([1,2,3,4]))
everyDivisible(7)