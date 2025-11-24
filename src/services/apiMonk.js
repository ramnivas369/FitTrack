// Mocked APIs for front-end development and AI recommendation placeholders
export async function fetchRecommendations(profile) {
  // very simple rule-based mock
  const { age, weight } = profile || {};
  return {
    workouts: [{ id: 'w1', title: '30 min Walk', difficulty: 'Easy' }],
    diet: [{ id: 'd1', title: 'Oatmeal & Fruit', calories: 320 }]
  };
}
