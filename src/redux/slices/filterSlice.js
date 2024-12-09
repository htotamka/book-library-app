import { createSlice } from '@reduxjs/toolkit';


const intialState = {
  title: '',

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
    resetFilters: (state) => {
      return intialState;
  }
  }
})

export const { setTitleFilter, resetFilters } = filterSlice.actions;

export const selectTitleFilter = state => state.filter.title;

export default filterSlice.reducer;