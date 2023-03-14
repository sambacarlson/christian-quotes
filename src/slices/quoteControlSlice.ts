import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {quoteObjecs} from '../Data/quotes';

const initialState = [] as quoteObjecs[];

const quoteSlice = createSlice({
  name: 'quoteControl',
  initialState,
  reducers: {
    setQuoteAsFavourite: (state, action: PayloadAction<any>) => {
      state.map(quote => {
        if (quote.quoteID === action.payload.quoteID) {
          quote.isFavorite === action.payload.isFavorite;
        }
      });
    },
    saveToLocalStorage: () => {
      //TODO: This action should be dispatched to save app state to local storage.
      /* all quotes (to show before downloading new quotes on load.)
       favorite quotes
       save favorites
      */
    },
    getQuotesOnline: () => {
      //TODO: dispatched to get quotes from firebase.
    },
    getQuotesLocal: () => {
      //TODO: dispatched to get quotes from device on load. before trying to reach firebase for updates
      //also gets state of favorite.
    },
  },
});

export default quoteSlice.reducer;
export const {setQuoteAsFavourite} = quoteSlice.actions;
