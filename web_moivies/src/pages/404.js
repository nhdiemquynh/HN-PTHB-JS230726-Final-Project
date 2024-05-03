import React from 'react';
import { Button, Result } from 'antd';
const Page404 = () => (
  <Result
    status="404"
    title="404"
    subTitle="Upps, Trang không tồn tại."
    extra={<Button type="primary" onClick={() => window.location.href = '/'}>Trở về trang chủ</Button>}
  />
);
export default Page404;