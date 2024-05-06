import React, { useEffect, useState } from 'react';
import { Alert, Avatar, Badge, Breadcrumb, Carousel, Layout, Menu, Pagination, Space, theme } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import Marquee from 'react-fast-marquee';
import { getMovies } from '../controllers/api/movies.controller';
import SlideCarousel from '../components/Slide';
import { useParams } from 'react-router-dom';
const { Header, Content, Footer } = Layout;
let items;

const DetailMovie = () => {
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
        <Breadcrumb.Item>Phim</Breadcrumb.Item>
        <Breadcrumb.Item>{id}</Breadcrumb.Item>
      </Breadcrumb>
      <div
        style={{
          background: 'none',
          padding: 0,
        }}
      >
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
      </div>
    </>
  );
};

export default DetailMovie;