import style from '../../styles/Alojamineto/finalInfo.module.scss';
import ContainerInfo from '../Utils/ContainerInfo';

export default ({listInfo, room}) =>
{
    return <>
            <div className={style.left}>
                {listInfo.map(info => 
                <div className={style.containerInfo}>
                    <ContainerInfo info={info}/>
                </div>
                )}
            </div>
            <div className={style.roomInfo}>
                <div>
                <h6>Detalles de la habitacion</h6>
                {room.details.map(detail =>
                    {
                        return <div className={style.detail}>
                            <div className={style.icon} style={{backgroundImage:`url(${detail.icon})`}}></div>
                            <p className={style.textDetail}>{detail.text}</p>
                        </div>
                    })}
                    </div>

                    <div className={style.containerGood}>
                        {room.good.map(g=>
                            {
                                return <div className={style.good}>
                            <div className={style.icon} style={{backgroundImage:`url(${g.icon})`}}></div>
                            {g.text}
                        </div>
                            })}
                        
                    </div>
            </div>
    </>
}