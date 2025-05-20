import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const themes = {
  cupcake: 'cupcake',
  coffee: 'coffee',
};

const getUserFromLS = () => {
  return JSON.parse(localStorage.getItem('user')) || null;
};

const getThemeFromLS = () => {
  const theme = localStorage.getItem('theme') || themes.cupcake;
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
};

const initialState = {
  user: getUserFromLS(),
  theme: getThemeFromLS(),
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt };
      localStorage.setItem('user', JSON.stringify(user));
      state.user = user;
    },
    logoutUser: (state, action) => {
      state.user = null;
      localStorage.removeItem('user');
      toast.success('Logged out user');
    },
    toggleTheme: (state, action) => {
      const { cupcake, coffee } = themes;
      state.theme = state.theme === cupcake ? coffee : cupcake;
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('theme', state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
