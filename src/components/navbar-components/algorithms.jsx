import React from 'react';

// Algorithm list component
const Algorithms = (props) => {
    return (
        <span className="w-full h-10">
            <select 
                name="Algorithm" id="menu" className="algo-menu h-full w-full rounded-md bg-gray-600 shadow text-gray-200 px-5 uppercase"
                onChange = {(e) => props.onChange(e.target.value, "algo")}>
                {props.algorithms.map(element => (
                    <option 
                        key = {element.value}
                        value = {element.value}>
                        {element.type}
                    </option>
                ))}
            </select>
        </span>
    );
}
 
export default Algorithms;