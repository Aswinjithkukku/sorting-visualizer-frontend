import React from 'react';

// Size list component
const Size = (props) => {
    return (
        <span className="options w-full h-10">
            <select 
                name="size" id="menu" className="size-menu h-full w-full rounded-md bg-gray-600 shadow text-gray-200 px-5 uppercase"
                onChange = {(e) => props.onChange(e.target.value, "size")}>
                {props.lengths.map(element => (
                    <option 
                        key = {10*element}
                        value = {element}>
                        {element}
                    </option>
                ))}
            </select>
        </span>
    );
}
 
export default Size;