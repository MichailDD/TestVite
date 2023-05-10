import React, { useState } from 'react';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu" onClick={handleMenuToggle}>
      <div className={isOpen ? "line line-1 open" : "line line-1"}></div>
      <div className={isOpen ? "line line-2 open" : "line line-2"}></div>
      <div className={isOpen ? "line line-3 open" : "line line-3"}></div>
    </div>
  );
};

export default BurgerMenu;
