import { createSlice } from '@reduxjs/toolkit';
import {taskFiltersBuffer} from '../constants/FilterConstants';
import {FilterState} from '../types/types'



const initialState:FilterState = {currentFilter:taskFiltersBuffer.All,
                    FiltersBuffer:taskFiltersBuffer}

export const filterSlice = createSlice({
    name:'Filter',
    initialState,
    reducers:{
        changeFilter:(state,action)=>{
            state.currentFilter = state.FiltersBuffer[action.payload];
        }
    }
});


export const {changeFilter} = filterSlice.actions;
export default filterSlice.reducer;