import React, { useState } from 'react';
import './ToggleTheme.css';

export const ToggleTheme = () => {
  const [isDark, setIsDark] = useState(false);
  function handleChange() {
    localStorage.setItem('color_mode', !isDark);
    setIsDark(!isDark);
  }
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isDark}
      />
    </div>
  );
};
