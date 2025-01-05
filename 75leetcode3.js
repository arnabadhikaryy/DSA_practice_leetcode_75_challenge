
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {

    let number = 0;
    let final_number = 0;
   
    for(let i=0; i< flowerbed.length; i++){   [1,0,0,0,0,0,1];
        if(number == 3){
            final_number = final_number +1;
            number = 1;
            if(flowerbed[i]==0){
                number = number+1;
            }
        }
        else{
            if (flowerbed[i]==0) {
                number = number +1;
            } else {
                number = 0;
            }
        }
    }

    if (final_number >= n) {
        return true
    } else {
        return false
    }
    
};




let flowerbed = [1,0,0,0,0,0,1];
let n = 2

console.log(canPlaceFlowers(flowerbed,n));