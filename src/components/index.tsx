import React from 'react'

function Index() {

    return (
        <div className="absolute left-[35%] hidden md:grid lg:grid grid-cols-2 font-cursive text-lg">
            <button className="flex items-center space-x-4 hover:outline-white hover:outline-1 hover:outline p-2">
                <div className="index-block iblock-strong-green"></div>
                <span className='ml-6'>Noble Gases</span>
            </button>
            <button className="flex items-center space-x-4 hover:outline-white hover:outline-1 hover:outline p-2">
                <div className="index-block iblock-blue"></div>
                <span className='ml-6'>Transition Metals</span>
            </button>
            <button className="flex items-center space-x-4 hover:outline-white hover:outline-1 hover:outline p-2">
                <div className="index-block iblock-green"></div>
                <span className='ml-6'>Halogens</span>
            </button>
            <button className="flex items-center space-x-4 hover:outline-white hover:outline-1 hover:outline p-2">
                <div className="index-block iblock-yellow"></div>
                <span className='ml-10'>Alkaline Earth Metals</span>
            </button>
            <button className="flex items-center space-x-4 hover:outline-white hover:outline-1 hover:outline p-2">
                <div className="index-block iblock-orange"></div>
                <span className='ml-6'>NonMetals</span>
            </button>
            <button className="flex items-center space-x-4 hover:outline-white hover:outline-1 hover:outline p-2">
                <div className="index-block iblock-strong-blue"></div>
                <span className='ml-10'>Alkaline Metals</span>
            </button>
            <button className="flex items-center space-x-4 hover:outline-white hover:outline-1 hover:outline p-2">
                <div className="index-block iblock-pink"></div>
                <span className='ml-6'>Metalloids</span>
            </button>
            <button className="flex items-center space-x-4 hover:outline-white hover:outline-1 hover:outline p-2">
                <div className="index-block iblock-light-green"></div>
                <span className='ml-6'>Lanthanides</span>
            </button>
            <button className="flex items-center space-x-4 hover:outline-white hover:outline-1 hover:outline p-2">
                <div className="index-block iblock-purple"></div>
                <span className='ml-6'>Other Metals</span>
            </button>
            <button className="flex items-center space-x-4 hover:outline-white hover:outline-1 hover:outline p-2">
                <div className="index-block iblock-light-lime"></div>
                <span className='ml-6'>Actinides</span>
            </button>

        </div>

    )
}

export default Index
