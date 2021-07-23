import React, { useState, useEffect } from 'react';
import axios from "axios";

const defaultForm = {
    name: "",
    size: "",
    special: "",
    chicken: false,
    pineapple: false,
    bacon: false,
    olives: false,
}
export default function Form() {
    const [formState, setFormState] = useState(defaultForm);
    const [error, setError] = useState("")
    const change = evt => {
        const {value, type, name, checked} = evt.target;
        const newValue = type === "checkbox" ? checked : value;
        setFormState(prevState => {
            return {...prevState, [name]: newValue}
        })
    }
    const submit = evt => {
        evt.preventDefault();
        const newOrder = {
            ...formState,
            name:  formState.name.trim(),
            size: formState.size.trim(),
            special: formState.special.trim(),
        }
        axios.post("https://reqres.in/api/orders", newOrder)
        
        setFormState(defaultForm);
    }
    useEffect(() => {
        const { name } = formState;
        const newError = name.length < 2 ? "name must be at least 2 characters" : "";
        setError(newError);
    }, [formState])
    return (
        <main>
            <form id="pizza-form" onSubmit={submit}>
                <label for="name-input">
                    Name: 
                    <input
                        onChange={change}
                        value={formState.name}
                        id="name-input"
                        name="name"
                        type="text" 
                    />
                </label>
                <label for="size-dropdown">
                    Size: 
                    <select name="size"
                        onChange={change}
                        value={formState.size}
                        id="size-dropdown"> 
                        <option value="small">small</option>
                        <option value="medium">medium</option>
                        <option value="large">large</option>
                    </select>
                </label>
                <label>
                    Olives: 
                    <input 
                        type="checkbox" 
                        name="olives" 
                        onChange={change}
                        checked={formState.olives}
                    />
                </label>
                <label>
                    Bacon: 
                    <input 
                        type="checkbox" 
                        name="bacon" 
                        onChange={change}
                        checked={formState.bacon}
                    />
                </label>
                <label>
                    Pineapple: 
                    <input 
                        type="checkbox" 
                        name="pineapple" 
                        onChange={change}
                        checked={formState.pineapple}
                    />
                </label>
                <label>
                    Chicken: 
                    <input 
                        type="checkbox" 
                        name="chicken" 
                        onChange={change}
                        checked={formState.chicken}
                    />
                </label>
                <label for="special-text">
                    Special Instruction:
                    <input 
                        type="text" 
                        name="special"
                        id="special-text" 
                        onChange={change}
                        value={formState.special}
                    />
                </label>
                {error ? <p>{error}</p> : null}
                <button type="submit"
                    id="order-button"
                    disabled={error.length > 0}
                >Add to Order</button>
            </form>
        </main>
    )
}
