import React, { useState } from 'react'

// const Basic1 = (props) => {
//     const clickHandler = () => {
//         console.log('click')
//     }

//     const [count, setCount] = useState(0)

//     return (
//         <div>
//             <button onClick={() => setCount(count + 1)}>Count {count}</button>
//             <button onClick={() => { setCount(prevCount => prevCount + 1); setCount(setCount(prevCount => prevCount + 1)); }}>Count {count}</button>
//             <h1>Hello {props.name}</h1>
//         </div>
//     )
// }
const Basic1 = () => {
    const [product, setProducts] = useState({ name: '', price: '' })

    return (
        <div>
            <form>
                <input type='text' value={product.name}
                    onChange={evt => setProducts({ ...product, name: evt.target.value })} />

                <input type='text' value={product.price}
                    onChange={evt => setProducts({ ...product, price: evt.target.value })} />
            </form>
            <h1>{product.name}</h1>
            <h1>{product.price}</h1>
        </div>
    )
}
export default Basic1