/*
Problem Description:
Given an array arr of numbers, determine the maximum value in the array.

Algorithm:
Create a variable, set variable as first element in array, compare variable with 
each element in array, update variable if an element is bigger than current varible
else leave it as it is. when it's the end of the array, return the variable as max


Big O:

Time complexity => O(n)
Space complexity => O(1)

*/

//Code

function findMaxArray(arr) {
    //base cases
    if (arr.length === 1) {
        return arr[0]
    }
    
    //cache variable
    let max_element = 0;

    for (let num of arr) {
        if ( num === null ) { max_element = max_element}
        if ( num <= max_element )  { max_element = max_element }
        if ( num > max_element ) { max_element = num }
    }

    return max_element

}

console.log(findMaxArray([1,4,17,9])) //Expected output: 17
console.log(findMaxArray([0])) //Expected output: 0
console.log(findMaxArray([3,12])) //Expected output: 12 
