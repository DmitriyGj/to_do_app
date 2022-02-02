import {RootState} from '../store/TaskManagerStore';

export const getTasks = (state:RootState)=>{
    const {Filter,Tasks} = state;
    return Tasks.tasks.filter(Filter.currentFilter.func);
}