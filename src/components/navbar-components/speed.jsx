import React from 'react';

// Speed list component
const Speed = (props) => {
    return (
        <span className="options w-full h-10">
            <select 
                name="Algorithm" id="menu" className="speed-menu h-full w-full rounded-md bg-gray-600 shadow text-gray-200 px-5 uppercase"
                onChange = {(e) => props.onChange(e.target.value, "speed")}>
                {props.speeds.map(element => (
                    <option 
                        key = {element}
                        value = {element}>
                        {element}x
                    </option>
                ))}
            </select>
        </span>
    );
}
 
export default Speed;