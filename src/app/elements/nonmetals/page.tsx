"use client"
import React from 'react'
import ElementsNav from '@/components/elements-nav'
import Block from '@/components/block'
import Tittle from '@/components/title'
import { motion } from "framer-motion";
import { containerAnimated } from '@/components/animations';
function NonMetals() {
    return (
        <>
            <ElementsNav />
            <header className='select-none mt-4 flex justify-center'>
                <Tittle text="Nonmetals" />
            </header>
            <motion.div
                variants={containerAnimated}
                initial="hidden"
                animate="visible"
                className='mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8'>
                <Block element="Hydrogen" symbol="H" atomic={1} mass={1} type="nonmetals" />
                <Block element="Carbon" symbol="C" atomic={6} mass={12.0} type="nonmetals" />
                <Block element="Nitrogen" symbol="N" atomic={7} mass={14.0} type="nonmetals" />
                <Block element="Oxygen" symbol="O" atomic={8} mass={16.0} type="nonmetals" />
                <Block element="Phosphorus" symbol="P" atomic={15} mass={30.97} type="nonmetals" />
                <Block element="Sulfur" symbol="S" atomic={16} mass={32.06} type="nonmetals" />
                <Block element="Selenium" symbol="Se" atomic={34} mass={78.97} type="nonmetals" />
            </motion.div>
        </>

    )
}

export default NonMetals
