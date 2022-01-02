import style from '../../styles/Alojamineto/finalInfo.module.scss';
import ContainerInfo from '../Utils/ContainerInfo';
import DateComponent from './DateComponent';
import PeopleRoomsComponent from './PeopleRoomsComponent';



export default ({listInfo, room, countRooms, setRooms, countAdults, setAdults, countChilds, setChilds, startDate, endDate, setStartDate, setEndDate}) =>
{

    function handlerAdults(n)
    {
        if(n == -1 && countAdults == 1)
            return;

        setAdults(countAdults + n);
    }
    function handlerChilds(n)
    {

        if(n == -1 && countChilds == 0)
            return;

        setChilds(countChilds + n);
    }
    function handlerRooms(n)
    {
        if(n == -1 && countRooms == 1)
            return;

        setRooms(countRooms + n);
    }

    function handleDate(set, date) {
        let newDateArray = date.split('-').map(e => Number(e));
        console.log(newDateArray[2], newDateArray[1], newDateArray[0])
        set(new Date(newDateArray[0], newDateArray[1] - 1, newDateArray[2]))
      }
    
      function handleStartDate(event) {
        event.preventDefault()
        return handleDate(setStartDate, event.target.value);
      }
    
      function handleEndDate(event) {
        event.preventDefault()
        return handleDate(setEndDate, event.target.value);
      }

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
                <div className={style.details}>
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
                    <div className={style.containerPeopleRooms}>
                    <div>
                        <p>Fecha de Entrada:</p>
                        <DateComponent
                        date={startDate}
                        handleChange={handleStartDate}
                        />
                    </div>
                    <div>
                        <p>Fecha de Salida:</p>
                        <DateComponent
                        date={endDate}
                        handleChange={handleEndDate}
                        />
                    </div>
                    <PeopleRoomsComponent
                    adults={countAdults}
                    childs={countChilds}
                    handleAdults={handlerAdults}
                    handleChilds={handlerChilds}
                    handleRooms={handlerRooms}
                    rooms = {countRooms}
                    />
                    </div>
            </div>
    </>
}