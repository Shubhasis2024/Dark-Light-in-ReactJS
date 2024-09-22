import logo from './logo.svg';
import './App.css';
import Navbar from './Componenets/Navbar';
import Text from './Componenets/Text';
import About from './Componenets/About';
import React ,{ useState } from 'react';

function App() {
  const [mode, setmode] = useState('light')

  const tooglemode=()=>{
if(mode==='light'){
  setmode('dark')
  // document.body.style.backgroundColor="black";
 
  }

else
{
  setmode('light')
  // document.body.style.backgroundColor="white";
  
}
}
      

  return (
    <>
   
<Navbar Home="MyHome" Link="About" Dropdown="Services"Disabled="ContactUS"
mode={mode} tooglemode={tooglemode} ></Navbar>
<div>
  <div class="container my-4">
  <Text Haeding="Enter Text to Analyze Below"></Text>
  </div>
 </div>

 {/* <About></About> */}
  </>

  );
}

export default App;
