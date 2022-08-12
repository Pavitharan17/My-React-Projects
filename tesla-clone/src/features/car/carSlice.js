import { createSlice } from "@reduxjs/toolkit"; /* A slice is a small piece from a redux store/toolkit. Instead of using the entire redux store, we use just a slice from it for a particular set/component of data to make it efficient. NOTE: Please refer google. */

const initialState = {
    cars: ["Model 3", "Model Y", "Model S", "Model X", "Solar Roof", "Solar Panels"]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars

export default carSlice.reducer