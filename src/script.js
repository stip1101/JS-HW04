'use strict';

// @param {number} fatherAge
// @param {number} sonAge
// @returns {number} количество лет через сколько отец будет старше

function calculateAge(ageFather, ageSon) {
    if (Math.abs(ageFather - ageSon) < 15){
        return -1;
    }
const years = Math.abs(ageSon - ageFather);
    return years;
};
const ageFather = 30;
const ageSon = 20;
const ageDifference = calculateAge(ageFather, ageSon);

if (ageDifference === -1) {
    console.log("Разница в возрасте меньше 15 лет.");
  } else {
    console.log(`Отцу потребуется ${ageDifference} лет, чтобы стать вдвое старше сына.`);
  }