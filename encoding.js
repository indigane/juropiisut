// Base conversion
function arbitraryBaseConversion(inputDigits, fromBase, toBase) {
  let currentValue = BigInt(0);
  fromBase = BigInt(fromBase);
  toBase = BigInt(toBase);
  for (let i = 0; i < inputDigits.length; i++) {
    currentValue = currentValue * fromBase + BigInt(inputDigits[i]);
  }
  const outputDigits = [];
  while (currentValue !== 0n) {
    outputDigits.unshift(Number(currentValue % toBase));
    currentValue = currentValue / toBase;
  }
  return outputDigits;
}
function arbitraryBaseConversionFromString(inputString, fromCharmap, toCharmap, fromBase, toBase) {
  const inputDigits = inputString.split('').map(digit => fromCharmap.indexOf(digit));
  const outputDigits = arbitraryBaseConversion(inputDigits, fromBase, toBase);
  const outputString = outputDigits.map(digit => toCharmap[digit]).join('');
  return outputString;
}
// Base5 - Base64
const base5Charmap = '01234';
const base64Charmap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
function convertBase5ToBase64(inputString) {
  return arbitraryBaseConversionFromString(inputString, base5Charmap, base64Charmap, 5, 64);
}
function convertBase64ToBase5(inputString) {
  return arbitraryBaseConversionFromString(inputString, base64Charmap, base5Charmap, 64, 5);
}
// UTF-8 - Base64
function convertUnicodeToBase64(inputString) {
  const inputDigits = (
    encodeURIComponent(inputString)
    .replace(/%([0-9A-F]{2})/gi, (_match, hexValue) => String.fromCharCode(`0x${hexValue}`))
    .split('')
    .map(character => character.charCodeAt())
  );
  const outputDigits = arbitraryBaseConversion(inputDigits, 255, 64);
  const outputString = outputDigits.map(digit => base64Charmap[digit]).join('');
  return outputString;
}
function convertBase64ToUnicode(inputString) {
  const inputDigits = inputString.split('').map(digit => base64Charmap.indexOf(digit));
  const outputDigits = arbitraryBaseConversion(inputDigits, 64, 255);
  const outputString = decodeURIComponent(
    outputDigits
    .map(digit => `%${digit.toString(16)}`)
    .join('')
  );
  return outputString;
}
