import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

function App() {
  const [user, setUser] = useState(null);
  
  const authdata=useContext(AuthContext);
  useEffect(() => {
    if(authdata){
      const loggedInUser=localStorage.getItem("loggedInUser");
      if(loggedInUser){
        setUser(loggedInUser.role)
      }
    }
  
  }, [authdata])
  
  const handleLogin = (email, password) => {
    if (authdata && authdata.admin.find((e)=>email==e.email && password== e.password)) {      
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    } else if (authdata && authdata.employees.find((e)=>email==e.email && password== e.password)) {
      setUser('employee')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
    }
    else {
      console.log('Invalid Credientials')
    }
  }
  return (
    <>
      {!user ? < Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? <AdminDashboard changeUser={setUser} /> : (user === 'employee' ? <EmployeeDashboard /> : null)}

    </>
  )
}

export default App
