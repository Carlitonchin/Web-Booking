import style from '../../../styles/Utils/Gallery/allImages.module.scss';
import {useState} from 'react'

export default ({pictures, closeHandler})=>
{
    

    return <div className={style.container}>
        
        {pictures.map(img=>
            {
                return <img src={img} className={style.img}/>
            })}

            <div 
            onClick={closeHandler}
            className={style.close}><h1>X</h1></div>
    </div>
}