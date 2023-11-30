import React, { useEffect, useState } from 'react';
import Values from 'values.js';
import { v4 as uuidv4 } from 'uuid';
import SingleColor from './SingleColor';

const ColorGrading = () => {
    const [colorInput, setColorInput] = useState({
        color: "",
        qty: 10
    });
    const [selectedColor, setSelectedColor] = useState([]);
    const [isError, setIsError] = useState(false);

    const handleChange = (e) => {
        setIsError(false);
        const {name, value} = e.target;
        setColorInput({...colorInput, [name]: value});
    }
    // console.log(colorInput);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(colorInput.color && colorInput.qty) {
            const {color, qty} = colorInput;

            try {
                setSelectedColor(new Values(color).all(Math.round((100 / parseInt(qty, 10)) * 2)));
                setColorInput({
                    color: "",
                    qty: 10
                })
            } catch (err) {
                setIsError(true);
            }
            console.log(selectedColor);
        }
    }

    useEffect(()=>{
        setColorInput({...colorInput, color: "#1194ec"});
        setSelectedColor(new Values("#1194ec").all(Math.round((100 / parseInt(colorInput.qty, 10)) * 2)));
        console.log(selectedColor);
    }, [])
    
    return (
        <>
            <form className="d-flex justify-content-center" onClick={handleSubmit}>
                <input 
                type="text" 
                name="color" 
                id="color" 
                maxLength={7}
                value={colorInput.color}
                onChange={handleChange}
                className="mx-3"></input>
                <input 
                type="number" 
                name="qty" 
                id="qty" 
                step={5}
                max={100}
                min={5}
                value={colorInput.qty}
                onChange={handleChange}
                className="mx-3"></input>
                <button className="px-4 mx-3">CREATE</button>
            </form>
            <section className="mt-5">
                <div className="container">
                    <div className="row">
                        {isError ? (
                            <h4 className="text-center">Ops nessun colore trovato</h4>
                        ) : !isError && selectedColor ? (
                            selectedColor.map((el) => <SingleColor key={uuidv4()} {...el}/>)
                        ) : (
                            <h4 className="text-center">Loading...</h4>
                        )}
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default ColorGrading
