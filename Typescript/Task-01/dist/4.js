// 4.ts
var couplePregnancyMediumAge = 28;
var portuguesesArrivedInBrasilIn = 1500;
function calculateHowManyGenerationsHasPassed({
  couplePregnancyMediumAge: couplePregnancyMediumAge2,
  portuguesesArrivedInBrasilIn: portuguesesArrivedInBrasilIn2
}) {
  const generations = ((/* @__PURE__ */ new Date()).getFullYear() - portuguesesArrivedInBrasilIn2) / couplePregnancyMediumAge2;
  return `Se passaram ${Math.floor(generations)} gera\xE7\xF5es.`;
}
console.log(
  calculateHowManyGenerationsHasPassed({
    couplePregnancyMediumAge,
    portuguesesArrivedInBrasilIn
  })
);
