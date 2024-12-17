"use client";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";


function TestApp () {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <div className="printable-content">
        <h1>Printable Content</h1>
        <p>This will appear in the printed version.</p>
      </div>
      <div className="no-print">
        <p>This content will not be printed.</p>
      </div>
      <button onClick={handlePrint}>Print</button>
    </div>
  );
};

export default TestApp;
