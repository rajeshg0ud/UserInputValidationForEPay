import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './ReduxStore/store'
import UserInput from './Components/UserInput';
import './index.css'
import Preview from './Components/Preview';

import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'

const App=()=>{
  return(
    <div className='main-container'>
     <Provider store={store}>
     <Outlet />
     </Provider>
    </div>
  )
}

const AppLayout=createBrowserRouter([{
  path:"/",
  element: <App />,
 children:[{
    path:"/",
     element: <UserInput />,
  },
  {
    path:"/Preview",
  element: <Preview />,
  }]
}])


const root= ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={AppLayout} />)