import React from 'react'

export default function ItemDetail(ItemDetailContainer) {



return (
    // <div>
    //         {ItemDetailContainer.id ? (
    //             <div>
    //                 <p>{ItemDetailContainer.title}</p>
    //                 <p>{ItemDetailContainer.description}</p>
    //                 <p>{ItemDetailContainer.price}</p>
    //             </div>
    //         ) : (
    //             <p>Loading...</p>
    //         )}
    //     </div>
    <div>
        {JSON.stringify(ItemDetailContainer)}
    </div>
    )
}
