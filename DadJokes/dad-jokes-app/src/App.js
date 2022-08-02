import React from 'react'
import Navbar from './Component/layout/Navbar';
import Joke from './Component/Joke';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import About from './Component/pages/About';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <div className='container mx-auto'/>
       <Joke/>
       <About/>
       </div>
    // Not Working 
    // <Router>
    //   <div className="App">
    //   <Navbar/>
    //   <div className='container mx-auto'/>
    //   <Route path='/' element={<Joke/>}/>
    //   <Route path="/about" element={<About/>}/>
    //   </div>
    // </Router>
    
  );
}

export default App;
