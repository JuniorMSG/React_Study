import React, { useState } from 'react';

function ControlledComponent(props) {

    const [name, setName] = useState('')
    const [essay, setEssay] = useState('Please write an essay about your favorite DOM element.')
    const [flavor, setFlavor] = useState('lime')

    function handleChange(event) {
        setName(event.target.value)
    }

    function handleSubmit(event) {
        alert(`Name: ${name} \nEssay: ${essay} \nFlavor: ${flavor}`);

        event.preventDefault();
    }

    function handleEssayChange(event) {
        setEssay(event.target.value)
    }

    function handleFlavorChange(event) {
        setFlavor(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={handleChange}/>
            </label>
            <input type="submit" value="Submit"/>
            <br/>
            <br/>
            <label>
                Essay:
                <textarea value={essay} onChange={handleEssayChange}/>
            </label>

            <br/>
            <br/>

            <label>
                Pick your favorite flavor:
                <select value={flavor} onChange={handleFlavorChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
            </label>
        </form>
    );
}

export default ControlledComponent;