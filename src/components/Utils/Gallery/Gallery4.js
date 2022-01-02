import gallery4 from '../../../styles/Utils/Gallery/gallery4.module.scss';
import style from '../../../styles/Utils/Gallery/gallery.module.scss';
import Gallery3 from './Gallery3';

export default ({pictures, handleImageExpanded})=>
{
    let picturesText = (pictures.length === 4) ? "foto" : "fotos"
   return <div className={gallery4.container}>
       <Gallery3 pictures={pictures} handleImageExpanded={handleImageExpanded}/>
   <p 
   onClick={handleImageExpanded}
   className={"link-primary " + gallery4.morePictures}>{(pictures.length - 3) + ` ${picturesText} más`}</p>
   
   </div>
}