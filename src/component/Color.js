import React from 'react';

const Color = ({bgcolor, setBgColor}) => {    

  return (
    <div style={{backgroundColor:'gray', borderRadius:'10px', margin:'20px 0', padding:'10px'}}>
        <label>Bg Color</label>
        <input type='color' name='bgcolor' value={bgcolor} onChange={(e)=>(setBgColor(e.target.value))}></input>
    </div>
  )
}


export default Color;
