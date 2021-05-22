import React from 'react'
import styled from 'styled-components'

const StyledPerson = styled.div`
    border: solid 1px;
    border-radius: 5px;
    margin-bottom: 5px;
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PersonItem = ({person}) => {
    const {name, height, mass, birth_year, gender} = person
    return (
        <StyledPerson>
            <div>name: {name}</div>
            <div>height: {height}</div>
            <div>mass: {mass}</div>
            <div>birth_year: {birth_year}</div>
            <div>gender: {gender}</div>

        </StyledPerson>)
}