/*
Problem Description:
Given an array arr and a sub array sun_arr, determine the sum of the sub array

Algorithm:
find the sub array, copy it into a variable, calculate the sum of the elements in the
sub arrar using a for loop

Big O:

Time complexity => O(n)
Space complexity => O(1)

*/

//Code

function sumArray(arr) {
    let sum = 0
    for (num of arr) {
        sum += num
    }

    return sum
}

function subArraySum(arr) {
    for (let element of arr) {
        if (element[1] != null && element.length === 1) {
            return element 
        } 
        if (element[1] != null && element.length >= 2) {
            return sumArray(element)
        }
    }
    return "Subarray not found"
}

//Test cases
console.log(subArraySum([1,2,3,[4,3,2,5],7,9])) //Expected output: 14
console.log(subArraySum([[1,0,2,5],7,9])) //Expected output: 8