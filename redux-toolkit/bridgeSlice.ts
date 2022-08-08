import { createSlice } from "@reduxjs/toolkit";

const bridgeSlice = createSlice({
    name: 'bridge',
    initialState: [{}],
    reducers: {
        setbridge(state, action) {
            return action.payload
        }
    }
})
export const { setbridge } = bridgeSlice.actions

export default bridgeSlice.reducer