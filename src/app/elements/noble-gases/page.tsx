"use client"
import React from 'react'
import ElementsNav from '@/components/elements-nav'
import Block from '@/components/block'
import Tittle from '@/components/title'
import { motion } from "framer-motion";
import { containerAnimated } from '@/components/animations';

function Noble() {
    return (
        <>
            <ElementsNav />
            <header className='select-none mt-4 flex justify-center'>
                <Tittle text="Noble Gases" />
            </header>
            <motion.div
                variants={containerAnimated}
                initial="hidden"
                animate="visible"
                className='mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8'>
                <Block element="Helium" symbol="He" atomic={2} mass={4} type="noble gas" />
                <Block element="Neon" symbol="Ne" atomic={10} mass={20.2} type="noble gas" />
                <Block element="Argon" symbol="Ar" atomic={18} mass={39.95} type="noble gas" />
                <Block element="Krypton" symbol="Kr" atomic={36} mass={83.80} type="noble gas" />
                <Block element="Xenon" symbol="Xe" atomic={54} mass={131.29} type="noble gas" />
                <Block element="Radon" symbol="Rn" atomic={86} mass={222} type="noble gas" />
                <Block element="Oganesson" symbol="Og" atomic={118} mass={294} type="noble gas" />
            </motion.div>
        </>
    )
}

export default Noble
