import React, {useState, useEffect} from 'react'
import { apiGetBanner } from '../../../API/movieAPI'

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

function Banner() {
  const [banners, setBanner] = useState([])
  const [error, setError] = useState([])
 

  const getBanner = async () => {
    try {
      const data = await apiGetBanner()
      setBanner(data.content)

    } catch (error) {
      setError(error.response?.data?.content);
    }
  }

  useEffect(() => {
    getBanner();
  }, [])

  if(error) return null;

  return (
    <div>
     {banners.map((item, pos) => {
      return  <img key={pos} height={300} src={item.hinhAnh} alt={item.maBanner} />
     })}
    

    </div>
  )
}

export default Banner;