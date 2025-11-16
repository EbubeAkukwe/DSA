/*
Problem Desciption:
Given an array of integers nums and an integer target, return the indices of the two numbers such
that they add up to the target.

Algorithm:
For each number in the array, start loop from current index to see if the number at the current index adds up with any other
number in the array, if it does return positions of both numbers, else shift the current index and 
loop through again starting from the new index, until the index is the end of the array, meaning
there is no more numbers left. Its a simple soluion using combinatorics.

Big O: 

Time complexity => O(n)
Space complexity => O(n)

*/
function twoSum(array, target) {

sumArray = [null];
arrayLength = array.length;

for (let num of array) {
    let i = array.indexOf(num)
    let j = i + 1
    while (j <= (arrayLength-1)) {
        if (array[i] + array[j] === target) {
            sumArray = [i, j]
            return sumArray
        }
        j++
    }
}

return [];
}

//Test Cases

console.log(twoSum([2,7,11,15], 9)) //expected output: [0, 1]
console.log(twoSum([1,2,3,4,5], 5)) //expected output: [0, 3] or [1, 2]
console.log(twoSum([0,3,4,5,8,1], 7)) //expected ouput: [1, 2]
console.log(twoSum([1,2,3,4,5], 12)) //expected output: []