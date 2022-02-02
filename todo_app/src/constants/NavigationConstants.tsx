import React from 'react';
import { About } from '../routes/About/About';
import { LinkProps, Buffer } from '../types/types';
import { MainPage } from '../routes/MainPage/MainPage';
import { TaskManager } from '../routes/TaskManager/TaskManager';

const constantRoutesBuffer = {StartPage:{path:'/',element:<MainPage/>},
                        TaskManager:{path:'TaskManager', element:<TaskManager/>},
                        About:{path:'About', element:<About/>},
                        NotFound:{path:'*', element:<p>Nothing</p>}};

const constantLinksBuffer: Buffer<LinkProps>= {ToTaskManager:{ to:'/TaskManager',value: 'TaskManager'},
                    ToAbout:{to:'/About',value:'About'}};

const constantLinks:LinkProps[] = [constantLinksBuffer.ToTaskManager,
                                constantLinksBuffer.ToAbout];

const navigationConstants = {ConstantRoutesBuffer: constantRoutesBuffer, ConstantLinks: constantLinks, ConstantLinksBuffer: constantLinksBuffer};

export default  navigationConstants;