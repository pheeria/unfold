const smunchies = [
  { name: "Proper Meal", isDeliverable: false },
  { name: "Warm Meal", isDeliverable: false },
  { name: "Sandwich", isDeliverable: true }
];

const mutatedMeals = smunchies.reduce((allMeals, meal) => {
  if (!meal.isDeliverable) {
    meal.isDeliverable = true;
  }
  return [...allMeals, , meal];
}, []);
