import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { convertDate, Result } from '../common';

interface LastestRecommendHashTag {
  name: string;
  count: number;
}

// 정해진 시간에 한번씩 추천 해시태그를 확인
let latest_update = 0;
export const getLastestRecommendHashTagAsync = createAsyncThunk(
  'search.getLastestRecommendHashTag',
  (thunkAPI) => {
    // 10 분에 한번씩만 request
    const now = Date.now();
    if (latest_update + 10 * 60 * 1000 < now) {
      latest_update = now;
      console.log(
        convertDate(latest_update),
        'new request [getLastestRecommendHashTag]'
      );

      return axios({
        method: 'GET',
        url: 'http://localhost:3000/api/v1/feed/hash?type=trend&list=5',
      })
        .then((res) => res.data)
        .catch((err) => {
          if (err) console.error('AXIOS', err);
          return { code: -124012093, data: `axios error ${err}` };
        });
    }

    // 기존값
    console.log(
      convertDate(latest_update),
      'latest request [getLastestRecommendHashTag]'
    );
    return Promise.resolve({
      code: 11,
    });
  }
);

const slice = createSlice({
  name: 'search',
  initialState: {
    visible: false,
    datas: [] as LastestRecommendHashTag[],
  },
  reducers: {
    setSearchVisible: (state, action: PayloadAction<boolean>) => {
      state.visible = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getLastestRecommendHashTagAsync.fulfilled,
      (state, action: PayloadAction<Result>) => {
        if (action.payload.code === 11) {
          // do something? lint error :(
        } else {
          state.datas = action.payload.data as LastestRecommendHashTag[];
        }
      }
    );
  },
});

const { actions, reducer } = slice;

export const { setSearchVisible } = actions;

export const SearchReducer = reducer;
