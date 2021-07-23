import React from 'react'
const defaultForm = {
    name: "",
    size: "",
    topping1: false,
    topping2: false,
    special: "",
}
export default function Form() {
    const [formState, setFormState] = useState(defaultForm)
    const change = evt => {
        const {value, type, name, checked} = evt.target;
        const newValue = type === "checkbox" ? checked : value;

        setFormState(prevState => {
            return {...prevState, [name]: newValue}
        })
    }
    return (
        <div>
            <form id="pizza-form">
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
            </form>
        </div>
    )
}
