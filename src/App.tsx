// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Sidebar } from './components/sidebar/Sidebar'
import { CreateEmployee } from './pages/createEmployee/CreateEmployee'
import { DisplayEmployee } from './pages/displayEmployee/DisplayEmployee'
// import { EditEmployee } from './pages/editEmployee/EditEmployee'
// import { Header } from './components/header/Header'
import { Login } from './pages/login/Login'
import { UncontrolledLogin } from './pages/login/UncontrolledLogin'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import NotFound from './pages/notFound/NotFound'
import { Layout } from './components/layout/Layout'
import { EditEmployee } from './pages/editEmployee/EditEmployee'
import { DisplayAllEmployees } from './pages/displayAllEmployees/DisplayAllEmployees'
const isLoggedIn= ()=>{
  const authenticated = localStorage.getItem("isLoggedIn");
  console.log(authenticated);
  return "true"===authenticated;
}
const routes = createBrowserRouter([
  {
    path:"/",
    element:<Navigate to ="/login" />,
    errorElement:<NotFound />

  },
  {
    path:"/login",
    element:<Login />,
    errorElement:<NotFound />

  },
  {
    path:"/employee",
    element:<Layout />,
    children:[
      {index:true, element:<DisplayAllEmployees />},
      {path:"create", element:<CreateEmployee />},
      {path:"edit/:id", element:<EditEmployee />},
      {path:":id", element:<DisplayEmployee />},

    ],
    errorElement:<NotFound />
  },
  {
    path:"*",
    element:<NotFound />
  }
])

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={routes} />
      {/* <Login /> */}
      {/* <CreateEmployee /> */}
      {/* <EditEmployee /> */}
      {/* <DisplayEmployee /> */}
      {/* <UncontrolledLogin /> */}
    </>
  )
}

export default App
