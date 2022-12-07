import React from 'react'

const FontStyle = ({fontStyle, setFontStyle}) => {

  const options = [
    {value: '', text: 'Choose'},
    {value: 'normal', text: 'Normal'},
    {value: 'bold', text: 'Bold'},
    {value: 'italic', text: 'Italic'},
  ];

  return (
    <div style={{display:'flex', justifyContent:'space-between',backgroundColor:'gray', borderRadius:'10px', margin:'20px 0', padding:'10px'}}>
        <label>FontStyle</label>
      <div>
      <select value={fontStyle} onSelect={(e)=>setFontStyle(e.target.value)}>
      {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      </div>
    </div>
  )
}

export default FontStyle;
