/**
 * 1. Write a method to reverse a string; Function should return the string 'This is not a string'
 * if a number is passed
 * @param {string} str
 */
function reverseString(str) {
  if (typeof str === 'number') {
    return 'This is not a string';
}

return str.split('').reverse().join('');
}

/**
 * 1. Calculate a century by given year
 * if a number is passed
* @param {number} year
*/
function centuryFromYear(year) {
  return parseInt(year / 100 + 1);
}

/**
 * Calculate count of the provided char in the string
 * @param {string} str
 * @param {string} char
 */
function strCount(str, char) {
  let count = 0;
 
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
 
    return count;
}

/**
 * We need to reduce the length of the string or truncate it if it is longer
 * than the given maximum length specified and add ... to the end. If it is not that long then we keep it as is.
 * @param {string} str - the initial string
 * @param {num} num - by wht amount of chars it should be truncated
 */
function truncateString(str, num) {
  let truncatedString = str;
 
    if (truncatedString.length > num) {
        truncatedString.slice(0, num);
        truncatedString += '…';
    }
 
    return truncatedString;
}

/**
 * replace 10 with 'ten' word
 * @param {string} text - input text
 * @return {string} - updated text
 * @example
 * console.log(replace10("231054")) // 23ten54
 */
function replace10(text) {
  if (text.includes('10')) {
    return text.replace('10', 'ten');
}

return text;
}

/**
 * replace value in square brackets with CONFIDENTIAL
 * @param text - input text
 * @return {string} - updated string
 * @example
 * console.log(replaceConfidential("lorem [ipsum] si dolor")) // lorem [CONFIDENTIAL] si dolor
 */
function replaceConfidential(text) {
  const start = text.indexOf('[');
  const end = text.indexOf(']');

  const result = text.substr(0, start + 1) + 'CONFIDENTIAL' + text.substr(end, text.length);
  return result;
}

module.exports = {
  reverseString,
  centuryFromYear,
  strCount,
  truncateString,
  replace10,
  replaceConfidential
};
