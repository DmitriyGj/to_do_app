import React, { useCallback } from 'react';
import { TTask } from '../../types/types';
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import { removeTask,changeDoneState } from '../../reducers/TaskReduser';
import { TaskPriorityIcon, TaskButtonIcon } from '../../constants/TaskConstants';
import { ThemeContext } from '../../contexts/ThemeContext';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { TaskController } from '../TaskContoller/TaskController';
import './Task.css';

export function Task(props: TTask){

    const {id,title,done,deadLine,priority} = props;
    const dispatch = useDispatch();

    const [isOpenModal,setIsOpenModal]  = useState<boolean>(false);
    const closeModal = useCallback(()=> setIsOpenModal(false), []);

    const removeTaskHandler = (id:string) => dispatch(removeTask(id));
    const changeDoneStateHandler = (id:string) => dispatch(changeDoneState(id));
    return(
        <ThemeContext.Consumer>{value=>
            <div className={`Task task-theme-${value}`}>

                <span className='TaskPriority'
                    role='img'>
                    {TaskPriorityIcon[priority]}
                </span>

                <div className = 'TaskTitle'>
                    <label>Название:</label>
                    <p>{title}</p>
                </div>

                <div className='TaskDate'>
                    <label>Дедлайн:</label>
                    <p>{`${deadLine.toLocaleDateString()}`}</p>
                </div>

                <div className='TaskControls'>
                    <button onClick={()=>changeDoneStateHandler(id)}>{done ? TaskButtonIcon.done : TaskButtonIcon.notDone }</button>
                    <button onClick={()=>setIsOpenModal(true)}>{TaskButtonIcon.edit}</button>
                    <button onClick= {()=>removeTaskHandler(id)}>{TaskButtonIcon.delete}</button>
                </div>

                {isOpenModal && <ModalWindow visible={isOpenModal}
                    title='Редактирование задачи'
                    content={<TaskController task={props} 
                            closeModal = {()=>setIsOpenModal(false)}/>}
                    footer={<button onClick={()=>setIsOpenModal(false)}>Закрыть</button>}
                    onClose={closeModal}/>}
            </div>}
        </ThemeContext.Consumer> 
    );
}