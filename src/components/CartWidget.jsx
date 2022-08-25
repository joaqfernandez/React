import React from 'react'

export default function CartWidget({counter}) {
    return (
        <div>
            <span>🛒</span>
            <span>{counter}</span>
        </div>
    )
}
