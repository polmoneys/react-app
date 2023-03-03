import { useParams, useLocation, Outlet } from 'react-router-dom'
import {
  Col,
  GroteskXL,
  HelveticaNeue,
  NavLink,
  Row,
} from '@/system/components/'
import { MEALS, MEALS_BY_ID, type MealType } from './utils'
import Breadcrumb from '@/system/components/Breadcrumb'

export const Meals = (): JSX.Element => {
  return (
    <Col as="div">
      <Breadcrumb to="/meals">Meals</Breadcrumb>
      <GroteskXL>Meals</GroteskXL>
      <Col as="ul">
        {MEALS.map(meal => (
          <li key={meal.id}>
            <NavLink to={`/meals/${meal.id}`}>{meal.title}</NavLink>
          </li>
        ))}
      </Col>
      <Outlet />
    </Col>
  )
}

export const MealDetail = (): JSX.Element => {
  const { id } = useParams()
  const { pathname } = useLocation()
  const meal = MEALS_BY_ID[id as keyof MealType]

  return (
    <Col as="div">
      <Breadcrumb to={pathname}>{meal.title}</Breadcrumb>
      <GroteskXL>{meal.title}</GroteskXL>
      <Row as="ul">
        <li>
          <NavLink to={'ingredients'}>Ingredients</NavLink>
        </li>
        <li>
          <NavLink to={'method'}>Method</NavLink>
        </li>
      </Row>

      <Outlet />
    </Col>
  )
}

export const MealIngredients = (): JSX.Element => {
  const { pathname } = useLocation()

  return (
    <Col as="div">
      <Breadcrumb to={`${pathname}/ingredients`}>Ingredients</Breadcrumb>
      <HelveticaNeue> Some ingredients</HelveticaNeue>
    </Col>
  )
}
export const MealMethod = (): JSX.Element => {
  const { pathname } = useLocation()

  return (
    <Col as="div">
      <Breadcrumb to={`${pathname}/method`}>Method</Breadcrumb>
      <HelveticaNeue> Some method</HelveticaNeue>
    </Col>
  )
}
