import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardStay from "./CardStay";
import style from '../../styles/Utils/carouselImage.module.scss'

export default ({list})=>
{
    
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 7
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 600 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 600, min: 381 },
          items: 2
        },
        smallMobile:
        {
          breakpoint: { max: 380, min: 0 },
          items: 1
        }
      };

      return <Carousel responsive={responsive}>
          {list.map(element=>
            {
                let {type, imgUrl, toDo} = element;
                return <CardStay type={type}
                                 imgUrl={imgUrl}  
                                 toDo={toDo}
                                 />
            })}                 
      </Carousel>
      
}