// @ts-ignore
import math from 'math-expression-evaluator';

// function replaceAll(string: string, search: string, replacement: string) {
//   return string.split(search).join(replacement);
// }

// function isValidThousandsSeparator(number: string, separator: string) {
//   // More than one thousands separator, it should be thousands separator
//   const parts = number.split(separator);
//   if (parts.length === 1) {
//     return true; // There is no thousands separator
//   }
//   // Invalid thousands separator
//   if (parts[0].length > 3) {
//     return false; // Invalid thousands separator
//   }
//   // Invalid thousands separator
//   for (let i = 1; i < parts.length; i += 1) {
//     if (parts[i].length !== 3) { // Invalid thousands separator
//       return false;
//     }
//   }

//   if (parts[0] === '0') {
//     return false;
//   }
//   return true;
// }

// export function standardize(number: string, locale: string) {
//   const decimalSeparator = locale === 'de' ? ',' : '.';
//   const thousandsSeparator = locale !== 'de' ? '.' : ',';

//   let firstPart = ''; // Part before the first decimal separator
//   let secondPart = ''; // Part after the first decimal separator
//   // If there is (one or more) decimal separator
//   if (number.indexOf(decimalSeparator) > -1) {
//     secondPart = number.substring(number.indexOf(decimalSeparator) + 1);
//     // If there are more than two decimal separators, there should be no thousands separator
//     if (secondPart.indexOf(decimalSeparator) > -1
//       && number.indexOf(thousandsSeparator) > -1) {
//       throw NumberException(number);
//     }
//     // Thousands separator should come before decimal separator
//     if (secondPart.indexOf(thousandsSeparator) > -1) {
//       throw NumberException(number);
//     }
//     firstPart = number.substring(0, number.indexOf(decimalSeparator));
//     // Only one decimal separator => it's decimal separator
//     if (secondPart.indexOf(decimalSeparator) === -1) {
//       // First part contains thousands separator
//       if (firstPart.indexOf(thousandsSeparator) > -1) {
//         if (!isValidThousandsSeparator(firstPart, thousandsSeparator)) {
//           throw NumberException(number);
//         }
//         firstPart = replaceAll(firstPart, thousandsSeparator, '');
//       }
//       // Always use '.' as decimal separator for math-expression-evaluator
//       return `${firstPart}.${secondPart}`;
//     }
//     // There are more than one decimal separators => could be thousands separator
//     if (!isValidThousandsSeparator(number, decimalSeparator)) {
//       throw NumberException(number);
//     }
//     // *** Decimal separator becomes thousands separator
//     return replaceAll(number, decimalSeparator, '');
//   }
//   // If there is no decimal separator
//   const parts = number.split(thousandsSeparator);
//   // There is only one thousands separator => could be decimal separator
//   if (parts.length === 2) {
//     if (parts[0].length > 3 || parts[1].length !== 3 || parts[0] === '0') {
//       // *** Thousands separator becomes decimal separator
//       return replaceAll(number, thousandsSeparator, '.');
//     }
//   }
//   if (!isValidThousandsSeparator(number, thousandsSeparator)) {
//     throw NumberException(number);
//   }
//   // All tests passed
//   return replaceAll(number, thousandsSeparator, '');
// }

// export function standardize(number: string, locale: string) {
//   const decimalSeparator = locale === 'de' ? ',' : '.';
//   const thousandsSeparator = locale !== 'de' ? '.' : ',';

//   let firstPart = ''; // Part before the first decimal separator
//   let secondPart = ''; // Part after the first decimal separator
//   // If there is (one or more) decimal separator
//   if (number.indexOf(decimalSeparator) > -1) {
//     secondPart = number.substring(number.indexOf(decimalSeparator) + 1);
//     // If there are more than two decimal separators, there should be no thousands separator
//     if (secondPart.indexOf(decimalSeparator) > -1
//       && number.indexOf(thousandsSeparator) > -1) {
//       throw NumberException(number);
//     }
//     // Thousands separator should come before decimal separator
//     if (secondPart.indexOf(thousandsSeparator) > -1) {
//       throw NumberException(number);
//     }
//     firstPart = number.substring(0, number.indexOf(decimalSeparator));
//     // Only one decimal separator => it's decimal separator
//     if (secondPart.indexOf(decimalSeparator) === -1) {
//       // First part contains thousands separator
//       if (firstPart.indexOf(thousandsSeparator) > -1) {
//         if (!isValidThousandsSeparator(firstPart, thousandsSeparator)) {
//           throw NumberException(number);
//         }
//         firstPart = replaceAll(firstPart, thousandsSeparator, '');
//       }
//       // Always use '.' as decimal separator for math-expression-evaluator
//       return `${firstPart}.${secondPart}`;
//     }
//     // There are more than one decimal separators => could be thousands separator
//     if (!isValidThousandsSeparator(number, decimalSeparator)) {
//       throw NumberException(number);
//     }
//     // *** Decimal separator becomes thousands separator
//     return replaceAll(number, decimalSeparator, '');
//   }
//   // If there is no decimal separator
//   const parts = number.split(thousandsSeparator);
//   // There is only one thousands separator => could be decimal separator
//   if (parts.length === 2) {
//     if (parts[0].length > 3 || parts[1].length !== 3 || parts[0] === '0') {
//       // *** Thousands separator becomes decimal separator
//       return replaceAll(number, thousandsSeparator, '.');
//     }
//   }
//   if (!isValidThousandsSeparator(number, thousandsSeparator)) {
//     throw NumberException(number);
//   }
//   // All tests passed
//   return replaceAll(number, thousandsSeparator, '');
// }

// export function clean(query: string, locale: string) {
//   let q = query;
//   // Don't trigger calculator yet if the query is just a number
//   if (!isNaN(Number(q))) {
//     return '';
//   }
//   try {
//     // Replace all ' x ' with '*' for multiply triggering
//     q = q.replace(/ x /g, '*');
//     // Remove all spaces
//     q = q.replace(/ /g, '');
//     const operators = ['+', '-', '*', '/', '^', '='];
//     // Remove the last operator
//     while (operators.indexOf(q[q.length - 1]) > -1) {
//       q = q.substr(0, q.length - 1);
//     }
//     let finalQuery = '';
//     let lastPosition = 0;
//     // Construct a query with cleaned numbers and operators
//     // And standardize them independently
//     for (let i = 0; i < q.length; i += 1) {
//       if (operators.indexOf(q[i]) > -1) {
//         const element = q.slice(lastPosition, i);
//         if (element) {
//           finalQuery += standardize(element, locale);
//         }
//         lastPosition = i + 1;
//         finalQuery += q[i];
//       }
//       // Last number
//       if (i === q.length - 1 && lastPosition < i + 1) {
//         const element = q.slice(lastPosition, i + 1);
//         finalQuery += standardize(element, locale);
//       }
//     }

//     // Check if the query is just a number again
//     if (!isNaN(Number(finalQuery))) {
//       return '';
//     }

//     return finalQuery;
//   } catch (e) {
//     return '';
//   }
// }

// export function calculate(query: string, locale: string) {
//   let result;
//   // filter out:
//   // + too short query (avoid answering e, pi)
//   // + automatically convert queries like '10cm
//   const tmp = clean(query, locale);
//   console.log('>>>>>', query, tmp);
//   try {
//     // result = math.eval(tmp);
//     result = math.eval('1,1 + 2,2');
//     console.log('>>>res', result)

//     if (typeof result === 'number') {
//       return result;
//     } else {
//       return false;
//     }
//   } catch (err) {
//     return false;
//   }
// }

// export function localizedExp(expression: string, locale: string) {
//   let cleanedExp = clean(expression, locale);
//   if (cleanedExp) {
//     console.log('>>>>', cleanedExp);
//     // replace all periods with the dots for german locale
//     cleanedExp = (locale === 'de') ? cleanedExp.replace(/\./g, ',') : cleanedExp;
//     // add spaces around all math signs
//     let cleanedExpWithSpaces = '';
//     const operators = ['+', '-', '*', '/'];
//     for (let i = 0; i < cleanedExp.length; i += 1) {
//       if (operators.indexOf(cleanedExp[i]) > -1) {
//         cleanedExpWithSpaces += ` ${cleanedExp[i]} `;
//       } else {
//         cleanedExpWithSpaces += cleanedExp[i];
//       }
//     }
//      // add '=' sign at the end
//      cleanedExpWithSpaces += ' =';

//      return cleanedExpWithSpaces;
//   }
//   return false;
// }




function NumberException(number: string) {
  return {
    name: 'NumberException',
    message: `Invalid number: ${number}`,
  };
}

export function standardize(number: string, locale: string) {
  const decimalSeparator = locale === 'de' ? ',' : '.';
  const thousandsSeparator = locale !== 'de' ? '.' : ',';

  let firstPart = ''; // Part before the first decimal separator
  let secondPart = ''; // Part after the first decimal separator

  if (number.indexOf(decimalSeparator) > -1) {
    
  }




  // If there is (one or more) decimal separator
  if (number.indexOf(decimalSeparator) > -1) {
    secondPart = number.substring(number.indexOf(decimalSeparator) + 1);
    // If there are more than two decimal separators, there should be no thousands separator
    if (secondPart.indexOf(decimalSeparator) > -1
      && number.indexOf(thousandsSeparator) > -1) {
      throw NumberException(number);
    }
    // Thousands separator should come before decimal separator
    if (secondPart.indexOf(thousandsSeparator) > -1) {
      throw NumberException(number);
    }
    firstPart = number.substring(0, number.indexOf(decimalSeparator));
    // Only one decimal separator => it's decimal separator
    if (secondPart.indexOf(decimalSeparator) === -1) {
      // First part contains thousands separator
      if (firstPart.indexOf(thousandsSeparator) > -1) {
        if (!isValidThousandsSeparator(firstPart, thousandsSeparator)) {
          throw NumberException(number);
        }
        firstPart = replaceAll(firstPart, thousandsSeparator, '');
      }
      // Always use '.' as decimal separator for math-expression-evaluator
      return `${firstPart}.${secondPart}`;
    }
    // There are more than one decimal separators => could be thousands separator
    if (!isValidThousandsSeparator(number, decimalSeparator)) {
      throw NumberException(number);
    }
    // *** Decimal separator becomes thousands separator
    return replaceAll(number, decimalSeparator, '');
  }
  // If there is no decimal separator
  const parts = number.split(thousandsSeparator);
  // There is only one thousands separator => could be decimal separator
  if (parts.length === 2) {
    if (parts[0].length > 3 || parts[1].length !== 3 || parts[0] === '0') {
      // *** Thousands separator becomes decimal separator
      return replaceAll(number, thousandsSeparator, '.');
    }
  }
  if (!isValidThousandsSeparator(number, thousandsSeparator)) {
    throw NumberException(number);
  }
  // All tests passed
  return replaceAll(number, thousandsSeparator, '');
}