function numberToWord(n) {
  const ones = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const tens = [
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  const teens = [
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];

  if (n < 10) return ones[n];
  if (n < 20) return teens[n - 11];
  if (n < 100)
    return (
      tens[Math.floor(n / 10) - 1] + (n % 10 ? " " + numberToWord(n % 10) : "")
    );
}
module.exports = numberToWord;
