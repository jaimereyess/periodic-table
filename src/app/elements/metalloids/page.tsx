"use client"
import React from 'react'
import ElementsNav from '@/components/elements-nav'
import Block from '@/components/block'
import { motion } from "framer-motion";
import { containerAnimated } from '@/components/animations';

function Metalloids() {
    return (
        <>
            <ElementsNav />
            <motion.div
                variants={containerAnimated}
                initial="hidden"
                animate="visible"
                className='mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <Block element="Boron" symbol="B" atomic={5} mass={10.8} type="Metalloids" />
                <Block element="Silicon" symbol="Si" atomic={14} mass={28.09} type="Metalloids" />
                <Block element="Germanium" symbol="Ge" atomic={32} mass={72.63} type="Metalloids" />
                <Block element="Arsenic" symbol="As" atomic={33} mass={74.92} type="Metalloids" />
                <Block element="Antimony" symbol="Sb" atomic={51} mass={121.76} type="Metalloids" />
                <Block element="Tellurium" symbol="Te" atomic={52} mass={127.60} type="Metalloids" />
                <Block element="Polonium" symbol="Po" atomic={84} mass={209} type="Metalloids" />
            </motion.div>
        </>
    )
}

export default Metalloids
