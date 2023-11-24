"use client"
import React from 'react'
import ElementsLink from './elements-link'



function ElementsNav() {



    return (
        <nav className='flex justify-around py-4 bg-slate-700 px-4 '>
            <ElementsLink element='Noble Gases' />
            <ElementsLink element='Transition Metals' />
            <ElementsLink element='Halogens' />
            <ElementsLink element='Alkaline Earth Metals' />
            <ElementsLink element='Nonmetals' />
            <ElementsLink element='Alkali Metals' />
            <ElementsLink element='Metalloids' />
            <ElementsLink element='Lanthanides' />
            <ElementsLink element='Other Metals' />
            <ElementsLink element='Actinides' />
        </nav>
    )
}

export default ElementsNav
