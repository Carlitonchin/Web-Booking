import style from '../../styles/Utils/cardStay.module.scss'

export default ({type, imgUrl}) => 
{
    return <div className={style.container}>
        <div className={style.containerImage} style={{backgroundImage:`url(${imgUrl})`}}>
       
        </div>
        <div className={style.containerText}>
            <h6>{type}</h6>
        </div>
    </div>
}