"use client"
import React from 'react'
import ElementsNav from '@/components/elements-nav'
import Block from '@/components/block'
import { motion } from "framer-motion";
import { containerAnimated } from '@/components/animations';

function AlcalineEarthMetals() {
    return (
        <>
            <ElementsNav />
            <motion.div
                variants={containerAnimated}
                initial="hidden"
                animate="visible"
                className='mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <Block element="Beryllium" symbol="Be" atomic={4} mass={9.0} type="Alkaline Earth Metals" />
                <Block element="Magnesium" symbol="Mg" atomic={12} mass={24.31} type="Alkaline Earth Metals" />
                <Block element="Calcium" symbol="Ca" atomic={20} mass={40.08} type="Alkaline Earth Metals" />
                <Block element="Strontium" symbol="Sr" atomic={38} mass={87.62} type="Alkaline Earth Metals" />
                <Block element="Barium" symbol="Ba" atomic={56} mass={137.33} type="Alkaline Earth Metals" />
                <Block element="Radium" symbol="Ra" atomic={88} mass={226} type="Alkaline Earth Metals" />
            </motion.div>
        </>
    )
}

export default AlcalineEarthMetals
