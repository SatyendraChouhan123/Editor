import React, { useState } from 'react'
import './App.css';
import Color from './component/Color';
import FontSize from './component/FontSize';
import FontStyle from './component/FontStyle';
import FontColor from './component/FontColor';
import UnderLine from './component/UnderLine';
import Layout from './component/Layout';


function App() {
  
  const [bgcolor, setBgColor] = useState('#ffffff');
  const [fontColor, setfontColor] = useState('#000000');
  const [fontSize, setFontSize] = useState(24)
  const [fontStyle, setFontStyle]=useState({bold:'bold', italic:'italic', normal:'normal'})  
  const [underLine, setUnderLine] = useState(false)

  const downloadData = ()=>{
    console.log("Download Form Data")

  //  const data = {
    //  setBgColor({bgcolor:bgcolor}),
      //setfontColor({setfontColor:setfontColor}),
      //setFontSize({fontSize:fontSize}),
      //setFontStyle({setFontStyle:setFontStyle}),
      //setUnderLine({setUnderLine:setUnderLine}),
    //}

    // let userData = JSON.parse(localStorage.getItem(data));


  }



  return (
    <div className="App">
      <div style={{display:'flex',justifyContent:'space-between', border:'1px solid gray', width:'80%', margin:'1vh auto'}}>
        <div style={{display:'flex',flexDirection:'column',justifyItems:'center',border:'1px solid gray', padding:'5px'}}>
        <div>
        <Color bgcolor={bgcolor} setBgColor={setBgColor}/>
        </div>
        <div>
       <FontColor fontColor={fontColor} setfontColor={setfontColor}/>
       </div>
        <div>
        <FontSize fontSize={fontSize} setFontSize={setFontSize}/>
        </div>
        <div>
        <FontStyle fontStyle={fontStyle} setFontStyle={setFontStyle}/>
        </div>
     
        <div>
        <UnderLine underLine={underLine} setUnderLine={setUnderLine}/>
        </div>
        </div>

        <div>
        <Layout bgcolor={bgcolor}  fontSize={fontSize} fontStyle={fontStyle} fontColor={fontColor} underLine={underLine} downloadData={downloadData} />
        </div>
      </div>
    </div>
  );
}

export default App;
