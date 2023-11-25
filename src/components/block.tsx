"use client"
import "./block.css"
import { getColorByType } from "./colors"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { blockAnimated } from "./animations"

interface BlockProps {
    element: string
    symbol: string
    mass: number
    atomic: number
    type: string
}


function Block({ element, symbol, mass, atomic, type }: BlockProps) {

    const pathname = usePathname()
    const isTable = pathname === `/`

    const table = isTable ? "absolute top-[12%] left-[15%]" : "relative"

    const elementColor = getColorByType(type)

    return (
        <motion.article variants={blockAnimated} >
            <div className={`blockElements top-[12%] ${table} ${elementColor} font-bold`}>
                <p className="atomic">{atomic}</p>
                <p className="mass">{mass}</p>
                {symbol}
                <span className="span-block">{element}</span>
            </div>
        </motion.article>
    )
}

export default Block
