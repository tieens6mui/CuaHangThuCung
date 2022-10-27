import React, { useState } from 'react'
import './Quantity.css'

const Quantity = () =>{
    const [num, setNum] = useState(1);

    const incNum = () => {
        setNum(num+1);
    }

    const desNum = () =>{
        if(num > 1){
            setNum(num-1);
        }
        else
        {
            setNum(1);
        }
    }

    return (
        <>
            <div className="quantity-main">
                <button className="btn-des"onClick={desNum}>-</button>
                <h2 className="quantity-h2">{num}</h2>
                <button className="btn-inc" onClick={incNum}>+</button>
            </div>
        </>
    )
}

export default Quantity;