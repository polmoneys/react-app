import { Fragment } from 'react'
import { Breadcrumb } from '@/system/components/Breadcrumb/index'
import { NavLink } from '@/system/components/Link'
import { useParams, useMatches, useMatch, useLocation } from 'react-router-dom'

interface Meal extends Record<'id' | 'title', number | string> {}
const MEALS: Array<Meal> = [
  {
    id: 1,
    title: 'Jamaican-style Veggie Curry & Brown Rice',
  },
  {
    id: 2,
    title: 'Minced Steak Chilli & Zingy Avocado Salsa',
  },
]

interface MealsById extends Record<string, Meal> {}

const MEALS_BY_ID: MealsById = MEALS.reduce(
  (accumulator, meal) => ({
    ...accumulator,
    [meal.id]: meal,
  }),
  {},
)

export const Meals = () => {
  return (
    <Fragment>
      <Breadcrumb to="/meals">Meals</Breadcrumb>
      <h1>Meals</h1>
      <ul>
        {MEALS.map(meal => (
          <li key={meal.id}>
            <NavLink to={`/meals/${meal.id}`}>{meal.title}</NavLink>
          </li>
        ))}
      </ul>
    </Fragment>
  )
}

export const MealIngredients = () => {
  const { pathname } = useLocation()

  return (
    <Fragment>
      <Breadcrumb to={`${pathname}/ingredients`}>Ingredients</Breadcrumb>
      Some ingredients
    </Fragment>
  )
}
export const MealMethod = () => {
  const { pathname } = useLocation()

  return (
    <Fragment>
      <Breadcrumb to={`${pathname}/method`}>Method</Breadcrumb>
      Some method
    </Fragment>
  )
}
export const MealDetail = () => {
  const { id } = useParams()
  const { pathname } = useLocation()
  const meal = MEALS_BY_ID[id as keyof Meal]

  return (
    <Fragment>
      <Breadcrumb to={pathname}>{meal.title}</Breadcrumb>
      <h2>{meal.title}</h2>
      <ol>
        <li>
          <NavLink to={`${pathname}/ingredients`}>Ingredients</NavLink>
        </li>
        <li>
          <NavLink to={`${pathname}/method`}>Method</NavLink>
        </li>
      </ol>
    </Fragment>
  )
}
