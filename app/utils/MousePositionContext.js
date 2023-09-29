import React, { createContext, useContext, useState, useEffect } from 'react';

const MousePositionContext = createContext();

export const useMousePosition = () => {
  return useContext(MousePositionContext);
};


export const MousePositionProvider = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <MousePositionContext.Provider value={mousePosition}>
      {children}
    </MousePositionContext.Provider>
  );
};