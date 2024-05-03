import React from 'react';
import { Layout } from 'antd';

import NotificationBottom from './components/Notification.bottom';
import RouterWeb from './routes/web';

import HeaderMain from './layouts/Header';
import FooterMain from './layouts/Footer';
const { Content } = Layout;

const Movies = () => {

  return (
    <Layout>
      <HeaderMain />

      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <RouterWeb />
      </Content>

      <FooterMain />

      <NotificationBottom />
    </Layout>
  );
};

export default Movies;