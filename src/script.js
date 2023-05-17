'use strict';

// @param {number} fatherAge
// @param {number} sonAge
// @returns {number} количество лет через сколько отец будет старше

function calculateAge(fatherAge, sonAge) {
    if (sonAge <= 0 || fatherAge <= 0 || fatherAge - sonAge < 15) {
      return -1;
    }
    let years = 0;
    while ((sonAge + years) * 2 < fatherAge + years) {
      years++;
    }
    return years;
  }
  const ageFather = 50;
  const ageSon = 20;
  const ageDifference = calculateAge(ageFather, ageSon);
  
  if (ageDifference === -1) {
    console.log("Некорректный возраст.");
  } else {
    console.log(`Через ${ageDifference} лет, отец будет вдвое старше сына.`);
  }
