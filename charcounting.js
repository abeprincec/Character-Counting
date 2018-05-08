function countLetters(string) {
  var noSpaces = [...string.split(' ').join('')];

  //console.log(noSpaces);
  var counts = {};

  var count;

  for (var i = 0; i < noSpaces.length; i++) {
    var char = noSpaces[i];

    count = counts[char];

    counts[char] = count ? count + 1 : 1;
  }

//   for (let [key, value] of Object.entries(counts)) {
//       console.log(key, ":" , value)
//   }

  return counts;
}

console.log(countLetters('lighthouse in the house'));
