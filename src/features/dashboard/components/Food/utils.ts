export interface MealType extends Record<'id' | 'title', number | string> {}

export const MEALS: MealType[] = [
  {
    id: 1,
    title: 'Jamaican-style Veggie Curry & Brown Rice',
  },
  {
    id: 2,
    title: 'Minced Steak Chilli & Zingy Avocado Salsa',
  },
]

export interface MealsById extends Record<string, MealType> {}

export const MEALS_BY_ID: MealsById = MEALS.reduce(
  (accumulator, meal) => ({
    ...accumulator,
    [meal.id]: meal,
  }),
  {},
)
