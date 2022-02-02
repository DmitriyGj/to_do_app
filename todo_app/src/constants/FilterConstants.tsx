import { Buffer,TaskFilter, ICustomSelectOption } from '../types/types';

export const taskFiltersBuffer:Buffer<TaskFilter>={
    All:{func:(task)=>task,name:'All'},
    Done:{func:(task)=>task.done,name:'Done'},
    NotDone:{func:(task)=>!task.done,name:'NotDone'}};

export const taskFilterOptions:ICustomSelectOption[]=[
    {value:taskFiltersBuffer.All.name, label:'Все'},
    {value:taskFiltersBuffer.Done.name, label:'Выполенные'},
    {value:taskFiltersBuffer.NotDone.name,label:'Текущие'}];