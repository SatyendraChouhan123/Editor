import React from 'react'

const FontColor = ({fontColor, setfontColor}) => {
  return (
    <div style={{display:'flex', justifyContent:'space-between',backgroundColor:'gray', borderRadius:'10px', margin:'20px 0', padding:'10px'}}>
       <label>Font Color</label>
      <input type='color' value={fontColor} onChange={(e)=>setfontColor(e.target.value)}></input>
    </div>
  )
}

export default FontColor
