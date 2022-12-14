import React, { useState, useContext, useRef, useEffect } from 'react';
import { AuthContext } from '../App';

const Header = ({
  user,
  setUser,
}: {
  user: { username: string; password: string };
  setUser: any;
}) => {
  const value = useContext(AuthContext);

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

  const handleLogout = (): void => {
    setUser({ username: '', password: '' });
    value?.dispatch({ type: 'logout' });
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
                  <li>View Profile</li>
                  <li>
                    <button onClick={handleLogout}>Logout</button>
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
