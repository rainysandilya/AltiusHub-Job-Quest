import './App.css';
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import RootLayout from './Rootlayout';
import Register from './components/Register';
import Login from './components/login/login';
import Home from './components/Home';
import Jobs from './components/Jobs/Jobs';
import Dashboard from './components/Dashboard/Dashboard';
function App() {
  //create router
  const router=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/jobs",
          element:<Jobs/>
        },
        {
          path:"/dashboard",
          element:<Dashboard/>
        }
      ]
    }
  ])
  return (
    <div className="App">
       <RouterProvider router={router}>

       </RouterProvider>
    </div>
  );
}

export default App;
