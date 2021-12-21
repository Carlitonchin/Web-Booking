import gallery4 from '../../../styles/Utils/Gallery/gallery4.module.scss';
import style from '../../../styles/Utils/Gallery/gallery.module.scss';

export default ({pictures})=>
{
    return <div className={gallery4.container}>
        <div className={gallery4.containerDuo}>
            
            <div className={gallery4.img + " " + style.img}
            style={{backgroundImage:`url(${pictures[0]})`}}
            ></div>

            <div className={gallery4.img + " " + style.img}
            style={{backgroundImage:`url(${pictures[1]})`}}
            ></div>
        </div>

        <div className={gallery4.containerDuo}>
            
            <div className={gallery4.img + " " + style.img}
            style={{backgroundImage:`url(${pictures[2]})`}}
            ></div>

            <div className={gallery4.img + " " + style.img}
            style={{backgroundImage:`url(${pictures[3]})`}}
            ></div>
        </div>
    </div>
}