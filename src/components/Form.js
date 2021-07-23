import React, { useState, useEffect } from 'react';
import axios from "axios";
import Topping from "./Topping";

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
    const toppings = ["bacon", "chicken", "olives", "pineapple"];

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
            name: formState.name.trim(),
            size: formState.size.trim(),
            special: formState.special.trim(),
        }
        axios.post("https://reqres.in/api/orders", newOrder)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
            .finally(() => setFormState(defaultForm));
    }
    useEffect(() => {
        const { name } = formState;
        setError(name.length < 2 ? "name must be at least 2 characters" : "");
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
                {toppings.map(t => 
                    <Topping 
                        topping={t} 
                        change={change} 
                        formState={formState} 
                    />
                )}
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
                    disabled={error.length}
                >Add to Order</button>
            </form>
        </main>
    )
}
