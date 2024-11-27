import * as a from './actionTypes';

export const addBook = (newbook) => {
  return {
    type: a.ADD_BOOK,
    payload: newbook
  }
}

export const deleteBook = (id) => {

  return {
    type: a.DELETE_BOOK,
    payload: id
  }
}