import { createAsyncThunk, createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store";

export interface WordLists {
  user: string;
  rank: string;
  word: string;
}

interface WordListsState {
  wordLists: WordLists[];
}

const initialState: WordListsState = {
  wordLists: [],
}

export const fetchWordLists = createAsyncThunk("wordLists/fetch", async (thunkAPI) => {
  const response = await fetch("http://localhost:5000/api/wordLists", {
    method: "GET"
  });
  const data = await response.json();
  return data;
})

interface WordPayload {
  user: string;
  rank: string;
  word: string;
}

export const saveWordLists = createAsyncThunk("wordLists/save", async ({ user, rank, word }: WordPayload, thunkAPI) => {
  const response = await fetch("http://localhost:5000/api/wordLists", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      user,
      rank,
      word
    })
  });
  const data = await response.json();
  return data;
})

export const WordListsSlice = createSlice({
  name: "wordList",
  initialState,
  reducers: {
    addWordLists: (state, action: PayloadAction<WordLists>) => {
      state.wordLists.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchWordLists.fulfilled, (state, action) => {
      state.wordLists = action.payload;
    });
    builder.addCase(saveWordLists.fulfilled, (state, action) => {
      state.wordLists.push(action.payload);
    });
  },
})

export default WordListsSlice.reducer;
export const { addWordLists } = WordListsSlice.actions;

const words = (state: RootState) => state.wordList.wordLists;
export const totalWordsSelector = createSelector([words], (words) => {
  return words.length;
});