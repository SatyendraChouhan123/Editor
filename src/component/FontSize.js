import React from 'react'

const FontSize = ({fontSize, setFontSize}) => {
  return (
    <div style={{display:'flex', justifyContent:'space-between',backgroundColor:'gray', borderRadius:'10px', margin:'20px 0', padding:'10px'}}>
        <label>Font Size</label>
      <input type='number' value={fontSize} onChange={(e)=>setFontSize(e.target.value)} style={{width:'30px', display:'inline'}}></input>
    </div>
  )
}

export default FontSize
