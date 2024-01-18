const couplePregnancyMediumAge: number = 28;
const portuguesesArrivedInBrasilIn: number = 1500;

interface calculateHowManyGenerationsHasPassedProps {
  couplePregnancyMediumAge: number;
  portuguesesArrivedInBrasilIn: number;
}

function calculateHowManyGenerationsHasPassed({
  couplePregnancyMediumAge,
  portuguesesArrivedInBrasilIn,
}: calculateHowManyGenerationsHasPassedProps): string {
  const generations =
    (new Date().getFullYear() - portuguesesArrivedInBrasilIn) /
    couplePregnancyMediumAge;

  return `Se passaram ${Math.floor(generations)} gerações.`;
}

console.log(
  calculateHowManyGenerationsHasPassed({
    couplePregnancyMediumAge,
    portuguesesArrivedInBrasilIn,
  })
);
