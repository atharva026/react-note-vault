import React from 'react'
import "../../styles/spinner.css";

function Spinner({ heightVH }) {
    return (
        <div className='flex space-x-2 justify-center items-center' style={{ height: heightVH }}> {/* add mt-40 in className if style not needed*/}
            <span className='sr-only'>Loading...</span>
            <div className='h-8 w-8 bg-black rounded-full animate-bounce custom-delay-1'></div>
            <div className='h-8 w-8 bg-black rounded-full animate-bounce custom-delay-2'></div>
            <div className='h-8 w-8 bg-black rounded-full animate-bounce custom-delay-3'></div>
        </div>
    )
}

export default Spinner;