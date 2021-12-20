import ImageGallery from 'react-image-gallery';
import style from '../../styles/Alojamineto/singleHotel.module.scss'
import "react-image-gallery/styles/css/image-gallery.css";

export default ({pictures}) =>
{
    const images = [
        {
          original: './favicon.ico',
          thumbnail: './favicon.ico',
        },
        {
          original: './favicon.ico',
          thumbnail: './favicon.ico'
        },
        {
          original: './favicon.ico',
          thumbnail: './favicon.ico'
        }
      ]
  
      return (
          <div className={style.container}>
        <ImageGallery items={images} />
        </div>
      );
}