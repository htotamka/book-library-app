import { createSlice } from '@reduxjs/toolkit';


const intialState = {
  title: '',
  author: '',
  onlyFavorite: false
}

const filterSlice = createSlice({
  name: 'filter',
  initialState: intialState,
  reducers: {
    setTitleFilter: (state, action) => {
      state.title = action.payload;

      // You can also return a new state as usual
      // return {...state, title: action.payload}
    },

    setAuthorFilter: (state, action) => {
      state.author = action.payload;
    },

    setOnlyFavoriteFilter: (state) => {
      state.onlyFavorite = !state.onlyFavorite;
    },

    resetFilters: () => {
      return intialState;
  }
  }
})

export const { setTitleFilter, setAuthorFilter, setOnlyFavoriteFilter, resetFilters } = filterSlice.actions;

export const selectTitleFilter = state => state.filter.title;
export const selectAuthorFilter = state => state.filter.author;
export const selectOnlyFavoriteFilter = state => state.filter.onlyFavorite;

export default filterSlice.reducer;