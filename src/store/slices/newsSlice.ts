import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { News } from "../../types/news";
import { RootState } from "../store";
import { getNews } from "../../api/getNews";

export interface NewsState {
  loading: boolean;
  news: Array<News>;
  error?: string;
  updated: number;
}
const initialState: NewsState = {
  loading: false,
  news: [],
  error: undefined,
  updated: 0
}

export const getAllNews = createAsyncThunk(
  'news/getAllNews',
  async function(_, {rejectWithValue}) {
    try {
      const response = getNews()
      response.catch((err) => {
        throw err
      })
      return response
    } catch(error: any) {
      return rejectWithValue(error.message)
    }
  }
)

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setUpdatedNews(state) {
      state.updated = Date.now()
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllNews.pending, (state) => {
      state.loading = true;
      state.error = undefined
    }),
    builder.addCase(getAllNews.fulfilled, (state, action: PayloadAction<Array<News>>) => {
      state.loading = false;
      state.news = action.payload
    }),
    builder.addCase(getAllNews.rejected, (state, action) => {
      state.loading = false;
      state.news = [];
      state.error = action.error.message;
    })
  }
})

export const userSelector = (state: RootState) => state.news
export const { setUpdatedNews } = newsSlice.actions
export default newsSlice.reducer