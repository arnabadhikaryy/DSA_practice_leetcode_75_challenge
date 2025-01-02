/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    
    // handle the base case
    if (str1 + str2 !== str2 + str1) return '';
    let a = str1.length
    let b = str2.length
    while (b) {
        let temp = b
        b = a % b
        a = temp
    }
    return str1.substring(0, a)
};






console.log(gcdOfStrings('ABCABC','ABC'))