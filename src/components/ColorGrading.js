import React from 'react';
import Values from 'values.js';

const ColorGrading = () => {

    
    return (
        <>
            <form className="d-flex justify-content-center">
                <input type="text" name="color" id="color" className="mx-3"></input>
                <input 
                type="number" 
                name="qty" 
                id="qty" 
                step={5}
                max={100}
                min={5}
                className="mx-3"></input>
                <button className="px-4 mx-3">CREATE</button>
            </form>
        </>
    )
}

export default ColorGrading
