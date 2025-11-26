/*
Problem Description:
Given an array arr, reverse the array.

Algorithm:
Create cache array, copy the last element in array to the first position of cache
use pointer and move it from left to right until it gets to beginning of the array, 
then return the cache as the reversed array

Big O:

Time complexity => O(n)
Space complexity => O(1)

*/

//Code

function reverseArray(arr) {
    let cacheArr = [null];
    let n = 0;

    //basecase 
    if (arr.length <= 1) {
        return arr
    }

    for (let i = (arr.length - 1); i >= 0; i--) {
        cacheArr[n] = arr[i];
        n += 1
    }

    return cacheArr
}

//Test Cases

console.log(reverseArray([1,2,1,3])) //Expected output: [3, 1, 2, 1]
console.log(reverseArray([1,2,3,4,5])) //Expected output: [5, 4, 3, 2, 1]
console.log(reverseArray([0,-1])) //Expected output: [-1, 0]
console.log(reverseArray([0])) //Expected output: [0]