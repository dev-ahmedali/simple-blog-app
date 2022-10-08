import { posts } from '../../data';

const initialState = {
  all_post: posts,
  filtered_Post: posts,
  searchText: '',
  filterBy: [],
};

export default initialState;
