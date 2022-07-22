import { createSlice } from "@reduxjs/toolkit";

const bridgeSlice = createSlice({
    name: 'bridge',
    initialState: [{}],
    reducers: {
        SET_BRIDGE(state, action) {
            return action.payload
        }
    }
})
export const { SET_BRIDGE } = bridgeSlice.actions

export default bridgeSlice.reducer