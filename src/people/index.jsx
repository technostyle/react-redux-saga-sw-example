import React, { useEffect } from 'react'

import {FETCH_PERSON} from 'modules/people/actions'
import { useDispatch, useSelector } from 'react-redux'
import { getPeople } from '../modules/people/selectors'
import {PersonItem} from './person-item'

export const People = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        for (let i = 1; i < 10; i++) {
            dispatch({
                type: FETCH_PERSON,
                payload: i
            })    
        }
    }, [])

    const people = useSelector(getPeople)

    return (
        <div>
            {people.map(person => (
                <PersonItem person={person} />
            ))}
        </div>
    )
}