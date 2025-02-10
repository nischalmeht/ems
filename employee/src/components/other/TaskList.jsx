import React from 'react'

const TaskList = () => {
    return (
        <div className="flex mt-10 screen justify-content gap-5">
            <div className="h-40 w[45%] w-1/2 py-5 px-10 rounded-xl bg-red-400">
                <h2 className='text-2xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>new Task</h3>
            </div>
            <div className="h-40 w[45%] w-1/2 py-5 px-10 rounded-xl bg-red-400">
                <h2 className='text-2xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>new Task</h3>
            </div>
            <div className="h-40 w[45%] w-1/2 py-5 px-10 rounded-xl bg-blue-400">
                <h2 className='text-2xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>new Task</h3>
            </div>
            <div className="h-40 w[45%] w-1/2 py-5 px-10 rounded-xl bg-green-400">
                <h2 className='text-2xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>new Task</h3>
            </div>
        </div>
    )
}

export default TaskList