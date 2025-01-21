import React, { useContext, useEffect } from 'react'
import Header from '../../Components/Header/Header'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import { UserContext } from '../../App'

const Layout = () => {

    const ctx = useContext(UserContext);
    const navigate = useNavigate();
    console.log(ctx.userDetails); 

    useEffect(() =>{
          console.log("navigated")
          let localStorageName =(localStorage.getItem("userDetails"));
    
          if(localStorageName){
            localStorageName = JSON.parse(localStorageName);
            ctx.setUserDetails(localStorageName)
            localStorageName = localStorageName.name;

          }
    
          const loggedIn = ctx.userDetails.name || localStorageName;
          console.log("name :" , loggedIn);
          if(!loggedIn){
             navigate("/");
          // console.log("navigated")
          
          }
    },[]);
    

  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout