import { Alert, Col, Row } from "antd";
import { Footer } from "antd/es/layout/layout";
import Marquee from "react-fast-marquee";

const FooterMain = () => {

  const style = {
    background: '#fff',
    padding: '8px 0',
    margin: '16px 0',
  };

  return (
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={6}>
          <div style={style}>
            <image src={'./logo.svg'} alt={'sfsdf'} />
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>
            <h3>Phim mới</h3>
            <ul className='list-menu'>
              <li>
                <a>Khoa học</a>
              </li>
            </ul>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>
            <h3>Phim mới</h3>
            <ul className='list-menu'>
              <li>
                <a>Khoa học</a>
              </li>
            </ul>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>
            <h3>Phim mới</h3>
            <ul className='list-menu'>
              <li>
                <a>Khoa học</a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>

      <Alert
        banner
        message={
          <Marquee pauseOnHover gradient={false}>
            Đăng ký ngay để nhận được thông báo về các bộ phim mới nhất <a href='/register'>Đăng ký</a>
          </Marquee>
        }
      />
      <p>
        Ant Design ©{new Date().getFullYear()} Created by Quynh
      </p>
    </Footer>
  );
}

export default FooterMain;