import ImageGallery from 'react-image-gallery';
import style from '../../styles/Alojamineto/singleHotel.module.scss'
import "react-image-gallery/styles/css/image-gallery.css";
import HeaderHotel from './HeaderHotel';
import BlueButton from '../../components/Utils/BlueButton';
import ContainerImages from '../../components/Utils/ContainerImages';
import GrayButton from '../../components/Utils/GrayButton';
import CommentsComponent from '../../components/Search/CommentsComponent';
import {comments, bestServices, blackServices} from './testing/commentsTest'; // borrar luego
import BestServices from './Services/BestServices';
import BlackServices from './Services/BlackServices';

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
          <div className={style.booking}>
        <GrayButton text="Buscar otro hotel"/>
        </div>
        <div className={style.booking}>
        <BlueButton text="Reservar"/>
        </div>
        </div>
        </div>
        <div className={style.containerGallery}>
          <ContainerImages pictures={pictures}/>
        </div>
        <h2 className={style.h2}>Comentarios</h2>
        <CommentsComponent comments={comments}/>

        <h2 className={style.h2}>Servicios</h2>
        <BestServices services={bestServices}/>
        <div className={style.containerBlackServices}>
          <BlackServices services={blackServices}/>
        </div>
        </div>
}