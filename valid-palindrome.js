/*
Problem Description:
Given a string s, determine if it is a palindrome, considering only
alphanumeric characters and ignoring cases.
A palindrome reads the same forwards and backwards.

Algorithm:
First convert to all lowercase since it's not case sensitive, and removing
every non alphanumeric input, reverse and check if the reversed string is the
same as the string s

Big O:

Time complexity => O(n)
Space complexity => O(2)

*/

//Code

function validPalindrome(s) {
    s = string.toLowerCase();
    new_s = s.replace(/[^a-z0-9]/gi, '');
    reversed_s = new_s.split('').reverse().join('');

    if(reversed_s === new_s) {
        return true
    }
    else {
        return false
    }
}

//Test Cases

console.log(validPalindrome('ebube')) //Expected output :True
console.log(validPalindrome('eb&ube')) //Expected output :True
console.log(validPalindrome('eb13131be')) //Expected output: True
console.log(validPalindrome('jask11kasj')) //Expected output: False
console.log(validPalindrome('jask!11kasj')) //Expected output: False