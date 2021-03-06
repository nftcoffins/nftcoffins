import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { RootState } from '../shared/store'
import { fetchGeneralInfo } from '../shared/api'
import { GeneralInfo } from '../shared/interfaces'
import { getTokenIds } from '../shared/utils'

export interface AppState {
    generalInfo: GeneralInfo
    tokenIds: number[]
    isLoading: boolean
}

const initialState: AppState = {
    generalInfo: {
        totalSupply: 0,
        prices: {},
    },
    tokenIds: [],
    isLoading: true,
}

export const fetchGeneralInfoAsync = createAsyncThunk('app/fetchGeneralInfo', async () => await fetchGeneralInfo())

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGeneralInfoAsync.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchGeneralInfoAsync.fulfilled, (state, action) => {
                const generalInfo: GeneralInfo = action.payload

                state.isLoading = false
                state.generalInfo = generalInfo
                state.tokenIds = getTokenIds(generalInfo.totalSupply)
            })
    },
})

export const selectGeneralInfo = (state: RootState) => state.app.generalInfo
export const selectTokenIds = (state: RootState) => state.app.tokenIds
export const selectIsLoading = (state: RootState) => state.app.isLoading

export default appSlice.reducer
