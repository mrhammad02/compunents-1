import React from 'react';
import logo from './logo.svg';
import BARbutton from './compunents/BAButton';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Inputt from './compunents/Inp';

import './App.css';

function App() {
  return (
    <div className="App">
     <BARbutton  btnVal="login" className="btn btn-primary rounded-5" onClick={()=>{
      console.log("all ok")
     }}/>
     <BARbutton btnVal="signup" className="btn btn-primary"/>
     <BARbutton 
     btnVal="demo" className="btn btn-primary"/>
     <Inputt onChange={(e:any)=>{
      console.log(e.target.value) }} className ="bg-danger text-white"/>

    </div>
  );
}

export default App;
