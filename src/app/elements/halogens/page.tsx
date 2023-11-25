"use client"
import React from 'react'
import ElementsNav from '@/components/elements-nav'
import Block from '@/components/block'
import Tittle from '@/components/title'
import { motion } from "framer-motion";
import { containerAnimated } from '@/components/animations';

function Halogens() {
    return (
        <>
            <ElementsNav />
            <header className='select-none mt-4 flex justify-center'>
                <Tittle text="Halogens" />
            </header>
            <motion.div
                variants={containerAnimated}
                initial="hidden"
                animate="visible"
                className='mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8'>
                <Block element="Fluorine" symbol="F" atomic={9} mass={19.0} type="Halogens" />
                <Block element="Chlorine" symbol="Cl" atomic={17} mass={35.45} type="Halogens" />
                <Block element="Bromine" symbol="Br" atomic={35} mass={79.90} type="Halogens" />
                <Block element="Iodine" symbol="I" atomic={53} mass={126.90} type="Halogens" />
                <Block element="Astatine" symbol="At" atomic={85} mass={210} type="Halogens" />
                <Block element="Tennessine" symbol="Ts" atomic={117} mass={294} type="Halogens" />
            </motion.div>
        </>
    )
}

export default Halogens
