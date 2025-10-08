import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  theme: localStorage.getItem('theme') || 'winter',
};

const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    login: (state, action) => {
      const userState = {
        ...action.payload.user,
        token: action.payload.jwt,
      };
      localStorage.setItem('user', JSON.stringify(userState));
      state.user = userState;
    },
    logout: (state) => {
      localStorage.removeItem('user');
      state.user = null;
    },
    switchTheme: (state) => {
      const newTheme = state.theme === 'winter' ? 'dracula' : 'winter';
      document.documentElement.dataset.theme = state.theme = newTheme;
      localStorage.setItem('theme', newTheme);
    },
  },
});

export default userSlice.reducer;
export const { login, logout, switchTheme } = userSlice.actions;
