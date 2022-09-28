import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Result } from '../lib/common';

interface FeedData {
  thumbnail: string;
  profile: {
    image: string;
    name: string;
  };
  content: {
    title: string;
    preview: string;
    indicator: {
      key: string;
      value: number;
    }[];
  }
}

// 정해진 시간에 한번씩 추천 해시태그를 확인
let latest_update = 0;
export const getFeedsAsync = createAsyncThunk(
  'search.getLastestRecommendHashTag',
  (thunkAPI) => {
    return axios({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/feed'
    })
      .then((res) => res.data)
      .catch((err) => {
        if (err) console.error('AXIOS', err);
        return { code: -124012093, data: `axios error ${err}` };
      })
  }
);

const slice = createSlice({
  name: 'feed',
  initialState: {
    datas: [] as FeedData[],
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFeedsAsync.fulfilled, (state, action: PayloadAction<Result>) => {
        const datas = action.payload.data as FeedData[];
        datas.map((value) => {
          state.datas.push(value);
        })
      })
  }
});

const { actions, reducer } = slice;

export const { } = actions;

export const FeedReducer = reducer;