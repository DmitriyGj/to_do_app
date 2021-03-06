import React, { useEffect } from 'react'
import './ModalWindow.css';
import { ModalProps } from '../../types/types'
import { onKeyDown } from '../../functions/functions';
import { ThemeContext } from '../../contexts/ThemeContext'

export const ModalWindow = 
        ({visible = false,
        title = '',
        content = '',
        footer = '',
        onClose: closeHandler, }: ModalProps)=> {

    useEffect(() => {
        const onKeydownHandler = (e:KeyboardEvent)=> onKeyDown('Escape',closeHandler)(e)
        document.addEventListener('keydown', onKeydownHandler)
        return () => document.removeEventListener('keydown',onKeydownHandler)
    },[closeHandler])

    if (!visible) return null

    return (<ThemeContext.Consumer>{value=>
                <div className={`modal modal-theme-${value}`} onClick={closeHandler}>
                    <div className={`modal-dialog $modal-theme-${value}`} onClick={e => e.stopPropagation()}>

                        <div className='modal-header'>
                            <h3 className='modal-title'>{title}</h3>
                            <span className='modal-close' 
                                onClick={closeHandler}>
                            &times;
                            </span>
                        </div>
                    
                        <div className='modal-body'>
                            <div className='modal-content'>{content}</div>
                        </div>

                        {footer && <div className='modal-footer'>{footer}</div>}
                    </div>
                </div>}
            </ThemeContext.Consumer>)
}

