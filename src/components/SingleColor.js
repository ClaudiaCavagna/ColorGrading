import React, { useEffect, useState } from 'react';
import { rgbToHex } from "../utils/helper";

const SingleColor = ({ rgb, type, weight }) => {
    
    const [message, setMessage] = useState(false);
    const copyColor = () => {
        navigator.clipboard
          .writeText(rgbToHex(...rgb))
          .then((response) => console.log("copied"));
        setMessage(true);
    };

    useEffect(() => {
        if(message) {
            const timer = setTimeout(() => {
                setMessage(false);
            }, 3000)
            return clearTimeout(timer);
        }
    }, [message])

    return (
        <div 
        onClick={copyColor}
        className={`col-3 text-center text-align-center ${type} single-color`}
        style={{ backgroundColor: `${rgbToHex(...rgb)}`, height: '150px'}}
        >
        <h5 className="">{rgbToHex(...rgb)}</h5>
        {message && <p>Colore copiato</p>}
        </div>
    )
}

export default SingleColor
