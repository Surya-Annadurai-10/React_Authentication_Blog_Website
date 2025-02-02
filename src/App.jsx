import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './Containers/Login/Login'
import Layout from './Containers/Layout/Layout'
import BlogList from './Containers/BlogList/BlogList'
import BlogCreate from './Containers/BlogCreate/BlogCreate'
import { createContext } from 'react'

export const UserContext = createContext();

function App() {
const [userDetails , setUserDetails] = useState({
  name : "",
  email : "",
  uid : ""
});

 const [blogPosts , setBlogPosts] = useState([]);
 const [loadBlog , setLoadBlog] = useState(false);

const router = createBrowserRouter ([
  {
    path : '/',
    element : <Login />
  },
  {
    element : <Layout />,
    children : [
      {
        path : "/home",
        element : <BlogList />
      },
      {
        path : "/create",
        element : <BlogCreate />
      }
    ]
  }
])

  return (
   <>
   <UserContext.Provider value={{loadBlog , setLoadBlog,blogPosts , setBlogPosts,userDetails,setUserDetails}}>
      <RouterProvider router = {router} />
   </UserContext.Provider>
   </>
  )
}

export default App
