import { ICustomSelectOption} from '../types/types';


export const TaskPriorities={
    Low:'Low',
    Medium:'Medium',
    High:'High'
};

export const TaskPriorityOptions:ICustomSelectOption[]=[
    {value:TaskPriorities.Low, label:'Низкий'},
    {value:TaskPriorities.Medium, label:'Средний'},
    {value:TaskPriorities.High, label:'Высокий'}];


export const TaskPriorityIcon= {
    [TaskPriorities.Low]:'❗️',
    [TaskPriorities.Medium]:'❗️❗️',
    [TaskPriorities.High]:'❗️❗️❗️'};

export const TaskButtonIcon ={
    edit:'🖊️',
    delete: '🗑️',
    done: '✔️',
    notDone: '❌'
}