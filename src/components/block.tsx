import "./block.css"
import { getColorByType } from "./colors"

interface BlockProps {
    element: string
    symbol: string
    mass: number
    atomic: number
    type: string
}

function Block({ element, symbol, mass, atomic, type }: BlockProps) {
    const elementColor = getColorByType(type)

    return (
        <div className={`block ${elementColor} font-bold`}>
            <p className="atomic">{atomic}</p>
            <p className="mass">{mass}</p>
            {symbol}
            <span className="span-block">{element}</span>
        </div>

    )
}

export default Block
