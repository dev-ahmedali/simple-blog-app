import { CLEAR_FILTER, CLEAR_SEARCH, UPDATE_FILTER, UPDATE_SEARCH } from "./actionTypes"

export const updateFilter = (filterBy) => {
    return {
        type:UPDATE_FILTER,
        payload: filterBy
    }
}

export const updateSearch = (searchText) => {
    return {
        type: UPDATE_SEARCH,
        payload: searchText
    }
}

export const clearFilter = () => {
    return {
        type: CLEAR_FILTER
    }
}

export const clearSearch = () => {
    return {
        type: CLEAR_SEARCH
    }
}