import React from 'react'

const Quote = ({children} : {children: string}) => {
    return (
        <p className="btm-gray-400 text-lg pl-2 border-l-2 mb-6">{children}</p>
    )
}

export default Quote