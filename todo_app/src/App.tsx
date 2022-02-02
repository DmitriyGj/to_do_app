import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import navigationConstants from './constants/NavigationConstants';
import {TaskManagerStore} from './store/TaskManagerStore';


function App() {
    const {ConstantRoutesBuffer} = navigationConstants;
    return (<Provider store = {TaskManagerStore}>
                <BrowserRouter>
                    <Routes>
                        <Route {...ConstantRoutesBuffer.StartPage}>
                            <Route {...ConstantRoutesBuffer.TaskManager}/>
                            <Route {...ConstantRoutesBuffer.About}/>
                        </Route>
                        <Route {...ConstantRoutesBuffer.NotFound}/>    
                    </Routes>
                </BrowserRouter>
            </Provider>);
}

export default App;