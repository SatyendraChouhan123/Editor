import React from 'react'

const UnderLine = ({underLine, setUnderLine}) => {
 
  return (
    <div style={{display:'flex', justifyContent:'space-between',backgroundColor:'gray', borderRadius:'10px', margin:'20px 0', padding:'10px'}}>
      <label>UnderLine</label>
      <input type='checkbox' value={underLine} onChange={(e)=>setUnderLine(e.target.checked)}></input>
    </div>
  )
}

export default UnderLine
