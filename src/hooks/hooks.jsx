export const sentenceToPascalCase = (sentence) => {
   console.log(sentence);
return sentence.replace(/\b\w/g, l => l.toUpperCase())
}