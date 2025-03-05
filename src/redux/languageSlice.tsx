import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import i18n from "../components/i18n"; // Import i18n

const initialState = {
    language: "en", // Default language
    isDropped: false, // Dropdown visibility
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
      changeLanguage: (state, action: PayloadAction<string>) => {
          state.language = action.payload;
          i18n.changeLanguage(action.payload); // Update i18n language
      },
      toggleDropdown: (state) => {
          state.isDropped = !state.isDropped;
      },
      selectLanguage: (state, action: PayloadAction<string>) => {
          state.language = action.payload;
          state.isDropped = false; // Close dropdown after selection
          i18n.changeLanguage(action.payload);
      },
  },
});

export const { changeLanguage, toggleDropdown, selectLanguage } = languageSlice.actions;
export default languageSlice.reducer;