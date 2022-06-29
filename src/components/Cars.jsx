import React from 'react';
import cars from './carStore';

function Cars() {
    const [honda, tesla] = cars;
    const {coloursByPopularity: {hondaTopColour}, speedStats:{topSpeed:hondaTopSpeed}} = honda;
    const {coloursByPopularity: {teslaTopColour}, speedStats:{topSpeed:teslaTopSpeed}} = tesla;

  return (
    <div>
        <h1>"Cars"</h1>
        <table>
       <tr>
         <th>Brand</th>
         <th>Top Speed</th>
         <th>Most popular Color</th>
       </tr>
    <tr>
       <td>{tesla.model}</td>
       <td>{teslaTopSpeed}</td>
       <td>{teslaTopColour}</td>
    </tr>
     <tr>
       <td>{honda.model}</td>
       <td>{hondaTopSpeed}</td>
       <td>{hondaTopColour}</td>
     </tr>

  </table>,
    </div>
  )
}

export default Cars