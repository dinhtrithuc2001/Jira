import React from 'react'
import image from '../assets/img/notfound.png'

export default function NotFound() {
    return (
        <div className='relative w-screen h-screen'>
            <div className='text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <img className='w-[100%]' src={image} alt="image-not-found" />
                <h2 className='text-xl'>Oops, looks like the page is lost.</h2>
                <h3>This is not a fault, just an accident that was not intentional.</h3>
            </div>
        </div>
    )
}
