import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './components/Home/Home';
import About from './components/About/About';
import Orders from './components/Orders/Orders';
import Contacts from './components/Contacts/Contacts';
function App() {
  
  const router = createBrowserRouter([
    { path: '/', 
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/home',
        loader: () => fetch('tshirt.json'),
        element: <Home></Home>
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/contacts',
        element: <Contacts></Contacts>
      },
      {
        path:'/orders',
        element: <Orders></Orders>
      },
    ]
  }
  ])
  return (
    <div className="App">
     <RouterProvider 
     router={router} />
     
    </div>
  );
}

export default App;
