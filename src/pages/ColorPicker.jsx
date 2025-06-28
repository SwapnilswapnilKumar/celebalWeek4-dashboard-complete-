import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { Header } from '../components';

const ColorPicker = () => {
  const [color1, setColor1] = useState('#aabbcc');
  const [color2, setColor2] = useState('#ff88aa');

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Color Picker" />

      <div className="text-center space-y-10">
        {/* Preview Area */}
        <div
          id="preview"
          className="w-full h-40 rounded-lg shadow-inner border"
          style={{ backgroundColor: color1 }}
        />

        {/* Inline Palette */}
        <div className="flex flex-col items-center">
          <p className="text-2xl font-semibold mt-2 mb-4">Inline Palette</p>
          <HexColorPicker color={color1} onChange={setColor1} />
          <p className="mt-2 text-gray-600">Selected Color: <span className="font-mono">{color1}</span></p>
        </div>

        {/* Inline Picker */}
        <div className="flex flex-col items-center">
          <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
          <HexColorPicker color={color2} onChange={setColor2} />
          <p className="mt-2 text-gray-600">Selected Color: <span className="font-mono">{color2}</span></p>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
