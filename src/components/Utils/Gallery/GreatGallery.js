import style from '../../../styles/Utils/Gallery/greatGallery.module.scss';
import styleGeneral from '../../../styles/Utils/Gallery/gallery.module.scss';
import Gallery3 from './Gallery3';

export default({pictures, handleImageExpanded})=>
{
    let textMorePictures = (pictures.length - 8) > 1? "fotos":"foto";
    console.log(pictures.slice(0,3))
    return <div className={style.container}>
        <div className={style.pictures3}>
        <Gallery3 
        pictures={pictures.slice(0,3)}
        handleImageExpanded={handleImageExpanded}/>
        </div>
        
        <div className={style.pictures5}>
            {pictures.slice(3, 7).map(imag=>
                {
                    return <div 
                    onClick={handleImageExpanded}
                    className={style.single5 + " " + styleGeneral.img}
                    style={{backgroundImage:`url(${imag})`}}></div>
                })}
                <div 
                onClick={handleImageExpanded}
                className={style.single5 + " " + styleGeneral.img}
                    style={{backgroundImage:`url(${pictures[7]})`}}>
                        {pictures.length > 8
                        ?
                        <div 
                        className={style.gray}>
                            <h5>{pictures.length - 8 + " " + textMorePictures + " más"}</h5>
                        </div>
                        :""
                    }
                        
                    </div>
        </div>
    </div>
}