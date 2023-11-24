import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const routes = {
    "Noble Gases": "noble-gases",
    "Transition Metals": "transition-metals",
    "Alkaline Earth Metals": "alcaline-earth-metals",
    "Nonmetals": "nonmetals",
    "Halogens": "halogens",
    "Metalloids": "metalloids",
    "Lanthanides": "lanthanides",
    "Other Metals": "other-metals",
    "Actinides": "actinides",
    "Alkali Metals": "alkali-metals"
}

function ElementsLink({ element }: { element: keyof typeof routes }) {

    const pathname = usePathname()
    const isActive = pathname === `/elements/${routes[element]}`

    const active = isActive ? "bg-blue-500" : "bg-green-500 hover:bg-green-700"
    return (
        <Link href={`/elements/${routes[element]}`} className={`${active} px-6 py-2 rounded-lg`}>{element}</Link>
    )
}

export default ElementsLink
