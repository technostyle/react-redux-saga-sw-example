import {createSelector} from 'reselect'

const peopleSelector = state => state.people

export const getPeople = createSelector(peopleSelector, peopleState => peopleState?.items || [])