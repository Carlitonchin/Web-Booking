import style from '../../styles/Utils/Gallery/allImages.module.scss';
import { useState, useEffect } from 'react';
import createArrayOfLength from './Functions/createArrayOfLength'
import BlueButton from './BlueButton';
import leftArrow from '../../svg_vistas_travel/flechaizq.svg'
import rightArrow from '../../svg_vistas_travel/flechader.svg'
import AllComments from './AllComments';

let hotel = "Hotel Miramar"
let stars = 3;
let data = ["../img/playa.jpg", "../img/playa.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg", "../img/cancun.jpg"]


export default ({pictures, closeHandler})=>
{
    const [clickedImage, setImageClicked] = useState(-1);

    function handleGallery(index)
    {
        setImageClicked(index);
    }

    useEffect(() =>{
        const handleResize = () => {
        
           if(window.innerWidth <= 700)
                closeHandler();
        };
        
        window.addEventListener("resize",handleResize);
        window.addEventListener("onload", handleResize)
          
        return () => {
            window.removeEventListener("onload", handleResize)
            window.removeEventListener("resize", handleResize)}
      },[])

    return <div className={style.container}>
    <div className={style.top}>
        <div className={style.close} onClick={handleGallery.bind(this, -1)}>{clickedImage!=-1?
       <>
            <i class="bi bi-arrow-left-short"></i>
            <p className={style.textClose}>Galeria</p>
        </>
        :""}</div>

        <div className={style.hotel}>

        <p className={style.nameHotel}>{hotel}</p>
        <div className={style.stars}>
        {createArrayOfLength(stars).map(_=>
            {
                return <><i className={"bi bi-star-fill"}></i></>;
            })}
       
        </div>
        <div className={style.containerButton}>
        <BlueButton text="Reservar"/>
        </div>
        </div>

<div className={style.close} onClick={closeHandler}>
    <p className={style.textClose}>Cerrar</p>
    <i class="bi bi-x"></i>
</div>
    </div>
    <div className={style.commentsAndGallery}>

<div className={style.containerGallery}>
    {clickedImage == -1?
<div className={style.gallery}>
    {createArrayOfLength(data.length).map(index=>
    <article>
         <figure>
             <div className={style.containerImg} onClick={handleGallery.bind(this, index-1)}>
         <img className={style.img} src={data[index-1]} />
         </div>
     </figure>
     </article>
        )}
</div>
:
<div className={style.containerCarousel}>
<div className={style.carousel}>

{clickedImage>0?<img className={style.svg} src={leftArrow} onClick={handleGallery.bind(this, clickedImage-1)}></img>
:<img className={style.svg + " " + style.invisible}></img>}


<img className={style.imgCarousel} src={data[clickedImage]}></img>

{clickedImage<data.length-1?<img className={style.svg} src={rightArrow} onClick={handleGallery.bind(this, clickedImage+1)}></img>
:<img className={style.svg + " " + style.invisible}></img>}

</div>
<h4 className={style.counter}>{(clickedImage+1) + "/" + data.length}</h4>
</div>
}
</div>



    <div className={style.containerComments}>
        <AllComments/>
    </div>
    </div>
    </div>
}