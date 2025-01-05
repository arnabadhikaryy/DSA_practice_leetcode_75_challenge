/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    let max = Math.max(...candies);
    candies.map((currentValue, index)=>{
        if(currentValue+extraCandies >= max){
            result.push(true)
        }
        else{
            result.push(false)
        }
    })
    return result;
};
candies = [4,2,1,1,2]; extraCandies = 1
console.log(kidsWithCandies(candies,extraCandies))
