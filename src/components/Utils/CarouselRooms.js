import { useState } from 'react';
import style from '../../styles/Utils/Gallery/allImages.module.scss';

import leftArrow from '../../svg_vistas_travel/flechaizq.svg'
import rightArrow from '../../svg_vistas_travel/flechader.svg'
export default ({data})=>
{
    const [index, setIndex] = useState(0)
    
    function handleGallery(i)
    {
        if(i == -1 || i == data.length)
            return

        setIndex(i);            
    }
    return <div className={style.containerCarousel}>
<div className={style.carousel}>

{index>0?<img className={style.svg} src={leftArrow} onClick={handleGallery.bind(this, index-1)}></img>
:<img className={style.svg + " " + style.invisible}></img>}


<img className={style.imgCarousel} src={data[index]}></img>

{index<data.length-1?<img className={style.svg} src={rightArrow} onClick={handleGallery.bind(this, index+1)}></img>
:<img className={style.svg + " " + style.invisible}></img>}

</div>

<div className={style.counterContainer}>
{index>0?<img className={style.svg + " " + style.arrowBottom} src={leftArrow} onClick={handleGallery.bind(this, index-1)}></img>
:<img className={style.svg + " " + style.arrowBottom + " " + style.invisible}></img>}

<h4 className={style.counter}>{(index+1) + "/" + data.length}</h4>

{index<data.length-1?<img className={style.svg + " " + style.arrowBottom} src={rightArrow} onClick={handleGallery.bind(this, index+1)}></img>
:<img className={style.svg + " " + style.arrowBottom + " " + style.invisible}></img>}
</div>
</div>
}