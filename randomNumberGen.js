function decToHexDigit (number) {
  if (number >= 0 && number <= 9) {
    return number.toString();
  }

  switch (number) {
    case 10: return 'A';
    case 11: return 'B';
    case 12: return 'C';
    case 13: return 'D';
    case 14: return 'E';
    case 15: return 'F';
    default: return 'UNDEFINED';
  }
}

function generateRandomDecDigit () {
  const randomNumber = Math.random(); // 0 <= randomNumber < 1

  return Math.floor(16 * randomNumber);
}

function generateRandomHex() {
  const decDigitsList = [generateRandomDecDigit(), generateRandomDecDigit()];
  const hexDigitsList = decDigitsList.map(decToHexDigit);

  return hexDigitsList.join('');
}

console.log(generateRandomHex());
