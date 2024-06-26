import React, { useEffect, useState } from 'react';
import { Alert, Carousel, Col, Pagination, Row, theme } from 'antd';
import Marquee from 'react-fast-marquee';
import { getMovies } from '../controllers/api/movies.controller';
import SlideCarousel from '../components/Slide';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies();
      setMovies(data);
    };

    fetchMovies();
  }, []);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onChange = (pageNumber) => {
    console.log('Page: ', pageNumber);
  };

  const style = {
    background: '#0092ff',
    padding: '8px 0',
  };

  return (
    <>
      <div
        style={{
          background: colorBgContainer,
          minHeight: 280,
          padding: '30px 0',
          borderRadius: borderRadiusLG,
        }}
      >
        <SlideCarousel />
        <h2 style={{ textAlign: 'left', margin: '20px 0' }}>Phim mới nhất</h2>
        <Carousel style={{ margin: '20px 0' }} slidesToShow={6} autoplay={true} autoplaySpeed={2000} margin={20}>
          {movies.map((movie) => (
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
          ))}
        </Carousel>
        <h2 style={{ textAlign: 'left', margin: '20px 0' }}>Phim Hot</h2>
        <Carousel style={{ margin: '20px 0' }} slidesToShow={6} autoplay={true} autoplaySpeed={2000} margin={20}>
          {movies.map((movie) => (
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
          ))}
        </Carousel>
        <h2 style={{ textAlign: 'left', margin: '20px 0' }}>Phim the thể loại</h2>
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          {movies.map((movie) => (
            <Col className="gutter-row" span={6}>
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
      </div>
    </>
  );
};

export default HomePage;