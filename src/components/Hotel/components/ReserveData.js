import {useState} from 'react';
import style from '../../../styles/Alojamineto/components/reserveData.module.scss'
import DateComponent from '../../Search/DateComponent';
import BlueButton from '../../Utils/BlueButton';

function getNumbers()
{
    let numbers = []
    for(let i = 0; i <= 30; i++)
    {
        numbers.push(i);
    }

    return numbers;
}

export default ({name})=>
{
    

    return <>
    <h5 className={style.title}>{`¿Cuando quieres alojarte en el ${name}?`}</h5>
    <div className={style.column}>
        <div className={style.date}>
           <p style={{fontWeight:'bold'}}>Fecha de entrada</p>
           <DateComponent/>
        </div>
        <div className={style.date}>
           <p style={{fontWeight:'bold'}}>Fecha de salida</p>
           <DateComponent/>
        </div>

        <div className={style.containerButton}><BlueButton text="Ver Disponibilidad"/></div>
    </div>
    <div className={style.roomPeople}>
        <div className={style.item}>
            <p>Habitaciones</p>
            <select>
                {getNumbers().splice(1).map(i=><option value={i}>{i}</option>)}
            </select>
        </div>

        <div className={style.item}>
            <p>Adultos</p>
            <select>
                {getNumbers().splice(1).map(i=><option value={i}>{i}</option>)}
            </select>
        </div>

        <div className={style.item}>
            <p>Niños</p>
            <select>
                {getNumbers().map(i=><option value={i}>{i}</option>)}
            </select>
        </div>
    </div>
    </>
}