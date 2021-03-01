import React from 'react';
import './Selected.css';

const Selected = (props) => {
    const selected = props.selected
    const totalSalary = selected.reduce((sum, crickter) => sum + crickter.salary, 0)
    return (
        <div className="selected">
            
            <h2 className="mt-4">Selected: {selected.length}</h2>
            <p className="text-light">Total: {totalSalary}</p>
            <ul className="text-light fw-bold">
            {
             selected.map(sl => <li>{sl.name}-{sl.salary}</li>)
            }
            </ul>
            
        </div>
    );
};

export default Selected;