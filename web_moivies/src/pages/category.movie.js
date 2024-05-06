import React, { useEffect, useState } from 'react';
import { Alert, Avatar, Badge, Breadcrumb, Carousel, Col, Layout, Menu, Pagination, Row, Space, theme } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import Marquee from 'react-fast-marquee';
import { getMovies } from '../controllers/api/movies.controller';
import SlideCarousel from '../components/Slide';
import { useParams } from 'react-router-dom';
const { Header, Content, Footer } = Layout;
let items;

const CategoryMovie = () => {
  const [movies, setMovies] = useState([]);
  const [categories, setCategories] = useState([1, 2, 3, 4]);
  const { id } = useParams(); // Access the ID parameter
  const [details, setDetails] = useState({});

  useEffect(() => {
    console.log(details);
  }, [id]);


  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies();
      setMovies(data);
    };

    fetchMovies();


  }, []);

  useEffect(() => {
    items = categories.fill(null).map((_, index) => ({
      key: index + 1,
      label: `nav ${index + 1}`,
    }));
  }, [categories]);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onChange = (pageNumber) => {
    console.log('Page: ', pageNumber);
  };

  return (
    <>
      <Breadcrumb
        style={{
          margin: '16px 0',
        }}
      >
        <Breadcrumb.Item>Phim theo thể loại</Breadcrumb.Item>
      </Breadcrumb>
      <div
        style={{
          background: 'none',
          padding: 0,
        }}
      >
        <h2>Phim đang được quan tâm</h2>
        <Carousel style={{margin: '20px 0'}} slidesToShow={6} autoplay={true} autoplaySpeed={2000} margin={20}>
          {movies.map((movie) => (
            <div style={{padding: '20px'}}>
              <div key={movie.id} style={{ padding: '0 10px', background: '#ffffff' }}>
                <a href={`/movie/${movie.id}`} key={movie.id}>
                  <img src='https://images2.thanhnien.vn/528068263637045248/2024/3/21/phimquaivatparasytethegrey-1711018941499514734847.png' style={{width: '100%'}}/>
                  <h3 style={{ textAlign: 'left' , margin: '5px 0', padding: '0 10px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: 'black', fontSize: '16px'}}>{movie.title}</h3>
                  <p style={{ textAlign: 'left' , margin: '0', padding: '0 10px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: 'black', fontSize: '14px'}}>{movie.description}</p>
                  <p style={{ textAlign: 'left' , margin: '0', padding: '0 10px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: 'black', fontSize: '14px'}}>{movie.release_year}</p>
                </a>
              </div>
            </div>
          ))}
        </Carousel>
        <h2 style={{ textAlign: 'left', margin: '20px 0' }}>Phim thể loại: </h2>
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          {movies.map((movie) => (
            <Col  className="gutter-row" span={6}>
              <div style={{ padding: '20px' }}>
                <div key={movie.id} style={{ padding: '0 10px', background: '#ffffff' }}>
                  <a href={`/movie/${movie.id}`} key={movie.id}>
                    <img src='https://images2.thanhnien.vn/528068263637045248/2024/3/21/phimquaivatparasytethegrey-1711018941499514734847.png' style={{ width: '100%' }} />
                    <h2 style={{ textAlign: 'left' , margin: '5px 0', padding: '0 10px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: 'black', fontSize: '16px'}}>{movie.title}</h2>
                  <p style={{ textAlign: 'left' , margin: '0', padding: '0 10px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: 'black', fontSize: '14px'}}>{movie.description}</p>
                  <p style={{ textAlign: 'left' , margin: '0', padding: '0 10px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: 'black', fontSize: '14px'}}>{movie.release_year}</p>
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div style={{margin: '20px 0', textAlign: 'center'}}>
          <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
        </div>
      </div>
    </>
  );
};

export default CategoryMovie;