import { createSlice } from "@reduxjs/toolkit";

const showDetailsSlice = createSlice({
    name: 'showDetails',
    initialState: {
        shearedData: null,
        movieListDetails: null,
        selectMovieDetails: null,
        bookedSeatDetails: null,
    },
    reducers: {
        setShowDetails(state, action) {
            state.shearedData = action.payload
        },
        setMovieList(state, action) {
            state.movieListDetails = action.payload
        },
        setSelectMovieDetails(state, action) {
            state.selectMovieDetails = action.payload
        },
        setSeatBookDetails(state, action) {
            state.seatBookDetails = action.payload
        }
    }

})
export const showDetailsAction = showDetailsSlice.actions
export default showDetailsSlice