"use client"
import React, { useState } from 'react';
import Cell from './cell'
import WhiteSpace from './white-space'
import Block from './block';

function Table() {
    const [hoveredSymbol, setHoveredSymbol] = useState<string>('H');
    const [hoveredElement, setHoveredElement] = useState<string>('Hydrogen');
    const [hoveredType, setHoveredType] = useState<string>('nonmetals');
    const [hoveredMass, setHoveredMass] = useState<number>(1);
    const [hoveredAtomic, setHoveredAtomic] = useState<number>(1);

    const handleHoveredSymbolChange = (data: { element: string, symbol: string, atomic: number, mass: number, type: string }) => {
        if (data.symbol !== "") {
            setHoveredElement(data.element);
            setHoveredSymbol(data.symbol);
            setHoveredAtomic(data.atomic);
            setHoveredMass(data.mass);
            setHoveredType(data.type)
        }
    };


    return (
        <main>
            <Block element={hoveredElement} symbol={hoveredSymbol} atomic={hoveredAtomic} mass={hoveredMass} type={hoveredType} />
            <table className="w-full border-separate border-spacing-3">

                <tbody>
                    <tr>
                        <Cell element="Hydrogen" symbol="H" atomic={1} mass={1} type="nonmetals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <WhiteSpace spaces={16} />
                        <Cell element="Helium" symbol="He" atomic={2} mass={4} type="noble gas" onHoveredSymbolChange={handleHoveredSymbolChange} />
                    </tr>
                    <tr>
                        <Cell element="Lithium" symbol="Li" atomic={3} mass={6.9} type="Alkali Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Beryllium" symbol="Be" atomic={4} mass={9.0} type="Alkaline Earth Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <WhiteSpace spaces={10} />
                        <Cell element="Boron" symbol="B" atomic={5} mass={10.8} type="Metalloids" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Carbon" symbol="C" atomic={6} mass={12.0} type="nonmetals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Nitrogen" symbol="N" atomic={7} mass={14.0} type="nonmetals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Oxygen" symbol="O" atomic={8} mass={16.0} type="nonmetals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Fluorine" symbol="F" atomic={9} mass={19.0} type="Halogens" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Neon" symbol="Ne" atomic={10} mass={20.2} type="noble gas" onHoveredSymbolChange={handleHoveredSymbolChange} />
                    </tr>
                    <tr>
                        <Cell element="Sodium" symbol="Na" atomic={11} mass={22.99} type="Alkali Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Magnesium" symbol="Mg" atomic={12} mass={24.31} type="Alkaline Earth Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <WhiteSpace spaces={10} />
                        <Cell element="Aluminum" symbol="Al" atomic={13} mass={26.98} type="Other Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Silicon" symbol="Si" atomic={14} mass={28.09} type="Metalloids" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Phosphorus" symbol="P" atomic={15} mass={30.97} type="nonmetals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Sulfur" symbol="S" atomic={16} mass={32.06} type="nonmetals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Chlorine" symbol="Cl" atomic={17} mass={35.45} type="Halogens" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Argon" symbol="Ar" atomic={18} mass={39.95} type="noble gas" onHoveredSymbolChange={handleHoveredSymbolChange} />
                    </tr>
                    <tr>
                        <Cell element="Potassium" symbol="K" atomic={19} mass={39.10} type="Alkali Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Calcium" symbol="Ca" atomic={20} mass={40.08} type="Alkaline Earth Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Scandium" symbol="Sc" atomic={21} mass={44.96} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Titanium" symbol="Ti" atomic={22} mass={47.87} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Vanadium" symbol="V" atomic={23} mass={50.94} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Chromium" symbol="Cr" atomic={24} mass={51.99} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Manganese" symbol="Mn" atomic={25} mass={54.94} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Iron" symbol="Fe" atomic={26} mass={55.85} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Cobalt" symbol="Co" atomic={27} mass={58.93} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Nickel" symbol="Ni" atomic={28} mass={58.69} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Copper" symbol="Cu" atomic={29} mass={63.55} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Zinc" symbol="Zn" atomic={30} mass={65.38} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Gallium" symbol="Ga" atomic={31} mass={69.72} type="Other Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Germanium" symbol="Ge" atomic={32} mass={72.63} type="Metalloids" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Arsenic" symbol="As" atomic={33} mass={74.92} type="Metalloids" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Selenium" symbol="Se" atomic={34} mass={78.97} type="nonmetals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Bromine" symbol="Br" atomic={35} mass={79.90} type="Halogens" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Krypton" symbol="Kr" atomic={36} mass={83.80} type="noble gas" onHoveredSymbolChange={handleHoveredSymbolChange} />
                    </tr>
                    <tr>
                        <Cell element="Rubidium" symbol="Rb" atomic={37} mass={85.47} type="Alkali Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Strontium" symbol="Sr" atomic={38} mass={87.62} type="Alkaline Earth Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Yttrium" symbol="Y" atomic={39} mass={88.91} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Zirconium" symbol="Zr" atomic={40} mass={91.22} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Niobium" symbol="Nb" atomic={41} mass={92.91} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Molybdenum" symbol="Mo" atomic={42} mass={95.95} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Technetium" symbol="Tc" atomic={43} mass={98} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Ruthenium" symbol="Ru" atomic={44} mass={101.07} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Rhodium" symbol="Rh" atomic={45} mass={102.91} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Palladium" symbol="Pd" atomic={46} mass={106.42} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Silver" symbol="Ag" atomic={47} mass={107.87} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Cadmium" symbol="Cd" atomic={48} mass={112.41} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Indium" symbol="In" atomic={49} mass={114.82} type="Other Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Tin" symbol="Sn" atomic={50} mass={118.71} type="Other Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Antimony" symbol="Sb" atomic={51} mass={121.76} type="Metalloids" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Tellurium" symbol="Te" atomic={52} mass={127.60} type="Metalloids" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Iodine" symbol="I" atomic={53} mass={126.90} type="Halogens" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Xenon" symbol="Xe" atomic={54} mass={131.29} type="noble gas" onHoveredSymbolChange={handleHoveredSymbolChange} />
                    </tr>
                    <tr>
                        <Cell element="Cesium" symbol="Cs" atomic={55} mass={132.91} type="Alkali Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Barium" symbol="Ba" atomic={56} mass={137.33} type="Alkaline Earth Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Lutetium" symbol="Lu" atomic={71} mass={174.97} type="Lanthanides" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Hafnium" symbol="Hf" atomic={72} mass={178.49} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Tantalum" symbol="Ta" atomic={73} mass={180.95} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Tungsten" symbol="W" atomic={74} mass={183.84} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Rhenium" symbol="Re" atomic={75} mass={186.21} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Osmium" symbol="Os" atomic={76} mass={190.23} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Iridium" symbol="Ir" atomic={77} mass={192.22} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Platinum" symbol="Pt" atomic={78} mass={195.08} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Gold" symbol="Au" atomic={79} mass={196.97} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Mercury" symbol="Hg" atomic={80} mass={200.59} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Thallium" symbol="Tl" atomic={81} mass={204.38} type="Other Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Lead" symbol="Pb" atomic={82} mass={207.2} type="Other Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Bismuth" symbol="Bi" atomic={83} mass={208.98} type="Other Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Polonium" symbol="Po" atomic={84} mass={209} type="Metalloids" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Astatine" symbol="At" atomic={85} mass={210} type="Halogens" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Radon" symbol="Rn" atomic={86} mass={222} type="noble gas" onHoveredSymbolChange={handleHoveredSymbolChange} />
                    </tr>
                    <tr>
                        <Cell element="Francium" symbol="Fr" atomic={87} mass={223} type="Alkali Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Radium" symbol="Ra" atomic={88} mass={226} type="Alkaline Earth Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Lawrencium" symbol="Lr" atomic={103} mass={266} type="Actinides" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Rutherfordium" symbol="Rf" atomic={104} mass={267} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Dubnium" symbol="Db" atomic={105} mass={268} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Seaborgium" symbol="Sg" atomic={106} mass={269} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Bohrium" symbol="Bh" atomic={107} mass={270} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Hassium" symbol="Hs" atomic={108} mass={269} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Meitnerium" symbol="Mt" atomic={109} mass={278} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Darmstadtium" symbol="Ds" atomic={110} mass={281} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Roentgenium" symbol="Rg" atomic={111} mass={282} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Copernicium" symbol="Cn" atomic={112} mass={285} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Nihonium" symbol="Nh" atomic={113} mass={286} type="Other Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Flerovium" symbol="Fl" atomic={114} mass={289} type="Other Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Moscovium" symbol="Mc" atomic={115} mass={290} type="Other Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Livermorium" symbol="Lv" atomic={116} mass={293} type="Other Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Tennessine" symbol="Ts" atomic={117} mass={294} type="Halogens" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Oganesson" symbol="Og" atomic={118} mass={294} type="noble gas" onHoveredSymbolChange={handleHoveredSymbolChange} />
                    </tr>
                    <tr>
                        <WhiteSpace spaces={18} />
                    </tr>
                    <tr>
                        <WhiteSpace spaces={2} />
                        <Cell element="Lanthanum" symbol="La" atomic={57} mass={138.91} type="Lanthanides" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Cerium" symbol="Ce" atomic={58} mass={140.12} type="Lanthanides" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Praseodymium" symbol="Pr" atomic={59} mass={140.91} type="Lanthanides" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Neodymium" symbol="Nd" atomic={60} mass={144.24} type="Lanthanides" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Promethium" symbol="Pm" atomic={61} mass={145} type="Lanthanides" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Samarium" symbol="Sm" atomic={62} mass={150.36} type="Lanthanides" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Europium" symbol="Eu" atomic={63} mass={151.96} type="Lanthanides" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Gadolinium" symbol="Gd" atomic={64} mass={157.25} type="Lanthanides" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Terbium" symbol="Tb" atomic={65} mass={158.93} type="Lanthanides" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Dysprosium" symbol="Dy" atomic={66} mass={162.50} type="Lanthanides" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Holmium" symbol="Ho" atomic={67} mass={164.93} type="Lanthanides" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Erbium" symbol="Er" atomic={68} mass={167.26} type="Lanthanides" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Thulium" symbol="Tm" atomic={69} mass={168.93} type="Lanthanides" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Ytterbium" symbol="Yb" atomic={70} mass={173.05} type="Lanthanides" onHoveredSymbolChange={handleHoveredSymbolChange} />
                    </tr>
                    <tr>
                        <WhiteSpace spaces={2} />
                        <Cell element="Actinium" symbol="Ac" atomic={89} mass={227} type="Actinides" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Thorium" symbol="Th" atomic={90} mass={232.04} type="Actinides" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Protactinium" symbol="Pa" atomic={91} mass={231.04} type="Actinides" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Uranium" symbol="U" atomic={92} mass={238.03} type="Actinides" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Neptunium" symbol="Np" atomic={93} mass={237} type="Actinides" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Plutonium" symbol="Pu" atomic={94} mass={244} type="Actinides" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Americium" symbol="Am" atomic={95} mass={243} type="Actinides" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Curium" symbol="Cm" atomic={96} mass={247} type="Actinides" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Berkelium" symbol="Bk" atomic={97} mass={247} type="Actinides" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Californium" symbol="Cf" atomic={98} mass={251} type="Actinides" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Einsteinium" symbol="Es" atomic={99} mass={252} type="Actinides" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Fermium" symbol="Fm" atomic={100} mass={257} type="Actinides" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Mendelevium" symbol="Md" atomic={101} mass={258} type="Actinides" onHoveredSymbolChange={handleHoveredSymbolChange} />
                        <Cell element="Nobelium" symbol="No" atomic={102} mass={259} type="Actinides" onHoveredSymbolChange={handleHoveredSymbolChange} />
                    </tr>
                </tbody>
            </table>

        </main>

    )
}

export default Table
