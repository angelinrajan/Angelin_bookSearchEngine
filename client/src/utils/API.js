// route to get logged in user's info (needs the token)
export const getMe = (token) => {
  return fetch('/api/users/me', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userData) => {
  return fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

// save book data for a logged in user
export const saveBook = (bookData, token) => {
  return fetch('/api/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bookData),
  });
};

// remove saved book data for a logged in user
export const deleteBook = (bookId, token) => {
  return fetch(`/api/users/books/${bookId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

// make a search to google books api
// https://www.googleapis.com/books/v1/volumes?q=harry+potter
export const searchGoogleBooks = (query) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};

// import { useMutation, useQuery } from '@apollo/client';
// import { LOGIN_USER, ADD_USER, SAVE_BOOK, REMOVE_BOOK } from './mutations';
// import { GET_ME } from './queries';

// export const loginUser = async (userData) => {
//   const [login, { error }] = useMutation(LOGIN_USER);

//   if (error) {
//     console.error(error);
//     return;
//   }

//   try {
//     const response = await login({
//       variables: userData,
//     });

//     const { token, user } = response.data.loginUser;
//     console.log(user);
//     Auth.login(token);
//   } catch (err) {
//     console.error(err);
//     setShowAlert(true);
//   }
// };

// export const createUser = async (userData) => {
//   const [createUser, { error }] = useMutation(ADD_USER);

//   if (error) {
//     console.error(error);
//     return;
//   }

//   try {
//     const response = await createUser({
//       variables: userData,
//     });

//     const { token, user } = response.data.createUser;
//     console.log(user);
//     Auth.login(token);
//   } catch (err) {
//     console.error(err);
//     setShowAlert(true);
//   }
// };

// export const saveBook = async (bookData) => {
//   const [saveBookMutation, { error }] = useMutation(SAVE_BOOK);

//   if (error) {
//     console.error(error);
//     return;
//   }

//   try {
//     await saveBookMutation({
//       variables: { book: bookData },
//     });
//   } catch (err) {
//     console.error(err);
//   }
// };

// export const deleteBook = async (bookId) => {
//   const [removeBookMutation, { error }] = useMutation(REMOVE_BOOK);

//   if (error) {
//     console.error(error);
//     return;
//   }

//   try {
//     await removeBookMutation({
//       variables: { bookId },
//     });
//   } catch (err) {
//     console.error(err);
//   }
// };

// export const getMe = async () => {
//   const { data, error } = useQuery(GET_ME);

//   if (error) {
//     console.error(error);
//     return null;
//   }

//   return data.getUser;
// };

// export const searchGoogleBooks = (query) => {
//   return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
// };






//starter Code
// export const searchGoogleBooks = async (query) => {
//   const { data, error } = useQuery(SEARCH_BOOKS, {
//     variables: { searchTerm: query },
//   });

//   if (error) {
//     console.error(error);
//     return null;
//   }

//   return data.searchBooks;
// };

// route to get logged in user's info (needs the token)
// export const getMe = (token) => {
//   return fetch('/api/users/me', {
//     headers: {
//       'Content-Type': 'application/json',
//       authorization: `Bearer ${token}`,
//     },
//   });
// };

// export const createUser = (userData) => {
//   return fetch('/api/users', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(userData),
//   });
// };

// export const loginUser = (userData) => {
//   return fetch('/api/users/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(userData),
//   });
// };

// // save book data for a logged in user
// export const saveBook = (bookData, token) => {
//   return fetch('/api/users', {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//       authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(bookData),
//   });
// };

// // remove saved book data for a logged in user
// export const deleteBook = (bookId, token) => {
//   return fetch(`/api/users/books/${bookId}`, {
//     method: 'DELETE',
//     headers: {
//       authorization: `Bearer ${token}`,
//     },
//   });
// };

// // make a search to google books api
// // https://www.googleapis.com/books/v1/volumes?q=harry+potter
// export const searchGoogleBooks = (query) => {
//   return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
// };
