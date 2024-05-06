import { Carousel } from 'antd';
import React, { useEffect, useState } from 'react';

const SlideCarousel = () => {

  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    margin: '0'
  };

  return (<>
    <Carousel autoplay>
      <div>
        <img src='https://cdn.nguyenkimmall.com/images/companies/_1/tin-tuc/review/phim/ju-on-the-grudge-loi-nguyen.jpg' style={{ width: 'auto', maxHeight: '300px', margin: 'auto', display: 'block'}}/>
      </div>
      <div>
        <img src='https://cdn.nguyenkimmall.com/images/detailed/744/phim-ma-kinh-di-hay-nhat-chieu-rap.jpg' style={{ width: 'auto', maxHeight: '300px', margin: 'auto', display: 'block'}}/>
      </div>
      <div>
        <img src='https://gcs.tripi.vn/public-tripi/tripi-feed/img/474112IQW/top-15-phim-ma-kinh-di-thai-lan-hay-nhat_084114378.jpg' style={{ width: 'auto', maxHeight: '300px', margin: 'auto', display: 'block'}}/>
      </div>
      <div>
        <img src='https://simg.zalopay.com.vn/zlp-website/assets/Phim_kinh_di_Tinh_nguoi_duyen_ma_633fd0f9fe.jpg' style={{ width: 'auto', maxHeight: '300px', margin: 'auto', display: 'block'}}/>
      </div>
    </Carousel>
  </>);
}

export default SlideCarousel;