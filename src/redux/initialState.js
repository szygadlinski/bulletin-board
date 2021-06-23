export const initialState = {
  posts: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
  user: {
    status: 'logged-in',
    email: 'jack@daniels.com',
  },
};
