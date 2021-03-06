var permutationLetters = function (number) {
  var ans = [];
  var letters = 'abcdefghijklmnopqrstuvwxyz';
  // var arrayLetters = letters.split('');

  var generateNames = function (roundsToGo, playedSoFar) {
    playedSoFar = playedSoFar || [];
    if(roundsToGo === 0){
      ans.push(playedSoFar);
      return
    }

    for(var i = 0; i< letters.length; i++){
      var currentLetter = letters[i];
      generateNames(roundsToGo-1, playedSoFar.concat(currentLetter))
    }
  }

  generateNames(number)
  return ans;
};

module.exports = permutationLetters;

// console.log(permutationLetters(2))