import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submitHandle = (e) => {
        e.preventDefault();        
        console.log("Form submitted",);
        setEmail("");
        setPassword("");
    };
    
  return (
    <div className="flex h-screen w-screen items-center justify-center">
        <div className="border-2 border-emerald-600 p-20">
            <form className='flex flex-col justify-center items-center' onSubmit={(e)=>{
                submitHandle(e)
            }}>
                <input 
                 value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required className='rounded-full border-2 border-emerald-600 py-3 px-5 text-xl text-black outline-none bg-transparent placeholder:text-gray-400' type="email" placeholder='Enter ur Email' />
                <input 
                value={password}
                
                onChange={(e) => setPassword(e.target.value)}
                required type="password" className='rounded-full border-2 border-emerald-600 py-3 px-5 text-xl text-black outline-none bg-transparent placeholder:text-gray-400 mt-4' placeholder='password' />
                <button className='rounded-xl mt-5 border-none bg-emerald-600 py-3 px-5 text-xl text-black outline-none  placeholder:text-white'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Login