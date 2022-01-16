
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from '../../../styles/Alojamineto/beach.module.scss'

export default ({data})=>
{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items:1.5
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1.1
        }
      };

      return <Carousel
      removeArrowOnDeviceType={["tablet", "mobile"]}
        responsive={responsive}>

        {data.map(beach=>
            {
                let {name, calification, distance, picture} = beach;
                return <div className={style.container}>
                    <div className={style.picture}
                    style={{backgroundImage:`url(${picture})`}}></div>

                    <div>
                    <div className={style.head}>
                        <p className={style.name}>{name}</p>
                        <p className={style.gray}>{calification}</p>
                    </div>

                    <p className={style.gray}>{distance}</p>
                </div>
                </div>
            })}

        </Carousel>
       
}