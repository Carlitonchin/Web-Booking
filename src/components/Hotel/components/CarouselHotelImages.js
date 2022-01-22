import style from '../../../styles/Alojamineto/components/carouselHotelImages.module.scss'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default ({pictures})=>
{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return <div className={style.containerCarousel}>
        <Carousel responsive={responsive}>
        {pictures.map(img=>
        {
            console.log(img)
            return <div 
            style={{backgroundImage:`url(${img})`}}
            className={style.containerImg}>
            </div>
        }
            
            )}
        
    </Carousel>
    </div>
}