import React from 'react'
import Header from '../other/Header'
import TaskList from '../other/TaskList'
import Tasks from '../other/Tasks'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
        <Header/>
        <TaskList/>
        <Tasks/>
    </div>
  )
}

export default EmployeeDashboard