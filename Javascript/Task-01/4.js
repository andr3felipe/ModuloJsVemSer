const couplePregnancyMediumAge = 28;
const portuguesesArrivedInBrasilIn = 1500

function calculateHowManyGenerationsHasPassed(couplePregnancyMediumAge, portuguesesArrivedInBrasilIn) {
  const generations = (new Date().getFullYear() - portuguesesArrivedInBrasilIn) / couplePregnancyMediumAge;

  return `Se passaram ${Math.floor(generations)} gerações.`
}

console.log(calculateHowManyGenerationsHasPassed(couplePregnancyMediumAge, portuguesesArrivedInBrasilIn))

