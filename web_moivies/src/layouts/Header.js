// export header components for layout
import { Avatar, Badge, Menu, Space } from 'antd';
import { useEffect, useState } from 'react';
import { Header } from 'antd/es/layout/layout';
import { UserOutlined } from '@ant-design/icons';
import { getCategories } from '../controllers/api/categories.controller';

const HeaderMain = () => {
  const [categories, setCategories] = useState([]);
  let items = null;

  useEffect(() => {
    const resCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };

    resCategories();
  }, []);

  if (categories.length > 0) {
    items = categories.map((item, index) => ({
      key: item?.id,
      label: item?.name,
      title: item?.name,
      onClick: () => {
        window.location.href = `/category/${item?.id}`;
      },
    }));
  }

  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="demo-logo" >
        <a href={'/'}>
        <img src={'/logo192.png'} alt={'sfsdf'} style={{ width: 50, height: 50, display: 'block', margin: 'auto' }}/>
        </a>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[]}
        items={items}
        style={{
          flex: 1,
          minWidth: 0,
        }}
      />
      <Space size={24}>
        <Badge count={3}>
          <Avatar shape="square" icon={<UserOutlined />} />
        </Badge>
      </Space>
    </Header>
  );
}


export default HeaderMain;