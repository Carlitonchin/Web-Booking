import React from 'react'
import LeftArrow from "../../assets/left-arrow.svg"                          
import RightArrow from "../../assets/right-arrow.svg"
import Slider from "react-slick"; 
import classes from "../../styles/Alojamineto/Card.module.scss"
import { Link } from "react-router-dom"

const Card = ({ title, data}) => {

    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img src={LeftArrow} alt="prevArrow" {...props} />
    );
    
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img src={RightArrow} alt="nextArrow" {...props} />
    );

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      
    };

    return (

      <div className={classes.card__container}>
        <h1>{title}</h1>
        <Slider {...settings} className={classes.card__container_inner}>
          {data.map((item, index) => {
            return (
              <Link to={{pathname:"/" + item.link}}>
              <div className={classes.card__container_inner_card} key={index}>
                <img src={item.url} alt="hero_img" />

                <div className={classes.card__container_inner_card_date_time}>
                   
                </div>

                <h2 style={{fontWeight: 'bold'}}>{item.descripcion}</h2>
                <h1>
                  {item.cantidad}
                </h1>
              </div>
              </Link>
            );
          })}
        </Slider>
      </div>

    );
}

export default Card
