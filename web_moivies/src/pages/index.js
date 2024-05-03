import React, { useEffect, useState } from 'react';
import { Alert, Carousel, Pagination, theme } from 'antd';
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
        <Alert
          banner
          message={
            <Marquee pauseOnHover gradient={false}>
              Đăng ký ngay để nhận được thông báo về các bộ phim mới nhất <a href='/register'>Đăng ký</a>
            </Marquee>
          }
        />
        <SlideCarousel />
        <Carousel style={{margin: '20px 0'}} slidesToShow={6} autoplay={true} autoplaySpeed={2000} margin={20}>
          {movies.map((movie) => (
            <div style={{padding: '20px'}}>
              <div key={movie.id} style={{ padding: '0 10px', background: '#ffffff' }}>
                <a href={movie.movie_path}>
                  <img src='https://images2.thanhnien.vn/528068263637045248/2024/3/21/phimquaivatparasytethegrey-1711018941499514734847.png' style={{width: '100%'}}/>
                  <h2>{movie.title}</h2>
                  <p>{movie.description}</p>
                </a>
              </div>
            </div>
          ))}
        </Carousel>
        <div style={{margin: '20px 0', textAlign: 'center'}}>
          <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
        </div>
      </div>
    </>
  );
};

export default HomePage;