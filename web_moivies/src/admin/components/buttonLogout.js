// LogoutButton.js

import React from 'react';

const LogoutButton = ({ onLogout }) => {
  const handleLogout = () => {
    // Thực hiện đăng xuất ở đây
    onLogout();
  };

  return <button onClick={handleLogout}>Đăng xuất</button>;
};

export default LogoutButton;
