"use client"
import React from 'react'
import ElementsNav from '@/components/elements-nav'
import Block from '@/components/block'
import Tittle from '@/components/title'
import { motion } from "framer-motion";
import { containerAnimated } from '@/components/animations';
function OtherMetals() {
    return (
        <>
            <ElementsNav />
            <header className='select-none mt-4 flex justify-center'>
                <Tittle text="Other Metals" />
            </header>
            <motion.div
                variants={containerAnimated}
                initial="hidden"
                animate="visible"
                className='mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8'>
                <Block element="Aluminum" symbol="Al" atomic={13} mass={26.98} type="Other Metals" />
                <Block element="Gallium" symbol="Ga" atomic={31} mass={69.72} type="Other Metals" />
                <Block element="Indium" symbol="In" atomic={49} mass={114.82} type="Other Metals" />
                <Block element="Tin" symbol="Sn" atomic={50} mass={118.71} type="Other Metals" />
                <Block element="Thallium" symbol="Tl" atomic={81} mass={204.38} type="Other Metals" />
                <Block element="Lead" symbol="Pb" atomic={82} mass={207.2} type="Other Metals" />
                <Block element="Bismuth" symbol="Bi" atomic={83} mass={208.98} type="Other Metals" />
                <Block element="Nihonium" symbol="Nh" atomic={113} mass={286} type="Other Metals" />
                <Block element="Flerovium" symbol="Fl" atomic={114} mass={289} type="Other Metals" />
                <Block element="Moscovium" symbol="Mc" atomic={115} mass={290} type="Other Metals" />
                <Block element="Livermorium" symbol="Lv" atomic={116} mass={293} type="Other Metals" />
            </motion.div>
        </>
    )
}

export default OtherMetals
