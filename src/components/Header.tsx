import React, { useState, useRef, useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const openDropdown = (): void => {
    setShowDropdown(true);
  };

  const handleClickOutside = (event: MouseEvent): void => {
    event.preventDefault();
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setShowDropdown(false);
    }
  };

  return (
    <div className="header-container">
      <h1>Pollster</h1>
      <div className="header-account-section">
        <div className="header-menu">
          <button onClick={openDropdown}></button>
          {showDropdown && (
            <div className="header-dropdown" ref={ref}>
              <nav>
                <ul>
                  <li>
                    <a href="https://www.w3schools.com">View Profile</a>
                  </li>
                  <li>
                    <a href="/">Logout</a>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
