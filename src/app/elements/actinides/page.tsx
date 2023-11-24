"use client"
import React from 'react'
import ElementsNav from '@/components/elements-nav'
import Block from '@/components/block'
import { motion } from "framer-motion";
import { containerAnimated } from '@/components/animations';

function Actinides() {
    return (
        <>
            <ElementsNav />
            <motion.div
                variants={containerAnimated}
                initial="hidden"
                animate="visible"
                className='mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <Block element="Actinium" symbol="Ac" atomic={89} mass={227} type="Actinides" />
                <Block element="Thorium" symbol="Th" atomic={90} mass={232.04} type="Actinides" />
                <Block element="Protactinium" symbol="Pa" atomic={91} mass={231.04} type="Actinides" />
                <Block element="Uranium" symbol="U" atomic={92} mass={238.03} type="Actinides" />
                <Block element="Neptunium" symbol="Np" atomic={93} mass={237} type="Actinides" />
                <Block element="Plutonium" symbol="Pu" atomic={94} mass={244} type="Actinides" />
                <Block element="Americium" symbol="Am" atomic={95} mass={243} type="Actinides" />
                <Block element="Curium" symbol="Cm" atomic={96} mass={247} type="Actinides" />
                <Block element="Berkelium" symbol="Bk" atomic={97} mass={247} type="Actinides" />
                <Block element="Californium" symbol="Cf" atomic={98} mass={251} type="Actinides" />
                <Block element="Einsteinium" symbol="Es" atomic={99} mass={252} type="Actinides" />
                <Block element="Fermium" symbol="Fm" atomic={100} mass={257} type="Actinides" />
                <Block element="Mendelevium" symbol="Md" atomic={101} mass={258} type="Actinides" />
                <Block element="Nobelium" symbol="No" atomic={102} mass={259} type="Actinides" />
                <Block element="Lawrencium" symbol="Lr" atomic={103} mass={266} type="Actinides" />
            </motion.div>
        </>
    )
}

export default Actinides
