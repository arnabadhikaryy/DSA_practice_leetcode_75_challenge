/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let w1 = [...word1]
    let w2 = [...word2]
    let result=[]
    let finalResult;

    if(w1.length > w2.length){
      for(i=0;i<=w1.length;i++){
        if(w1[i] != undefined){
      result.push(w1[i]);
        }
      if(w2 != undefined){
        result.push(w2[i])
      }
      }
    }
    else if(w1.length < w2.length){
      for(i=0;i<=w2.length;i++){
      if(w1[i] != undefined){
      result.push(w1[i]);
        }
      if(w1 != undefined){
        result.push(w2[i])
      }
      }
    }
    else {
        for(i=0;i<=w2.length;i++){
         if(w1[i] != undefined){
      result.push(w1[i]);
        }
         if(w2[i] != undefined){
      result.push(w2[i]);
        }
      }
    }

    for(i=0;i<=result.length;i++){
        if(i==0){
            finalResult  = result[i]
        }
        else if(result[i] != undefined){
           finalResult= finalResult + result[i]
        }
    }

    return finalResult;
};