import React from 'react';
import { useSelector } from 'react-redux';
import { Task } from '../Task/Task';
import { getTasks } from '../../selectors/TaskSelectors';
import './TaskList.css'

export function TaskList() {
    const tasks = useSelector(getTasks); 
    return(
        <div className='TaskList'>
            <div>
                <h1>Список задач</h1>
            </div>
           { tasks.map(task=> <Task key={task.id} {...task}/>)}
        </div>
    );
}