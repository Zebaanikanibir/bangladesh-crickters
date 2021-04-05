import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Crickter.css';

const Crickters = (props) => {

    const {name, image, salary, job} = props.crickter;
    const handleAddCrickter = props.handleAddCrickter;
    return (
        <div className="crickters">
            
            <div className="crickter">
            <img src={image}/>
                <h2>{name}</h2>
                <h3>{job}</h3>
                <p><small>Monthly salary: ${salary}</small></p>
                <button type="button" className="btn btn-danger" onClick={() => handleAddCrickter(props.crickter)}>Add <FontAwesomeIcon icon={faPlus} /></button>
            </div>
    
        </div>
    );
};

export default Crickters;