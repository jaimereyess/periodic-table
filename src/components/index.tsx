import React from 'react'
import Link from 'next/link'

function Index() {

    return (
        <div className="absolute left-[35%] hidden md:grid lg:grid grid-cols-2 text-lg">
            <Link href="/elements/noble-gases"
                className="flex items-center space-x-4 hover:outline-white hover:outline-1 hover:outline p-2" >
                <div className="index-block iblock-strong-green"></div>
                <span className='ml-6'>Noble Gases</span>
            </Link>
            <Link href="/elements/transition-metals"
                className="flex items-center space-x-4 hover:outline-white hover:outline-1 hover:outline p-2">
                <div className="index-block iblock-blue"></div>
                <span className='ml-6'>Transition Metals</span>
            </Link>
            <Link href="/elements/halogens"
                className="flex items-center space-x-4 hover:outline-white hover:outline-1 hover:outline p-2">
                <div className="index-block iblock-green"></div>
                <span className='ml-6'>Halogens</span>
            </Link>
            <Link href="/elements/alcaline-earth-metals"
                className="flex items-center space-x-4 hover:outline-white hover:outline-1 hover:outline p-2">
                <div className="index-block iblock-yellow"></div>
                <span className='ml-10'>Alkaline Earth Metals</span>
            </Link>
            <Link href="/elements/nonmetals"
                className="flex items-center space-x-4 hover:outline-white hover:outline-1 hover:outline p-2">
                <div className="index-block iblock-orange"></div>
                <span className='ml-6'>NonMetals</span>
            </Link>
            <Link href="/elements/alkali-metals"
                className="flex items-center space-x-4 hover:outline-white hover:outline-1 hover:outline p-2">
                <div className="index-block iblock-strong-blue"></div>
                <span className='ml-10'>Alkaline Metals</span>
            </Link>
            <Link href="/elements/metalloids"
                className="flex items-center space-x-4 hover:outline-white hover:outline-1 hover:outline p-2">
                <div className="index-block iblock-pink"></div>
                <span className='ml-6'>Metalloids</span>
            </Link>
            <Link href="/elements/lanthanides"
                className="flex items-center space-x-4 hover:outline-white hover:outline-1 hover:outline p-2">
                <div className="index-block iblock-light-green"></div>
                <span className='ml-6'>Lanthanides</span>
            </Link>
            <Link href="/elements/other-metals"
                className="flex items-center space-x-4 hover:outline-white hover:outline-1 hover:outline p-2">
                <div className="index-block iblock-purple"></div>
                <span className='ml-6'>Other Metals</span>
            </Link>
            <Link href="/elements/actinides"
                className="flex items-center space-x-4 hover:outline-white hover:outline-1 hover:outline p-2">
                <div className="index-block iblock-light-lime"></div>
                <span className='ml-6'>Actinides</span>
            </Link>

        </div>

    )
}

export default Index
