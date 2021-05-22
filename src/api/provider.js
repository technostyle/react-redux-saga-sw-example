import {ROOT} from './constants'
import {get} from './utils'


export const apiProvider = {
    fetchPerson: async (id) => {
        try {
            return await get(`${ROOT}people/${id}/`)
        } catch (e) {
            throw e
        }
    }
}
