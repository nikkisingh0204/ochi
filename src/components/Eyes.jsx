import React, { useEffect, useState } from 'react'

const Eyes = () => {
    const[rotate,setRotate]=useState(0);
    useEffect( () => {
        window.addEventListener("mousemove",(e) => {
            let mousex= e.clientX;
            let mousey= e.clientY;

            let deltaX = mousex-window.innerWidth/2;
            let deltaY = mousey-window.innerHeight/2;

            let angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);
            setRotate(angle-180);
        });
            
    });
  return (
    <div className='eyes w-full h-screen overflow-hidden'>
        <div className='relative w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] bg-cover bg-center'>
            <div className='flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                    <div className='relative w-1/2 h-1/2 rounded-full bg-zinc-900'>
                    <div style={{transform : `translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                        <div className='w-6 h-6 rounded-full bg-zinc-100'></div>
                    </div>
                    </div>
                </div>
                <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                    <div className='relative w-1/2 h-1/2 rounded-full bg-zinc-900'>
                    <div style={{transform : `translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                        <div className='w-6 h-6 rounded-full bg-zinc-100'></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes