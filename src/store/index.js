
// import { configureStore, createSlice } from "@reduxjs/toolkit";
import showDetailsSlice from "./showDetailsSlice";
import { configureStore } from "@reduxjs/toolkit";


// const counterSlice = createSlice({
//     name: 'setDetails',
//     initialState: {
//         showDetails: null,
//         movieDetails: null
//     },
//     reducers: {
//         setShowDetails(state, action) {
//             state.showDetails = action.payload?.showDetails
//             state.movieDetails = action.payload?.movieDetails
//         },
//     },

// })
// export const showDetailsAction = counterSlice.actions
const store = configureStore({
    reducer: {
        showDetails: showDetailsSlice.reducer
    }
})
export default store;