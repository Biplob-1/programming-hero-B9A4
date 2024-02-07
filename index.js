/*
    1.create a function calculateMoney()
    2. function will recive a parameter which will be a number which is a ticket sell quantity 
    3.sell quantity must be 0<=input
    4. per ticket price 120 taka
    5. total 9 staf
        a. staf one per day salary 500 taka
        b. other staf per day salary 80 taka
        c. total
    6. calclute this it will be benefit or loss doesnt mater
    7. return the result 
    9.result can be negitive or positive 
    10. if the parameter recive negetive number it will be return an error

*/

function calculateMoney(ticketSale) {
    // console.log(ticketSale);
    if (ticketSale < 0 || typeof ticketSale !== 'number') {
        return `Invalid Ticket Quantity`;
    }
    const ticketPrice = 120 ;
    const guardSalary = 500;
    const lunchFee = 50;
    const stafs = 8;

    const totalLunchFee = lunchFee * stafs;
    const totalRevenue = ticketPrice * ticketSale;
    const totalSalary = guardSalary + totalLunchFee;

    const result = totalRevenue - totalSalary;
    return result;
}

// const ticketQuantity = 93;
// const result = calculateMoney(ticketQuantity);
// console.log(result);
/*
 1.create a function checkName()
    2. function will recive a parameter which will be a string  
    3. if input type is not string return 'Invalid'
    3. if string last character [A, e, i, o, u, y , w] return 'Good name' otherwise return 'Bad name'
    4. string character can be uppercase or lowercase
 
 */
function checkName(name) {
    // console.log(name);
    if (typeof name !== 'string'){
        return `invalid`;
    }

    const character = ['A', 'y', 'i', 'e', 'o', 'y', 'w'];

    const lowercaseName = name.toLowerCase();
    const upercaseName = name.toUpperCase();

    const lastCharacterLowerCase = lowercaseName.substr(-1);
    const lastCharacterUpperCase = upercaseName.substr(-1);

    if(character.includes(lastCharacterLowerCase) || character.includes(lastCharacterUpperCase)){
        return `Good Name`;
    }
    return `Bad Name`;
}

// const input = 'RAFEE' ;
// const result = checkName(input);
// console.log(result);
// console.log(typeof(result));

/*
 1.create a function deleteInvalids()
    2. function will recive a parameter which will be an array  and input data type will be any type
    3. function will return an arrry 
        a. inside the arry the return data type will be only number 
        b. other datatype must be remove
    4. if input type is not an array return 'Invalid'
*/
function deleteInvalids(array) {
    // console.log(array);
    if(!Array.isArray(array)){
        return `Invalid input: Input must be an Array.`
    }

    let numbers = [];
    for (const arr of array) {
        if(typeof arr === 'number' && !isNaN(arr)){
            numbers.push(arr);
        }
    }
    return numbers;
}

// const input = [1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }] ;
// const result = deleteInvalids(input);
// console.log(result);

/*
 1.create a function password()
    2. function will recive a parameter which will be an object and object have must three property.
    those are 
        a. name
        b. birthYear
        c. siteName
    3. retun a string which stracture is : 
        1. value of the third property(and first letter will be uppercase) + #
        2. value of the first property + @
        3. value of the second property
    4. if any property missing or bithYear less than 4 digit it will be return 'invalid'
    
*/
function password(obj) {
    const{name, birthYear, siteName} = obj;

    if(typeof birthYear !== 'number' || Object.keys(obj).length !== 3 || typeof name !== 'string' || typeof siteName !== 'string'){
        return `invalid`;
    }
    const firstProperty = name.trim();
    const secondProperty = birthYear.toString().trim();
    const thirdProperty = siteName.trim().charAt(0).toUpperCase() + siteName.slice(1).toLowerCase();
    // return secondProperty.length;
    if(secondProperty.length !== 4){
        return `invalid`;
    }
    
    return `${thirdProperty}#${firstProperty}@${secondProperty}`;
};
// const person ={
//     name: 'kolimuddin',
//     birthYear: 1994,
//     // birthYear: 199,
//     siteName:'facebook' ,
// };
// const result = password(person);
// console.log(result);

/*
 1.create a function monthlySavings()
    2. function will recive two parameter which will be an array and a number
   
*/

function monthlySavings(payments, numbers) {
    
}
const payments = [1000, 2000, 3000];
const numbers = 5400;