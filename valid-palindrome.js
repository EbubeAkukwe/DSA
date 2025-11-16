/*
Problem Description:
Given a string s, determine if it is a palindrome, considering only
alphanumeric characters and ignoring cases.
A palindrome reads the same forwards and backwards.

Algorithm:
Solution 1: First convert to all lowercase since it's not case sensitive, and removing
every non alphanumeric input, reverse and check if the reversed string is the
same as the string s

Solution 2: Take two pointers one starting at first index and the other
starting at the last, compare to see if the letter or number at the
two pointers are the same, if it is move the first pointer to the right by 1
and the second pointer to the left by 1, do so until we find where values
in the pointers don't match or where, the second pointer is at the index value of
half the string length and the first is at the index before it.

Big O:

Time complexity => O(n)
Space complexity => O(2)

*/

//Code

//Solution 1: Using JS inbuilt functions

function validPalindrome(s) {
    s = s.toLowerCase(); //change to lowercase
    new_s = s.replace(/[^a-z0-9]/gi, ''); //remove non alphanumeric characters
    reversed_s = new_s.split('').reverse().join('');

    if(reversed_s === new_s) {
        return true
    }
    else {
        return false
    }
}


//Solution 2: Using two pointers
function loopCheck(string_list) {
    let stringLength = string_list.length;
    
    //base case
    if (stringLength === 1) {
        return true
    }

    for (let letter of string_list) {
        //pointers
        let i = string_list.indexOf(letter);
        let j = string_list.length - 1;

        if (string_list[i] === string_list[j]) {
            string_list = string_list.slice(i+1,j);
            loopCheck(string_list)
        }
        else {
            return false
        }
    }
}
function validPalindrome2(s) {
    s = s.toLowerCase(); //change to lowercase
    let new_s = s.replace(/[^a-z0-9]/gi, ''); //remove non alphanumeric characters
    new_s = new_s.split();

    let stringLength = new_s.length;
    
    //base case
    if (stringLength <= 1) {
        return true
    }

    for (let letter of new_s) {
        //pointers
        let i = new_s.indexOf(letter);
        let j = new_s.length - 1;

        if (new_s[i] === new_s[j]) {
            new_s = new_s.slice(i+1,j);
            loopCheck(new_s)
            return true
        }
        else {
            return false
        }
    }

}

//Test Cases

console.log(validPalindrome2('ebube')) //Expected output :true
console.log(validPalindrome2('eb&ube')) //Expected output :true
console.log(validPalindrome2('eb13131be')) //Expected output: true
console.log(validPalindrome2('jask11kasj')) //Expected output: false
console.log(validPalindrome2('jask!11kasj')) //Expected output: false