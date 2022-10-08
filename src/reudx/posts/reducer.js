import {
  CLEAR_FILTER,
  CLEAR_SEARCH,
  UPDATE_FILTER,
  UPDATE_SEARCH,
} from './actionTypes';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      const { name, value } = action.payload;
      let updatePosts = [...state.all_post];
      let filterBy = {};
      filterBy[name] = value;
      if (name === 'author') {
        updatePosts = updatePosts.filter((post) => post.author.id === value.id);
        filterBy[name] = value;
      } else if (name === 'search') {
        updatePosts = updatePosts.filter((post) =>
          post.title.toLowerCase().includes(value.toLowerCase())
        );
      } else {
        updatePosts = updatePosts.filter((post) => post[name] === value);
      }

      return {
        ...state,
        filterBy,
        filtered_Post: updatePosts,
      };

    case UPDATE_SEARCH:
      return {
        ...state,
        searchText: action.payload,
      };

    case CLEAR_SEARCH:
      return {
        ...state,
        searchText: '',
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filterBy,
        searchText: '',
        filtered_Post: state.all_post,
      };
    default:
      return state;
  }
};

export default reducer;
