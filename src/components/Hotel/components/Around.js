import style from '../../../styles/Alojamineto/components/around.module.scss'
import GoodNew from '../../Utils/GoodNew'

let data=
[
    [
        {
            icon:'/assets/caminar.svg',
            name:'Qué hay cerca?',
            data:[
                {name:'Palacio de Diocleciano', distance:'0.1 km'},
                {name:'Palacio de Diocleciano', distance:'0.1 km'},
                {name:'Palacio de Diocleciano', distance:'0.1 km'},
                {name:'Palacio de Diocleciano', distance:'0.1 km'},
                {name:'Palacio de Diocleciano', distance:'0.1 km'},
                {name:'Palacio de Diocleciano', distance:'0.1 km'},
                {name:'Palacio de Diocleciano', distance:'0.1 km'},
                {name:'Palacio de Diocleciano', distance:'0.1 km'},
                {name:'Palacio de Diocleciano', distance:'0.1 km'},
            ]
        },

    ],

    [
        {
            icon:'/assets/tenedores.svg',
            name:'Restaurantes y cafeterias',
            data:[
                {name:'Cafeteria Bar', distance:'0.1 km'},
                {name:'Restaurante - Apetit', distance:'0.1 km'},
               
            ]
        },
        {
            icon:'/assets/rueda.svg',
            name:'Atracciones turísticas destacadas',
            data:[
                {name:'Palacio de Diocleciano', distance:'0.1 km'},
                {name:'Palacio de Diocleciano', distance:'0.1 km'},
                {name:'Palacio de Diocleciano', distance:'0.1 km'},
                {name:'Palacio de Diocleciano', distance:'0.1 km'},
                {name:'Palacio de Diocleciano', distance:'0.1 km'},
                {name:'Palacio de Diocleciano', distance:'0.1 km'},
                {name:'Palacio de Diocleciano', distance:'0.1 km'},
                {name:'Palacio de Diocleciano', distance:'0.1 km'},
                {name:'Palacio de Diocleciano', distance:'0.1 km'},
            ]
        }
    ],

    [
        {
            icon:'/assets/montain.svg',
            name:'Entorno Natural',
            data:[
                {name:'Mar/Ocenao', distance:'0.3 km'},
                
            ]
        },
        {
            icon:'/assets/sea_2.svg',
            name:'Playas en la zona',
            data:[
                {name:'Palacio de Diocleciano', distance:'0.1 km'},
                {name:'Palacio de Diocleciano', distance:'0.1 km'},
                {name:'Palacio de Diocleciano', distance:'0.1 km'},
                {name:'Palacio de Diocleciano', distance:'0.1 km'},
                {name:'Palacio de Diocleciano', distance:'0.1 km'},
                {name:'Palacio de Diocleciano', distance:'0.1 km'},
                {name:'Palacio de Diocleciano', distance:'0.1 km'},
                {name:'Palacio de Diocleciano', distance:'0.1 km'},
                {name:'Palacio de Diocleciano', distance:'0.1 km'},
            ]
        },
        {
            icon:'/assets/avion.svg',
            name:'Aeropuertos mas cercano',
            data:[
                {name:'Palacio de Diocleciano', distance:'0.1 km'},
                
            ]
        }
    ]
]

export default ()=>
{
    return <>
    <div className={style.head}>
        <p className={style.presentation}>A los clientes les encantó pasar por el barrio</p>
        <a href="#" className={style.link}>Ubicación excelente - Ver Mapa</a>
    </div>

    <GoodNew
    title="Está en el centro histórico"
    info={`El centro histórico de Split presume de tener el palacio romano mejor conservador del mundo, construido hace 1.600 años por el emperador Diocleciano. El
    antiguo palacio hoy alberga tiendas, restaurantes e incluso casas particulares.`}
    white={true}
    icon="/assets/tower.svg"
    />

    <div className={style.containerList}>
        {data.map(list=>
            {
                return <div className={style.column}>
                    {list.map(element=>
                        {
                            let {name, icon} = element;
                            let dataList = element.data
                            return <><div className={style.headerList}>
                                <div
                                style={{backgroundImage:`url(${icon})`}}
                                className={style.icon}
                                ></div>
                                <p className={style.titleList}>{name}</p>
                                </div>
                                <div className={style.list}>
                                    {dataList.map(item=>
                                        <div className={style.item}>
                                            <p className={style.itemText}>{item.name}</p>
                                            <p className={style.itemDistance}>{item.distance}</p>
                                        </div>
                                            
                                        )}
                                
                            </div></>
                        })}
                </div>
            })}
    </div>
    </>
}