import React, { useEffect, useMemo } from 'react';
import { Divider, notification } from 'antd';
const Context = React.createContext({
  name: 'Default',
});

const NotificationBottom = ({ movie }) => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: `${placement}`,
      description: <Context.Consumer>{({ name }) => `${name}!`}</Context.Consumer>,
      placement,
    });
  };
  const contextValue = useMemo(
    () => ({
      name: 'Có 5 phim mới đã được cập nhật',
    }),
    [],
  );

  useEffect(() => {
    let intervalId = setInterval(() => {
      openNotification('Thông báo: Phim mới');
    }, 120000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      <Divider />
    </Context.Provider>
  );
};

export default NotificationBottom;