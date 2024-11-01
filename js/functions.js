/**
 * Проверяет строку на соответствие допустимой длине.
 * @param {string} string - Строка для проверки.
 * @param {number} length - Допустимая длина строки.
 * @returns {boolean} Прошла ли строка проверку.
 * @author FortySixAnd2
 */
function checkLength (string = '', length = 1) {
  return string.length <= length;
}
checkLength();


/**
 * Проверяет является ли строка палиндромом.
 * @param {string} string - Строка для проверки.
 * @returns {boolean} Является ли строка палиндромом.
 * @author FortySixAnd2
 */
function checkPalindrome (string = '') {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';

  for (let l = normalizedString.length - 1; l >= 0; l--) {
    reversedString += normalizedString[l];
  }

  return normalizedString === reversedString;
}
checkPalindrome();


/**
 * Проверяет является ли строка палиндромом.
 * @param {string} string - Строка для проверки.
 * @returns {boolean} Является ли строка палиндромом.
 * @author spearance
 */
function isPalindrome (string = '') {
  const normalizedString = string.replace(/\s+/g, '').toLocaleLowerCase();
  return normalizedString === [...normalizedString].reverse().join('');
}
isPalindrome();


/**
 * Принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
 * и возвращает их в виде целого положительного числа.
 * Если в строке нет ни одной цифры — возвращает NaN.
 * @param {string} string - Строка для обработки.
 * @returns {number} Целое число, состоящее из цифр в строке.
 * @author FortySixAnd2
 */
function getNumbers (string = '') {
  let numbers = '';
  string = string.toString(); // Преобразуем входной атрибут в строку, чтобы функция обрабатывала и числа.

  for (let l = 0; l < string.length; l++) {
    const parseLetter = parseInt(string[l], 10);
    const isNumber = !Number.isNaN(parseLetter);
    numbers = (isNumber) ? numbers += parseLetter : numbers;
  }

  return (parseInt(numbers, 10));
}
getNumbers();


/**
 * Принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
 * и возвращает их в виде целого положительного числа.
 * Если в строке нет ни одной цифры — возвращает NaN.
 * @param {string} string - Строка для обработки.
 * @returns {number} Целое число, состоящее из цифр в строке.
 * @author spearance
 */
function extractNumbers (string = '') {
  string = string.toString();
  return parseInt(string.replace(/\D+/g, ''), 10);
}
extractNumbers();
