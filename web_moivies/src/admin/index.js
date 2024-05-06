// AdminPage.js

import React, { useEffect, useState } from 'react';
import ImageUploader from './components/uploadImage';
import LogoutButton from './components/buttonLogout';
import LoginPage from './login';
import SliderMenu from './components/SliderMenu';
import api from '../controllers/api/api';
import { login, logout } from './services/AuthService';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

const AdminPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (username, password) => {
    try {
      const response = await api.post('auth/login', JSON.stringify({ username, password }));
      if (response.status == 201) {
        // Nếu đăng nhập thành công, setLoggedIn(true) và setUsername(username)
        setLoggedIn(true);
        setUsername(username);
        login(response.data.access_token);
      } else {
        // Nếu đăng nhập không thành công, hiển thị thông báo lỗi
        alert(response.statusText);
      }
    } catch (error) {
      console.error('Lỗi đăng nhập:', error);
      // Xử lý lỗi đăng nhập
    }
  };

  const handleLogout = () => {
    // Thực hiện đăng xuất
    logout();
    setLoggedIn(false);
    setUsername('');
  };

  const handleImageUpload = (image) => {
    // Thực hiện upload hình ảnh và lưu vào public upload folder
  };

  useEffect(() => {
    // Kiểm tra xem có token trong local storage không
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
      setLoading(true);
      api.post('/users/token', [], {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      .then((response) => {
        setUsername(response.data.username);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Lỗi khi lấy thông tin user:', error);
        setLoading(false);
      });
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {!loggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <div>
          <h1>Trang quản trị</h1>
          <p>Chào mừng bạn, {username}!</p>
          <LogoutButton onLogout={handleLogout} />
          <SliderMenu />
          <ImageUploader onImageUpload={handleImageUpload} />
        </div>
      )}
    </div>
  );
};

export default AdminPage;
