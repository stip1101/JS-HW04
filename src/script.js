'use strict';

// @param {number} fatherAge
// @param {number} sonAge
// @returns {number} количество лет через сколько отец будет старше

const ageTwoFold = (sonAge, fatherAge) => {
  let result = 0;
  if (fatherAge - sonAge < 15 || sonAge < 0) {
    return 'You entered wrong age.';
  }
  return fatherAge -2 * sonAge;
}
console.log(ageTwoFold(30,65));
