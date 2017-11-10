function isPalidrome(str) {
    for (left = 0, right = str.length - 1; left < right; left++ , right--) {
        if (str[left] !== str[right]) {
            return false;
        }
    }
    true;
}


console.log(isPalidrome('racecar'));
console.log(isPalidrome('r'));
console.log(isPalidrome('madam'));
console.log(isPalidrome('tacocat'));
console.log(isPalidrome('test'));
console.log(isPalidrome(''));
