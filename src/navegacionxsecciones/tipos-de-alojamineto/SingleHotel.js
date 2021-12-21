import ImageGallery from 'react-image-gallery';
import style from '../../styles/Alojamineto/singleHotel.module.scss'
import "react-image-gallery/styles/css/image-gallery.css";
import HeaderHotel from './HeaderHotel';
import BlueButton from '../../components/Utils/BlueButton';
import ContainerImages from '../../components/Utils/ContainerImages';

export default () =>
{

      //borrar luego ......................
      let pictures=["../img/playa.jpg","../img/playa.jpg","../img/cancun.jpg","../img/cancun.jpg"]

      let location="Varadero";
      let name="Gran Hotel Playa";
      let stars = 3;
      //...................................................
      return <div className={style.container}>
        <div className={style.containerHeader}>
          <div className={style.nameStarsLocation}>
            <HeaderHotel name={name} location={location} stars={stars}/>
          </div>

        <div className={style.containerBooking}>
        <BlueButton text="reservar"/>
        </div>
        </div>
        <div className={style.containerGallery}>
          <ContainerImages pictures={pictures}/>
        </div>
        
        </div>
}