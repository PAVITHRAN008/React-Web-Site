import { createSlice } from "@reduxjs/toolkit";

const bookedMovieDetailsSlice = createSlice({
    name: "bookedMovieDetails",
    initialState: {
        bookedMovieDetails: null,
    },
    reducers: {
        setBookedMovieDetails(state, action) {
            state.bookedMovieDetails = action.payload
        },
    }
})
export const bookMovieDetailsAction = bookedMovieDetailsSlice.actions;
export default bookedMovieDetailsSlice