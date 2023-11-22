"use client"
import { useState } from "react";
import Cell from "../components/cell"
import WhiteSpace from "@/components/white-space"
import Block from "@/components/block";

export default function Home() {
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
    <div className="select-none">
      <header className="flex justify-center align-middle text-4xl text-white mt-4 ">
        Peridic Table
      </header>
      <Block element={hoveredElement} symbol={hoveredSymbol} atomic={hoveredAtomic} mass={hoveredMass} type={hoveredType} />

      <main className="flex">
        <table className="w-full border-separate border-spacing-3">
          <tbody>
            <tr>
              <Cell element="Hydrogen" symbol="H" atomic={1} mass={1} type="nonmetals" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <WhiteSpace spaces={16} />
              <Cell element="Helium" symbol="He" atomic={2} mass={4} type="noble gas" onHoveredSymbolChange={handleHoveredSymbolChange} />
            </tr>
            <tr>
              <Cell element="Lithium" symbol="Li" atomic={3} mass={6.9} type="Alkali Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Beryllium" symbol="Be" atomic={4} mass={9} type="Alkaline Earth Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <WhiteSpace spaces={10} />
              <Cell element="Boron" symbol="B" atomic={5} mass={10.8} type="metalloid" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Carbon" symbol="C" atomic={6} mass={12.0} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Nitrogen" symbol="N" atomic={7} mass={14.0} type="Alkali Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Oxygen" symbol="O" atomic={8} mass={16.0} type="nonmetal" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Fluorine" symbol="F" atomic={9} mass={19.0} type="halogen" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Neon" symbol="Ne" atomic={10} mass={20.2} type="noble gas" onHoveredSymbolChange={handleHoveredSymbolChange} />
            </tr>
            <tr>
              <Cell element="Sodium" symbol="Na" atomic={11} mass={23} type="Alkali Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Magnesium" symbol="Mg" atomic={12} mass={24.305} type="Alkaline Earth Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <WhiteSpace spaces={10} />
              <Cell element="Aluminum" symbol="Al" atomic={13} mass={26.982} type="post-transition metal" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Silicon" symbol="Si" atomic={14} mass={28.085} type="metalloid" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Silicon" symbol="Si" atomic={14} mass={28.085} type="metalloid" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Sulfur" symbol="S" atomic={16} mass={32} type="nonmetal" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Chlorine" symbol="Cl" atomic={17} mass={35.5} type="halogen" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Argon" symbol="Ar" atomic={18} mass={40} type="noble gas" onHoveredSymbolChange={handleHoveredSymbolChange} />
            </tr>
            <tr>
              <Cell element="Potassium" symbol="K" atomic={19} mass={39} type="Alkali Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Calcium" symbol="Ca" atomic={20} mass={40} type="Alkaline Earth Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <WhiteSpace spaces={10} />
              <Cell element="Scandium" symbol="Sc" atomic={21} mass={45} type="transition metal" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Titanium" symbol="Ti" atomic={22} mass={48} type="transition metal" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Vanadium" symbol="V" atomic={23} mass={51} type="transition metal" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Chromium" symbol="Cr" atomic={24} mass={52} type="transition metal" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Manganese" symbol="Mn" atomic={25} mass={55} type="transition metal" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Iron" symbol="Fe" atomic={26} mass={56} type="transition metal" onHoveredSymbolChange={handleHoveredSymbolChange} />
            </tr>
            <tr>
              <Cell element="Cobalt" symbol="Co" atomic={27} mass={59} type="Alkali Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Nickel" symbol="Ni" atomic={28} mass={59} type="Alkaline Earth Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Copper" symbol="Cu" atomic={29} mass={63.5} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Zinc" symbol="Zn" atomic={30} mass={65.4} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Gallium" symbol="Ga" atomic={31} mass={70} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Germanium" symbol="Ge" atomic={32} mass={73} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Arsenic" symbol="As" atomic={33} mass={75} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Selenium" symbol="Se" atomic={34} mass={79} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Bromine" symbol="Br" atomic={35} mass={80} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Krypton" symbol="Kr" atomic={36} mass={84} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Rubidium" symbol="Rb" atomic={37} mass={85} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Strontium" symbol="Sr" atomic={38} mass={88} type="Transition Metals" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Yttrium" symbol="Y" atomic={39} mass={89} type="transition metal" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Zirconium" symbol="Zr" atomic={40} mass={91} type="transition metal" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Niobium" symbol="Nb" atomic={41} mass={93} type="transition metal" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Molybdenum" symbol="Mo" atomic={42} mass={96} type="transition metal" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Technetium" symbol="Tc" atomic={43} mass={98} type="transition metal" onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Strontium" symbol="Sr" atomic={38} mass={88} type="alkaline earth metal" onHoveredSymbolChange={handleHoveredSymbolChange} />

            </tr>
            <tr>
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"Alkali Metals"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"Alkaline Earth Metals"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"Transition Metals"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"Transition Metals"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"Transition Metals"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"Transition Metals"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"Transition Metals"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"Transition Metals"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"Transition Metals"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"Transition Metals"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"Transition Metals"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"Transition Metals"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"metal"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"metal"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"metal"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"metal"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"metal"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"metal"} onHoveredSymbolChange={handleHoveredSymbolChange} />
            </tr>
            <tr>
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"Alkali Metals"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"Alkaline Earth Metals"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"Transition Metals"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"Transition Metals"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"Transition Metals"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"Transition Metals"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"Transition Metals"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"Transition Metals"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"Transition Metals"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"Transition Metals"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"Transition Metals"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"Transition Metals"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"metal"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"metal"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"metal"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"metal"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"metal"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"metal"} onHoveredSymbolChange={handleHoveredSymbolChange} />
            </tr>
            <tr>
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"Alkali Metals"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"Alkaline Earth Metals"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"Transition Metals"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"Transition Metals"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"Transition Metals"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"Transition Metals"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"Transition Metals"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"Transition Metals"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"Transition Metals"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"Transition Metals"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"Transition Metals"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"Transition Metals"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"metal"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"metal"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"metal"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"metal"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"metal"} onHoveredSymbolChange={handleHoveredSymbolChange} />
              <Cell element="Litio" symbol="L" atomic={3} mass={6} type={"metal"} onHoveredSymbolChange={handleHoveredSymbolChange} />
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  )
}
