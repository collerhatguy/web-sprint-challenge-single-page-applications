import React from 'react'

export default function Topping(props) {
    const { topping, formState, change } = props;
    return (
        <label for={topping}>
            {topping}:
            <input 
                type="checkbox" 
                name={topping} 
                onChange={change}
                checked={formState[topping]}
            />
        </label>    
    )
}
