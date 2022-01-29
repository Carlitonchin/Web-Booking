import { useState } from 'react'
import style from '../../../styles/Alojamineto/components/rooms.module.scss'
import capacityIcon from '../../../svg_vistas_travel/capacidad.svg'
import BlueButton from '../../Utils/BlueButton'
import createArrayOfLength from '../../Utils/Functions/createArrayOfLength'
import SingleRoom from './SingleRoom'


let data = [
    {
        capacity: 1,
        title:"Habitacion Individual",
        bet:[{text:'1 cama individual', icon:'/assets/cama_sen.svg'}]
    },
    {
        capacity: 2,
        title:"Habitacion Doble - 2 camas",
        bet:[{text:'2 camas individuales', icon:'/assets/dos_camas.svg'}]
    },
    {
        capacity: 2,
        title:"Habitacion Doble",
        bet:[{text:'1 cama doble', icon:'/assets/cama_doble.svg'}]
    },
    {
        capacity: 2,
        title:"Suite Executive",
        bet:[{text:'1 cama doble grande', icon:'/assets/cama_doble.svg'}]
    },
    {
        capacity: 4,
        title:"Habitacion Doble - 2 camas",
        bet:[{text:'2 camas individuales', icon:'/assets/dos_camas.svg'}]
    },
    {
        capacity: 4,
        title:"Suite de 2 dormitorios",
        bet:[
            {place:"Dormitorio",text:'1 cama doble grande', icon:'/assets/cama_doble.svg'},
            {place:"Dormitorio", text:"1 cama doble", icon:"/assets/cama_doble.svg"},
            {place:"Sala de estar", text:"1 sofa cama", icon:"/assets/sofa.svg"}
        ]
    }
]

function Rooms({roomExpanded, handleExpanded})
{
    return <div className={style.container}>
    <div className={style.row + " " + style.header}>
        <div className={style.capacity}>
            <div className={style.containerTextHeader}>
            <h6 style={{margin:0}}>Capacidad</h6>
            </div>
            </div>
        <div className={style.type}>
        <div className={style.containerTextHeader}>
            <h6 style={{margin:0}}>Tipo de habitaciones</h6>
            </div>
            </div>
    </div>
    {data.map(item=>
        {
            let {capacity, title, bet} = item;
            return <div className={style.row}>
                <div className={style.capacity + " " + style.containerIconsCap}>
                    {capacity<4?
                    createArrayOfLength(capacity).map(_=>
                        <img src={capacityIcon} className={style.iconCap}></img>
                        )
                    :<div className={style.containerCount}> 
                        <img src={capacityIcon} className={style.iconCap}></img>
                        <h6 className={style.count}>{"X" + capacity}</h6>
                    </div>
                    }
                </div>

                <div className={style.type}>
                    <div className={style.betInfo}>
                    <h5 
                    onClick={handleExpanded.bind(this, item)}
                    className={style.title}
                    >{title}</h5>
                    {bet.map(b=>
                        {
                            let {place, text, icon} = b
                            return <div className={style.betContainer}>
                                <div className={style.singleBet}>
                                    <p>{place?<span className={style.place}>{place + ": "} </span>:""}{text} <img className={style.betIcon} src={icon}></img></p> 
                                    
                                    </div>
                            </div>
                        })}

                        </div>
                </div>

                <div className={style.buttonContainer}>
                    <BlueButton 
                    handleClick={handleExpanded.bind(this, item)}
                    text="Mostrar Precios"/>
                </div>
            </div>
        })}
</div>
}

export default ({roomExpanded, handleExpanded})=>
{
    return !roomExpanded.expanded?
    <Rooms
    roomExpanded={roomExpanded}
    handleExpanded={handleExpanded}
    />:
    <SingleRoom 
    room = {roomExpanded.room}
    handleExpanded={handleExpanded}/>
    
}