import React, { useState, useEffect, FC } from 'react';
import { addTask, editTask } from '../../reducers/TaskReduser';
import { useDispatch } from 'react-redux';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import { TaskPriorityOptions, TaskPriorities } from '../../constants/TaskConstants';
import { TaskContollerProps } from '../../types/types';
import { onKeyDown, toDateString } from '../../functions/functions';
import './TaskController.css'

export function TaskController ({task,
                                closeModal}:
                                TaskContollerProps){
    
    const dispatch = useDispatch();
    const [title,setTitle] = useState<string>(task?.title || '');
    const [priority,setPriority] = useState<string>(task?.priority || TaskPriorities.Low);
    const [deadLine,setDeadLine] = useState<string>(toDateString(task?.deadLine || new Date()));
    
    const clickOkHandler = ()=>{
        if(!title){
            return alert('Название не может быть пустым');
        }
        if(!deadLine){
            return alert('Укажите дедлайн');
        }

        const action =task? editTask:addTask;
        const parsedDeadLine = new Date(Date.parse(deadLine));
        dispatch(action({id:task?.id, title, priority, deadLine:parsedDeadLine}));
        setTitle('');
        setPriority(TaskPriorities.Low);
        setDeadLine(toDateString(new Date()));
        closeModal?.();
    }

    useEffect(() => {
        const onKeydownHandler =(e:KeyboardEvent)=> onKeyDown('Enter',clickOkHandler)(e)
        document.addEventListener('keydown',onKeydownHandler);
        return () => document.removeEventListener('keydown', onKeydownHandler);
    },[])

    return(<div className ='TaskController'>
            <div className='Task-title'>
                <label htmlFor='title-input'>Название</label>
                <input  onChange = {(e)=>setTitle(e.target.value)}
                        value = {title}
                        id ='titile-input'/>
            </div>

            <div>
                <CustomSelect title='Приоритет'
                            parentValue={priority}
                            options={TaskPriorityOptions}
                            changeValueParentHandler={setPriority}/>
            </div>

            <div>
                <label htmlFor='deadline'>Дедлайн</label>
                <input id='deadline'
                    value={deadLine}
                    onChange={(e)=>setDeadLine(e.target.value)}
                    type='date'/>
            </div>

            <div>
                <button className='Add-button'
                    onClick ={clickOkHandler}>Ок.</button>
            </div>
        </div>);
}

