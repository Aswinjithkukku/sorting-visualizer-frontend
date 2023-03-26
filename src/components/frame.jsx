import React from 'react';

// Frame Component for rendering list
class Frame extends React.Component {
    render() { 
        return (
            <div className="frame bg-gray-600">
                <div className="p-[1rem] flex min-h-[80vh] items-start w-full">
                    {this.props.list.map((element, index) => (
                        <div
                            className = {this.getClass(element.classType)}
                            key = {index}
                            style = {{height : `${4*element.key}px`}}
                            value = {element.key}>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // using css classes to change color of elements
    getClass = (value) => {
        if(value === 0) return 'flex m-[1px] relative items-start bg-gray-200 transition-all ease-in duration-500 w-full rounded';
        else if(value === 1) return 'flex m-[1px] relative items-start bg-[#6184D8] border border-[#6184D8] transition-all ease-in duration-500 w-full rounded';
        return 'flex m-[1px] relative items-start bg-[#9CEC5B] border border-[#9CEC5B] transition-all ease-in duration-500 w-full rounded';
    };
}
 
export default Frame;