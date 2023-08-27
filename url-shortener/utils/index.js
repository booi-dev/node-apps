function retrieveHalf(inputString) {
  // Calculate the number of characters to retrieve (half of the string length)
  const halfLength = Math.ceil(inputString.length / 2);

  // Create an array of characters from the input string
  const characters = inputString.split("");

  // Shuffle the characters randomly
  for (let i = characters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [characters[i], characters[j]] = [characters[j], characters[i]];
  }

  // Take the first half of the shuffled array and join the characters back to form the result
  const result = characters.slice(0, halfLength).join("");

  return result;
}

module.exports = retrieveHalf;
