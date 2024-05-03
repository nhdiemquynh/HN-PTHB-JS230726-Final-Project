import React, { useEffect, useState } from 'react';
import { Alert, Pagination, theme } from 'antd';
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
          padding: 0,
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
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <a href={movie.movie_path}>
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
              </a>
            </div>
          ))}
        </div>
        <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
      </div>
    </>
  );
};

export default HomePage;