import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRecipes } from '../../api/recipes';

const initialState = {
  recipes: [],
  loading: false,
  error: null,
};

export const getRecipes = createAsyncThunk('recipes/getRecipes', async (_, thunkAPI) => {
  try {
    const response = await fetchRecipes();
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.recipes = action.payload;
      })
      .addCase(getRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default recipeSlice.reducer;