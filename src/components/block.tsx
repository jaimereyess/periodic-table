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
        <div className={`block ${elementColor}`}>
            <p className="atomic">{atomic}</p>
            {symbol}
            <span className="span-block">{element}</span>
            <p className="mass">{mass}</p>
        </div>
    )
}

export default Block
