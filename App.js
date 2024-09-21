import logo from './logo.svg';
import './App.css';
import Navbar from './Componenets/Navbar';
import Text from './Componenets/Text';
import About from './Componenets/About';


function App() {
  return (
    <>
   
<Navbar Home="MyHome" Link="About" Dropdown="Services"Disabled="ContactUS"></Navbar>
<div>
  <div class="container my-4">
  <Text Haeding="Enter Text to Analyze Below"></Text>
  </div>
 </div>

 <About></About>
  </>

  );
}

export default App;
