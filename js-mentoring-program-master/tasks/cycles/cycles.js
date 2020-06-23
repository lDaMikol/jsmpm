/**
 * Write the function that will calculate the amount of discount
 * considering the redemption amount
 * Rules are the following:
 * - 0    - 350:  0%
 * - 351  - 1350: 15%
 * - 1351 - 2700: 30%
 * - 2701 - 6500: 45%
 * @param {number} redemption amount (0 - 9999)
 * @returns {number} discount in percent
 */

function calculateDiscount(redemption) {
  let discount;

  if (redemption <= 350) {
    discount = 0;
} else if (redemption <= 1350) {
    discount = 15;
} else if (redemption <= 2700) {
    discount = 30;
} else if (redemption <= 6500) {
    discount = 45;
};

  return discount;
}

/** TODO
 * implement factorial algorithm using for, while, do..while operators
 */
{
  const i = 10; //10! = 3628800
  let fact = 1;

// for
    for (let i = 1; i <= 10; i++) {
        fact *= i;
    }

// while
    let index = 1;
    fact = 1;
    while (index <= 10) {
        fact *= index;
        index++;
    }

    index = 1;
    fact = 1;
// do .. while
    do {
        fact *= index;
        index++;
    } while (index <= 10);
}

/**
 * return concatenated string from an array of substring
 */
{
  const substr = ["I", " love", " JS"];
  let str = '';

  for (let i = 0; i < substr.length; i++) {
    str+=substr[i];
}
}

/**
 * calculate a total of income of certain person
 */
{
  const personIncomes = {
    salary: 1985,
    rent: -600,
    interestOnDeposit: 250,
    otherExpences: -300
  };
  let total = 0;

  for (key in personIncomes) {
    total += personIncomes[key];
  }
}

module.exports = calculateDiscount;
