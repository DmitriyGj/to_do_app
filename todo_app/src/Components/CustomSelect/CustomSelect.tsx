import React, { FC } from 'react';
import { CustomSelectProps } from '../../types/types';
import './CustomSelect.css';

export const CustomSelect: FC<CustomSelectProps> = 
        ({title,
        options,
        changeValueParentHandler, 
        parentValue}:CustomSelectProps) => {

    return(
        <div className='CustomSelect'>
            <label>{title}</label>
            <select value ={parentValue}
                onChange ={(e)=>changeValueParentHandler(e.target.value)}>
                {options.map((option,index,) =><option key = {index} {...option}/>)}
            </select>
        </div>
    );
};
