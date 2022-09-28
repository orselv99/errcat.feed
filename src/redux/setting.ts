import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'search',
  initialState: {
    visible: false,
  },
  reducers: {
    setSettingVisible: (state, action: PayloadAction<boolean>) => {
      state.visible = action.payload;
    },
  },
  extraReducers: (builder) => {
  },
});

const { actions, reducer } = slice;

export const { setSettingVisible } = actions;

export const SettingReducer = reducer;
