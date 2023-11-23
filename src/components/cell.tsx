"use client"
import { getColorByType } from "./colors";

interface CellProps {
    element: string;
    symbol: string;
    atomic: number;
    mass: number;
    type: string
    onHoveredSymbolChange: (data: { element: string, symbol: string, atomic: number, mass: number, type: string }) => void;
}

const Cell = ({ element, symbol, atomic, mass, type, onHoveredSymbolChange }: CellProps) => {
    const handleHover = () => {
        onHoveredSymbolChange({
            element: element,
            symbol: symbol,
            atomic: atomic,
            mass: mass,
            type: type
        });
    };

    const elementColor = getColorByType(type)

    return (
        <td className={`relative text-center w-20 h-16 text-2xl duration-700 transition-ease-in-out font-bold
              hover:scale-150 ${elementColor} hover:outline hover:outline-1 hover:outline-white `}
            onMouseEnter={handleHover}>
            <p className='absolute text-sm top-0 left-1'>{atomic}</p>
            <span className='absolute text-2xl left-1/2 -translate-x-1/2 -translate-y-1/2'>{symbol}</span>
            <span className='absolute text-xxs left-1/2 bottom-[-8px] -translate-x-1/2'>{element}</span>
        </td>
    )
}

export default Cell
