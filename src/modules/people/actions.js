export const FETCH_PERSON = 'FETCH_PERSON'
export const FETCH_PERSON_SUCCEEDED = 'FETCH_PERSON_SUCCEEDED'
export const FETCH_PERSON_FAILED = 'FETCH_PERSON_FAILED'

export const fetchPerson = (personId) => ({
    type: FETCH_PERSON,
    payload: personId
})

export const fetchPersonSucceed = (person) => ({
    type: FETCH_PERSON_SUCCEEDED,
    payload: person
})

export const fetchPersonFailed = (error) => ({
    type: FETCH_PERSON_FAILED,
    payload: error
})