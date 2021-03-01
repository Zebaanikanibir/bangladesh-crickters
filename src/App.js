import React, {useEffect, useState} from 'react';
import Selected from './Components/Selected/Selected';
import Crickters from './Components/Crickters/Crickter';
import CricktersData from './Cricketers-info/data.json'

import './App.css';

function App() {
  const [crickters, setCrickters] = useState([]);
const [selected, setSelected] = useState([]);


useEffect(() =>{

setCrickters(CricktersData)
console.log(CricktersData);
 const names = CricktersData.map(crickter=> crickter.name)
 console.log(names)
});

const handleAddCrickter = (crickter) =>{

  const newSelected = [...selected, crickter]
  setSelected(newSelected)
  
  }
  return (
    <div className="App">
    
     <h1>Bangladesh Cricketers: {crickters.length}</h1>
     <Selected selected={selected}></Selected>
     <ul className="crickters">

       {
         crickters.map(crickter => <Crickters crickter={crickter} handleAddCrickter={handleAddCrickter}></Crickters>)
       }
     </ul>
     
     
    </div>
  );
}

export default App;
