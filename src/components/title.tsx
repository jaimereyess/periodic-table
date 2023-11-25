import React from 'react'
import { Thursday } from 'moving-letters'

export default function Tittle({ text }: { text: string }) {
    return (
        <React.Fragment>
            <div className='text-6xl font-bold'>
                <Thursday text={`${text}`} />
            </div>
        </React.Fragment>
    )
}
