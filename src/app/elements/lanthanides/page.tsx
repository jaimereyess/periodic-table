"use client"
import React from 'react'
import ElementsNav from '@/components/elements-nav'
import Block from '@/components/block'
import Tittle from '@/components/title'
import { motion } from "framer-motion";
import { containerAnimated } from '@/components/animations';

function Lanthanides() {
    return (
        <>
            <ElementsNav />
            <header className='select-none mt-4 flex justify-center'>
                <Tittle text="Lanthanides" />
            </header>
            <motion.div
                variants={containerAnimated}
                initial="hidden"
                animate="visible"
                className='mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8'>
                <Block element="Lanthanum" symbol="La" atomic={57} mass={138.91} type="Lanthanides" />
                <Block element="Cerium" symbol="Ce" atomic={58} mass={140.12} type="Lanthanides" />
                <Block element="Praseodymium" symbol="Pr" atomic={59} mass={140.91} type="Lanthanides" />
                <Block element="Neodymium" symbol="Nd" atomic={60} mass={144.24} type="Lanthanides" />
                <Block element="Promethium" symbol="Pm" atomic={61} mass={145} type="Lanthanides" />
                <Block element="Samarium" symbol="Sm" atomic={62} mass={150.36} type="Lanthanides" />
                <Block element="Europium" symbol="Eu" atomic={63} mass={151.96} type="Lanthanides" />
                <Block element="Gadolinium" symbol="Gd" atomic={64} mass={157.25} type="Lanthanides" />
                <Block element="Terbium" symbol="Tb" atomic={65} mass={158.93} type="Lanthanides" />
                <Block element="Dysprosium" symbol="Dy" atomic={66} mass={162.50} type="Lanthanides" />
                <Block element="Holmium" symbol="Ho" atomic={67} mass={164.93} type="Lanthanides" />
                <Block element="Erbium" symbol="Er" atomic={68} mass={167.26} type="Lanthanides" />
                <Block element="Thulium" symbol="Tm" atomic={69} mass={168.93} type="Lanthanides" />
                <Block element="Ytterbium" symbol="Yb" atomic={70} mass={173.05} type="Lanthanides" />
                <Block element="Lutetium" symbol="Lu" atomic={71} mass={174.97} type="Lanthanides" />
            </motion.div>
        </>
    )
}

export default Lanthanides
