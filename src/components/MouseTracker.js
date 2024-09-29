import React, { useState, useEffect } from 'react';

const MouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.pageX, y: e.pageY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="tracking-dot z-[100]"
      style={{
        transform: `translate(${position.x - 7.5}px, ${position.y - 7.5}px)`,
      }}
    ></div>
  );
};

export default MouseTracker;
