import React, { useState,useCallback, FC } from 'react';
import { TaskList } from '../../Components/TaskList/TaskList';
import { ModalWindow } from '../../Components/ModalWindow/ModalWindow';
import { TaskController } from '../../Components/TaskContoller/TaskController';
import { CustomSelect } from '../../Components/CustomSelect/CustomSelect';
import { taskFilterOptions } from '../../constants/FilterConstants';
import { useDispatch, useSelector,Provider } from 'react-redux';
import { changeFilter } from '../../reducers/FilterReducer';
import { getFilter} from '../../selectors/CustomFilterSelectors'
import { TaskManagerStore } from '../../store/TaskManagerStore';

export function TaskManager(){
    const [isOpenModal,setIsOpenModal]=useState<boolean>(false);
    const dispatch =useDispatch();
    const filter = useSelector(getFilter);
    const changeFilterHandler = useCallback((value:string)=>dispatch(changeFilter(value)),
                                [dispatch]);
    return(
        <Provider store={TaskManagerStore}>
            <div className='TaskManager'>
                <div className='TaskManger-header'>
                    <CustomSelect title='Показать'
                                parentValue={filter.name}
                                changeValueParentHandler={changeFilterHandler}
                                options={taskFilterOptions}/>
                    <button onClick={()=>setIsOpenModal(true)}>Добавить задачу</button>
                </div>
                <TaskList></TaskList>
                <ModalWindow visible={isOpenModal}
                    title='Добавление задачи'
                    content={<TaskController closeModal = {()=>setIsOpenModal(false)}/>}
                    footer={<button onClick={()=>setIsOpenModal(false)}>Закрыть</button>}
                    onClose={()=>setIsOpenModal(false)}/>
            </div>
        </Provider>
    )
}

