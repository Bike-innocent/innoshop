import React, { useState } from 'react';
import Header from './Header';
import OffCanvas from './OffCanvas';

function HeaderIndex() {
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  // Toggle function to open/close the OffCanvas
  const toggleOffCanvas = () => {
    setIsOffCanvasOpen(!isOffCanvasOpen);
  };

  return (
    <div>
      <Header toggleOffCanvas={toggleOffCanvas} />
      <OffCanvas isOpen={isOffCanvasOpen} toggleOffCanvas={toggleOffCanvas} />
    </div>
  );
}

export default HeaderIndex;
