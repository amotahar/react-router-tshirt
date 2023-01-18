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
    element: <Main />,
    children: [
      {
        path:'/',
        element: <Home />
      },
      {
        path:'/home',
        loader: () => fetch('tshirt.json'),
        element: <Home />
      },
      {
        path:'/about',
        element: <About />
      },
      {
        path:'/contacts',
        element: <Contacts />
      },
      {
        path:'/orders',
        element: <Orders />
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
