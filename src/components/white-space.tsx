import React from 'react'


const WhiteSpace = ({ spaces }: { spaces: number }) => {
    return (
        <td colSpan={spaces}></td>
    )
}

export default WhiteSpace
