import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface uiControls {
  showSidePane: boolean;
  showingQuoteCategory: string;
}

const initialState = {
  showSidePane: false,
} as uiControls;

const uiControlSlice = createSlice({
  name: 'uiControls',
  initialState,
  reducers: {
    setShowSidePane: (state, action: PayloadAction<boolean>) => {
      state.showSidePane = action.payload;
    },
    setShowingQuoteCategory: (state, action: PayloadAction<string>) => {
      state.showingQuoteCategory = action.payload;
    },
    saveUiState: () => {
      //TODO: dispatched to save app ui state to local storage
    },
  },
});

export default uiControlSlice.reducer;
// eslint-disable-next-line prettier/prettier
export const {setShowSidePane, setShowingQuoteCategory} = uiControlSlice.actions;
