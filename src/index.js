module.exports = function toReadable(number) {
  const ones = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  const hundreds = Math.floor(number / 100);
  const remainder = number % 100;

  const result = [];

  if (number === 0) return 'zero';

  if (hundreds > 0) {
    result.push(`${ones[hundreds]} hundred`);
  }

  if (remainder >= 20) {
    result.push(tens[Math.floor(remainder / 10)]);
    result.push(ones[Math.floor(remainder % 10)]);
  } else if (remainder >= 10) {
    result.push(teens[remainder - 10]);
  } else {
    result.push(ones[remainder]);
  }

  return result.filter(Boolean).join(' ');
};
