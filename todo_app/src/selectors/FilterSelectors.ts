import {RootState} from '../store/TaskManagerStore';

export const getFilter = (state:RootState) => state.Filter.currentFilter;
