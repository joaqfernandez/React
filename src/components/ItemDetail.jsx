import React from 'react'

export default function ItemDetail({data}) {



return (
    <div>
            {data.id ? (
                <div>
                    <p>{data.title}</p>
                    <p>{data.description}</p>
                    <p>{data.price}</p>
                    <p>{data.image}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}
