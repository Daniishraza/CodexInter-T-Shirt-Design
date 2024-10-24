import React, { useState } from 'react';
import DesignUpload from './components/DesignUpload';
import TShirtPreview from './components/TShirtPreview';
import DownloadButton from './components/DownloadButton';
import './App.css';

function App() {
  const [design, setDesign] = useState(null);
  const [tshirtColor, setTshirtColor] = useState('#ffffff');

  return (
    <div className="App">
      <h1>Design Your T-shirt</h1>

      {/* Design Upload */}
      <DesignUpload onImageUpload={setDesign} />

      {/* T-shirt Color Picker */}
      <label htmlFor="tshirt-color">Choose T-shirt Color:</label>
      <input
        type="color"
        id="tshirt-color"
        value={tshirtColor}
        onChange={(e) => setTshirtColor(e.target.value)}
      />

      {/* T-shirt Preview */}
      <TShirtPreview design={design} tshirtColor={tshirtColor} />

      {/* Download Preview */}
      <DownloadButton />
    </div>
  );
}

export default App;
