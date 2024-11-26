import * as a from './actionTypes';

export const addBook = (newbook) => {
  return {
    type: a.ADD_BOOK,
    payload: newbook
  }
}