"use client"
import React from 'react'
import ElementsNav from '@/components/elements-nav'
import Block from '@/components/block'
import { motion } from "framer-motion";
import { containerAnimated } from '@/components/animations';

function TransitionMetals() {
    return (
        <>
            <ElementsNav />
            <motion.div
                variants={containerAnimated}
                initial="hidden"
                animate="visible"
                className='mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-6'>
                <Block element="Scandium" symbol="Sc" atomic={21} mass={44.96} type="Transition Metals" />
                <Block element="Titanium" symbol="Ti" atomic={22} mass={47.87} type="Transition Metals" />
                <Block element="Vanadium" symbol="V" atomic={23} mass={50.94} type="Transition Metals" />
                <Block element="Chromium" symbol="Cr" atomic={24} mass={51.99} type="Transition Metals" />
                <Block element="Manganese" symbol="Mn" atomic={25} mass={54.94} type="Transition Metals" />
                <Block element="Iron" symbol="Fe" atomic={26} mass={55.85} type="Transition Metals" />
                <Block element="Cobalt" symbol="Co" atomic={27} mass={58.93} type="Transition Metals" />
                <Block element="Nickel" symbol="Ni" atomic={28} mass={58.69} type="Transition Metals" />
                <Block element="Copper" symbol="Cu" atomic={29} mass={63.55} type="Transition Metals" />
                <Block element="Zinc" symbol="Zn" atomic={30} mass={65.38} type="Transition Metals" />
                <Block element="Yttrium" symbol="Y" atomic={39} mass={88.91} type="Transition Metals" />
                <Block element="Zirconium" symbol="Zr" atomic={40} mass={91.22} type="Transition Metals" />
                <Block element="Niobium" symbol="Nb" atomic={41} mass={92.91} type="Transition Metals" />
                <Block element="Molybdenum" symbol="Mo" atomic={42} mass={95.95} type="Transition Metals" />
                <Block element="Technetium" symbol="Tc" atomic={43} mass={98} type="Transition Metals" />
                <Block element="Ruthenium" symbol="Ru" atomic={44} mass={101.07} type="Transition Metals" />
                <Block element="Rhodium" symbol="Rh" atomic={45} mass={102.91} type="Transition Metals" />
                <Block element="Palladium" symbol="Pd" atomic={46} mass={106.42} type="Transition Metals" />
                <Block element="Silver" symbol="Ag" atomic={47} mass={107.87} type="Transition Metals" />
                <Block element="Cadmium" symbol="Cd" atomic={48} mass={112.41} type="Transition Metals" />
                <Block element="Hafnium" symbol="Hf" atomic={72} mass={178.49} type="Transition Metals" />
                <Block element="Tantalum" symbol="Ta" atomic={73} mass={180.95} type="Transition Metals" />
                <Block element="Tungsten" symbol="W" atomic={74} mass={183.84} type="Transition Metals" />
                <Block element="Rhenium" symbol="Re" atomic={75} mass={186.21} type="Transition Metals" />
                <Block element="Osmium" symbol="Os" atomic={76} mass={190.23} type="Transition Metals" />
                <Block element="Iridium" symbol="Ir" atomic={77} mass={192.22} type="Transition Metals" />
                <Block element="Platinum" symbol="Pt" atomic={78} mass={195.08} type="Transition Metals" />
                <Block element="Gold" symbol="Au" atomic={79} mass={196.97} type="Transition Metals" />
                <Block element="Mercury" symbol="Hg" atomic={80} mass={200.59} type="Transition Metals" />
                <Block element="Rutherfordium" symbol="Rf" atomic={104} mass={267} type="Transition Metals" />
                <Block element="Dubnium" symbol="Db" atomic={105} mass={268} type="Transition Metals" />
                <Block element="Seaborgium" symbol="Sg" atomic={106} mass={269} type="Transition Metals" />
                <Block element="Bohrium" symbol="Bh" atomic={107} mass={270} type="Transition Metals" />
                <Block element="Hassium" symbol="Hs" atomic={108} mass={269} type="Transition Metals" />
                <Block element="Meitnerium" symbol="Mt" atomic={109} mass={278} type="Transition Metals" />
                <Block element="Darmstadtium" symbol="Ds" atomic={110} mass={281} type="Transition Metals" />
                <Block element="Roentgenium" symbol="Rg" atomic={111} mass={282} type="Transition Metals" />
                <Block element="Copernicium" symbol="Cn" atomic={112} mass={285} type="Transition Metals" />
            </motion.div>
        </>
    )
}

export default TransitionMetals
