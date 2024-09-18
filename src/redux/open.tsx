import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
}

export const counterSlice = createSlice({
  name: 'open',
  initialState,
  reducers: {
    invert: (state) => {
      state.isOpen = !state.isOpen // Properly toggles the isOpen state
    },
  },
})

export const { invert } = counterSlice.actions
export default counterSlice.reducer
