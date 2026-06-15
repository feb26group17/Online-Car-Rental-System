import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LoginComp from './components/LoginComp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeComp from './components/HomeComp'
import ProtectedRoute from './components/ProtectedRoute'
import UserDashboard from './components/UserDashboard'
import AdminDashboard from './components/AdminDashboard'
import LogoutComp from './components/LogoutComp'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComp/>}>
          <Route path="login" element={<LoginComp/>}/>
          <Route path="register" element={<h1>registraion form</h1>}/>
        </Route>
        {/* role id of user is 1 */}
        <Route path="/user" element={<ProtectedRoute role={2}><UserDashboard/></ProtectedRoute>}>
        <Route path="search" element={<h1> Search</h1>} />
                <Route path="booking" element={ <h1> Booking</h1>} />
                <Route path="logout" element={ <LogoutComp />} /> 
        </Route>
        <Route path="/admin" element={<ProtectedRoute role={1}><AdminDashboard/></ProtectedRoute>}></Route>
        <Route path="users" element={<h1> Users</h1>} />
                <Route path="reports" element={ <h1> Reports</h1>} />
                <Route path="logout" element={ <LogoutComp />} /> 

      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
