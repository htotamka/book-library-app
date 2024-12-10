import { createSlice } from '@reduxjs/toolkit';


const intialState = {
  title: '',
  author: '',
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

    resetFilters: (state) => {
      return intialState;
  }
  }
})

export const { setTitleFilter, setAuthorFilter, resetFilters } = filterSlice.actions;

export const selectTitleFilter = state => state.filter.title;
export const selectAuthorFilter = state => state.filter.author;

export default filterSlice.reducer;