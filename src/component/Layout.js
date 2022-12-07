import React from 'react'

const Layout = ({bgcolor, fontColor, fontSize,fontStyle, underLine,downloadData}) => {
  console.log(fontStyle)

  const {bold, italic,normal} = fontStyle;
  return (
   <div>
    <div style={{backgroundColor:`${bgcolor}`,padding:'30px'}}>

      <h3 style={{color:`${fontColor}`, fontSize:`${fontSize}px`, fontWeight: bold == 'bold'? 'bold' : 'normal'}}>Layout</h3>

      <h5 style={{color:`${fontColor}`,fontSize:`${fontSize}`}}>Headings must have content and the content must be accessible by a screen reader Headings must have content and the content must be accessible by a screen reader Headings must have content and the content must be accessible by a screen reader Headings must have content and the content must be accessible by a screen reader Headings must have content and the content must be accessible by a screen reader Headings must have content and the content must be accessible by a screen reader Headings must have content and the content must be accessible by a screen reader Headings must have content and the content must be accessible by a screen reader Headings must have content and the content must be accessible by a screen reader Headings must have content and the content must be accessible by a screen reader Headings must have content and the content must be accessible by a screen reader Headings must have content and the content must be accessible by a screen reader Headings must have content and the content must be accessible by a screen reader</h5>

      <div style={{color:`${fontColor}`,borderBottom: underLine == true ? '1px solid red': ''}}>UnderLine</div>

    </div>

    <div>
      <button onClick={downloadData()}>Save</button>
    </div>
   </div>
  )
}

export default Layout;
