import React from 'react'

export default function ItemListContainer({saludo, greeting}) {
return (
    <div>
        <p>
            {saludo}
        </p>
        <p>
            {greeting}
        </p>
    </div>
)
}

