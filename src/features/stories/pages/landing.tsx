import { useMemo } from 'react'
import Grid from '@/system/components/Grid'
import { useAppDispatch, useAppSelector } from '@/config/store/hooks'
import Table from '@/system/components/Core/Table'
import { genericSort } from '@/system/utils/array'
import { type SortDirection } from '../interfaces/Pager'
import { addFilter, storiesFiltersSlice } from '../store'
import Planets from '../components/Planets'
import useTrivia from '../hooks/useTrivia'
import Filters, { matchEpisodeToRating } from '../components/Filters'
import useFilms from '../hooks/useFilms'
import People from '../components/People'

const Stories = (): JSX.Element => {
  const { data: films, isFetching } = useFilms()
  const [
    { isError: isErrorPlanets, data: planets, isFetching: isFetchingPlanets },
    { isError: isErrorPeople, data: people, isFetching: isFetchingPeople },
  ] = useTrivia()

  const dispatch = useAppDispatch()
  const { sort, query, rating, old } = useAppSelector(storiesFiltersSlice)
  const threshold = old ? 3 : 0

  const filtered = useMemo(() => {
    const currentMatches = matchEpisodeToRating(rating)
    const maybe = (ep: string) => currentMatches.includes(ep)
    return films
      ?.filter(film => Number(film.episode) > threshold)
      ?.filter(film => maybe(film.episode))
      ?.sort((filmA, filmB) =>
        genericSort<any>(filmA, filmB, {
          property: sort.id,
          isDescending: sort.direction === 'descending',
        }),
      )
  }, [old, sort, films, rating])

  return (
    <article>
      <Grid as="div" size="lg" className="gap:md">
        <Filters />

        <div>
          {filtered != null && (
            <Table
              sort={sort}
              label={'movies'}
              onSort={(id: string, dir: SortDirection) =>
                dispatch(
                  addFilter({
                    filter: 'sort',
                    value: {
                      id,
                      direction: dir,
                    },
                  }),
                )
              }
              th={[
                {
                  label: 'Title',
                  id: 'label',
                },
                { label: 'Episode', id: 'episode' },
                { label: 'Director', id: 'director' },
                { label: 'Release date', id: 'releaseDate' },
                { label: 'Opening', id: 'content' },
              ]}
              tr={filtered}
            />
          )}
        </div>
        {planets != null && (
          <Planets isFetching={isFetchingPlanets} planets={planets} />
        )}
        {people != null && (
          <People isFetching={isFetchingPeople} people={people} />
        )}
      </Grid>
    </article>
  )
}

export default Stories
