import React, { useRef, useEffect } from 'react';
import { Offcanvas } from 'bootstrap'; // Importing Offcanvas from Bootstrap

function OffCanvasComponent() {
  const offcanvasRef = useRef(null);

  useEffect(() => {
    // Initialize the Offcanvas instance
    const offcanvasElement = offcanvasRef.current;
    const bsOffcanvas = new Offcanvas(offcanvasElement);
    return () => {
      bsOffcanvas.dispose();  // Cleanup on component unmount
    };
  }, []);

  // Function to show the off-canvas
  const showOffcanvas = () => {
    const offcanvasElement = offcanvasRef.current;
    const bsOffcanvas = Offcanvas.getInstance(offcanvasElement);
    bsOffcanvas.show(); // Show the off-canvas using Bootstrap's API
  };

  return (
    <div>
      {/* Custom Button Trigger with Tailwind CSS */}
      <button 
        className="px-4 py-10 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
        onClick={showOffcanvas}
      >
        Open Menu
      </button>

      {/* Off-canvas */}
      <div 
        className="offcanvas offcanvas-start" 
        tabIndex="-1" 
        id="offcanvasExample" 
        ref={offcanvasRef} 
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas Menu</h5>
          <button 
            type="button" 
            className="btn-close text-reset" 
            data-bs-dismiss="offcanvas" 
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="space-y-4">
            <li><a href="/" className="text-blue-600 hover:underline">Home</a></li>
            <li><a href="/shop" className="text-blue-600 hover:underline">Shop</a></li>
            <li><a href="/about-us" className="text-blue-600 hover:underline">About Us</a></li>
            <li><a href="/contact-us" className="text-blue-600 hover:underline">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OffCanvasComponent;
