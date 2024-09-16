import React, { useState } from 'react';
import './App.css';
import { QRCode } from 'react-qrcode-logo';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [qrValue, setQrValue] = useState(""); 

  const handleGenerate = () => {
    setQrValue(inputValue); 
  };

  return (
    <div>
      <span>QR Code Generator</span>
      <div className="genratorDiv">
        <input 
          placeholder="Enter Text Here" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
        />
        <button onClick={handleGenerate}>Generate Code</button>
        
     
        {qrValue && <QRCode value={qrValue}  size={300} fgColor="#0969DA"/>}
      </div>
    </div>
  );
}

export default App;
