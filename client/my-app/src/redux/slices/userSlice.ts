import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  id: string | null;
  name: string;
  email: string;
  bio: string;
}

const initialState: UserState = {
  id: null,
  name: '',
  email: '',
  bio: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.bio = action.payload.bio;
    },
    clearUser(state) {
      state.id = null;
      state.name = '';
      state.email = '';
      state.bio = '';
    },
    updateUser(state, action: PayloadAction<Partial<UserState>>) {
      if (action.payload.name !== undefined) state.name = action.payload.name;
      if (action.payload.email !== undefined) state.email = action.payload.email;
      if (action.payload.bio !== undefined) state.bio = action.payload.bio;
    },
  },
});

export const { setUser, clearUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
