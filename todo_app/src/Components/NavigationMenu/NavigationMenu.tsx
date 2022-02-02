import React, { FC } from 'react';
import navigationConstants from '../../constants/NavigationConstants';
import { Link } from 'react-router-dom'
import { LinkProps } from '../../types/types';
import './NavigationMenu.css';

export function NavigationMenu(){
    const {ConstantLinks} = navigationConstants;
    return( <nav className='Navigation'>
                {ConstantLinks.map((link:LinkProps,index)=>
                        <Link className='Nav-link' 
                            key={index} 
                            to = {link.to}>{link.value}</Link>
                    )}
            </nav>)

}