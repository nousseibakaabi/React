// ECMAScript 6 function to find the longest word
export const findLongestWord = (words) => {
    let [firstWord, ...restWords] = words;
  
    const wordsWithLength = words.map(word => ({
      mot: word,
      longueur: word.length
    }));
  
    const longestWord = wordsWithLength.reduce((longest, current) => 
      current.longueur > longest.longueur ? current : longest
    );
  
    return `Le mot le plus long est "${longestWord.mot}" avec une longueur de ${longestWord.longueur} caractères.`;
  };
  