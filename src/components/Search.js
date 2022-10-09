import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearFilter, updateFilter, updateSearch } from '../reudx/posts/actions'

export default function Search() {
  const {searchText, filterBy} = useSelector((state) => state)
  const dispatch = useDispatch()

  let debounce = (fn, delay) => {
    let timerId;
    return function(searchText) {
      if(timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        fn(searchText);
      }, delay)
    }
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  debounce = useCallback(debounce((searchText) => {
    dispatch(updateFilter({name: 'search', value: searchText}))
  }))

  useEffect(() => {
    if(searchText) {
      debounce(searchText)
    } else {
      if(filterBy.search) {
        dispatch(clearFilter())
      }
    }
  }, [searchText, dispatch, filterBy.search])
  return (
    <>
    <input
        className="outline-none border-none bg-gray-50 h-full w-full mr-2"
        type="search"
        name="search"
        placeholder="Search"
        value={searchText}
        onChange={(e) => dispatch(updateSearch(e.target.value))}
    />
    <img
        className="inline h-6 cursor-pointer"
        src="./assets/search.svg"
        alt="Search"
    />
    </>
  )
}