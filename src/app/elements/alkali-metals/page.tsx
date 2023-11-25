"use client"
import React from 'react'
import ElementsNav from '@/components/elements-nav'
import Block from '@/components/block'
import Tittle from '@/components/title'
import { motion } from "framer-motion";
import { containerAnimated } from '@/components/animations';


function AlkaliMetals() {
    return (
        <>
            <ElementsNav />
            <header className='select-none mt-4 flex justify-center'>
                <Tittle text="Alkali Metals" />
            </header>
            <motion.div
                variants={containerAnimated}
                initial="hidden"
                animate="visible"
                className='mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8'>
                <Block element="Lithium" symbol="Li" atomic={3} mass={6.9} type="Alkali Metals" />
                <Block element="Sodium" symbol="Na" atomic={11} mass={22.99} type="Alkali Metals" />
                <Block element="Potassium" symbol="K" atomic={19} mass={39.10} type="Alkali Metals" />
                <Block element="Rubidium" symbol="Rb" atomic={37} mass={85.47} type="Alkali Metals" />
                <Block element="Cesium" symbol="Cs" atomic={55} mass={132.91} type="Alkali Metals" />
                <Block element="Francium" symbol="Fr" atomic={87} mass={223} type="Alkali Metals" />
            </motion.div >
        </>
    )
}

export default AlkaliMetals
