import React from 'react'

const Tasks = () => {
    return (
        <div id='tasklist' className='h-[40%] overflow-x-auto flex justify-start items-start flex-nowrap gap-10 py-5 w-full  mt-10'>
            <div className="flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl">
                <div className='flex justify-between items-center mt-2 px-3'>
                    <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
                    <h4 className='text-sm'>20 feb 2024</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>Make a youtube video</h2>
                <div className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex harum commodi pariatur?</div>

            </div>
            <div className="flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl">
                <div className='flex justify-between items-center mt-2 px-3'>
                    <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
                    <h4 className='text-sm'>20 feb 2024</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>Make a youtube video</h2>
                <div className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex harum commodi pariatur?</div>

            </div>
            <div className="flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl">
                <div className='flex justify-between items-center mt-2 px-3'>
                    <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
                    <h4 className='text-sm'>20 feb 2024</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>Make a youtube video</h2>
                <div className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex harum commodi pariatur?</div>

            </div>
            <div className="flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl">
                <div className='flex justify-between items-center mt-2 px-3'>
                    <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
                    <h4 className='text-sm'>20 feb 2024</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>Make a youtube video</h2>
                <div className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex harum commodi pariatur?</div>

            </div>
          

        </div>
    )
}

export default Tasks