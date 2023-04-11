import React from 'react';

import Algorithms from './navbar-components/algorithms';
import Size from './navbar-components/size';
import Speed from './navbar-components/speed';

// Navbar Component
class Navbar extends React.Component {
    state = {
        Algorithms: [
            { value: 1, type: 'Bubble Sort' },
            { value: 2, type: 'Selection Sort' },
            { value: 3, type: 'Insertion Sort' },
            { value: 4, type: 'Merge Sort' },
            { value: 5, type: 'Quick Sort' },
            { value: 6, type: 'Heap Sort' },
            { value: 7, type: 'Twist Sort' },
        ],
        lengths: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        speeds: [0.50, 0.75, 1.00, 2.00, 4.00]
    };

    // prevent the default link behaviour for navbar
    // hide/display button
    handleClick = (e) => {
        e.preventDefault();
        this.props.response();
    }

    render() {
        return (
            <div className='min-h-[20vh] bg-gray-900'>
                <div className=" overflow-hidden text-[16px]  flex items-center py-6" id="navbar">
                    <div className='max-w-screen-2xl mx-auto flex gap-2 justify-center my-5 items-center h-10  w-full'>
                        <button className='bg-gray-600 h-full px-10 rounded-md text-gray-200 uppercase font-[600] shadow' id="mt-5" onClick={() => this.props.newList(1)}>Randomize</button>
                        <Algorithms
                            onChange={this.props.onChange}
                            algorithms={this.state.Algorithms}
                        />
                        <Size
                            onChange={this.props.onChange}
                            lengths={this.state.lengths}
                        />
                        <Speed
                            onChange={this.props.onChange}
                            speeds={this.state.speeds}
                        />
                        <a
                            className="icon hover:text-[#64ffda]"
                            onClick={(e) => this.handleClick(e)}
                            href="/">
                            <i className="fa fa-bars"></i>
                        </a>
                        <button className='bg-gray-600 h-10 px-10 rounded-md text-gray-200 uppercase font-[600] shadow' id="start" onClick={() => this.props.start()}>Start</button>
                    </div>

                </div>
                <div className='max-w-screen-md mx-auto'>
                    <input
                        placeholder='Insert manual list of numbers ex: 1,10,20,30'
                        pattern='^[0-9]+(,[0-9]+)*$'
                        className='w-full outline-none focus:border py-3 placeholder:text-gray-300 px-2 text-gray-200 bg-gray-600 rounded border-green-500' 
                        type="text" onChange={(e) => {
                            this.props.onChange(e.target.value, "listarr")
                        }} /></div>
            </div>

        );
    }
}

export default Navbar;