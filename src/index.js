import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let arr=["red","green","orange","brown","green","blue","skyblue","gray"];
let i=0;
function Dater()
{
  
  root.render(
       <div className="App">
        <h2>(See My Digital Clock)</h2>
        <h1 id="box" style={{borderColor:arr[i]}}>{new Date().toLocaleTimeString()}</h1>
        
       </div>
    );
    i++;
    if(i===7)
    {i=0;}
     
}
setInterval(Dater,1000);
reportWebVitals();
