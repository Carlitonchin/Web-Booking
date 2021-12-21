import gallery3 from '../../../styles/Utils/Gallery/gallery3.module.scss';
import style from '../../../styles/Utils/Gallery/gallery.module.scss';

export default ({pictures}) =>
{
    return <div className={gallery3.container}>
        <div className={gallery3.containerLeft}>
            <div className={gallery3.imgLeft + " " + style.img}
            style={{backgroundImage:`url(${pictures[0]})`}}>
            </div>
            <div className={gallery3.imgLeft + " " + style.img}
            style={{backgroundImage:`url(${pictures[1]})`}}>
            </div>
        </div>
        <div
        className={gallery3.imgRight + " " + style.img}
        style={{backgroundImage:`url(${pictures[2]})`}}
        >
        </div>
    </div>
}