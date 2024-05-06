import { Alert, Col, Row } from "antd";
import { Footer } from "antd/es/layout/layout";
import Marquee from "react-fast-marquee";

const FooterMain = () => {

  const style = {
    background: '#fff',
    padding: '8px 0',
    margin: '16px 0',
    minHeight: '200px',
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
            <a href="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <img src={'/logo192.png'} alt={'sfsdf'} style={{ width: '80px', height: '80px', margin: 'auto', display: 'block' }}/>
            </a>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>
            <h3>Được quan tâm</h3>
            <ul className='list-menu' style={{ padding: '0', listStyle: 'none' }}>
              <li style={{ padding: '0', listStyle: 'none' }}>
                <a>Phim đang chiếu</a>
              </li>
              <li style={{ padding: '0', listStyle: 'none' }}>
                <a>Phim lẻ</a>
              </li>
              <li style={{ padding: '0', listStyle: 'none' }}>
                <a>Phim bộ</a>
              </li>
            </ul>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>
            <h3>Thông tin</h3>
            <ul className='list-menu' style={{ padding: '0', listStyle: 'none' }}>
              <li style={{ padding: '0', listStyle: 'none' }}>
                <a>Về chúng tôi</a>
              </li>
              <li style={{ padding: '0', listStyle: 'none' }}>
                <a>Liên hệ</a>
              </li>
              <li style={{ padding: '0', listStyle: 'none' }}>
                <a>Chính sách bảo mật</a>
              </li>
              <li style={{ padding: '0', listStyle: 'none' }}>
                <a>Khiếu nại bản quyền</a>
              </li>
            </ul>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>
            <h3>Quốc gia</h3>
            <ul className='list-menu' style={{ padding: '0', listStyle: 'none' }}>
              <li style={{ padding: '0', listStyle: 'none' }}>
                <a>Trung quốc</a>
              </li>
              <li style={{ padding: '0', listStyle: 'none' }}>
                <a>Hàn quốc</a>
              </li>
              <li style={{ padding: '0', listStyle: 'none' }}>
                <a>Nhật bản</a>
              </li>
              <li style={{ padding: '0', listStyle: 'none' }}>
                <a>Việt nam</a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>

      <Alert
        banner
        message={
          <Marquee pauseOnHover gradient={false}>
              <a href='/register'>Đăng ký ngay </a>&nbsp; để nhận được thông báo về các bộ phim mới nhất
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