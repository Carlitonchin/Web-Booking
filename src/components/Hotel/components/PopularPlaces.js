import InfoBlue from './InfoBlue'
import style from '../../../styles/Alojamineto/components/popularPlaces.module.scss'

let data = 
[
    {
        category:'Playas',
        places:[{name : 'Varadero', url:"#"},{name : 'Varadero', url:"#"},{name : 'Varadero', url:"#"},{name : 'Varadero', url:"#"},{name: 'Varadero', url:"#"},{name : 'Varadero', url:"#"}]
    },
    {
        category:'Galerías',
        places:[{name:'Galeroa de Mestrovic', url:"#"}]
    },
    {
        category:'Lugares de interés',
        places:[{name : 'Varadero', url:"#"},{name : 'Varadero', url:"#"},{name : 'Varadero', url:"#"}]
    },
    {
        category:'Museos',
        places:[{name : 'Varadero', url:"#"},{name : 'Varadero', url:"#"},{name : 'Varadero', url:"#"}]
    },

    {
        category:'Estadios',
        places:[{name : 'Varadero', url:"#"},{name : 'Varadero', url:"#"},{name: 'Varadero', url:"#"}]
    },

    {
        category:'Instituciones',
        places:[{name : 'Varadero', url:"#"}]
    },

    {
        category:'Monumentos o lugares de interés',
        places:[{name : 'Varadero', url:"#"},{name : 'Varadero', url:"#"},{name : 'Varadero', url:"#"}]
    },

    {
        category:'Zonas comerciales',
        places:[{name : 'Varadero', url:"#"},{name : 'Varadero', url:"#"},{name : 'Varadero', url:"#"}]
    },

    {
        category:'Las ciudades más populares',
        places:[{name : 'Varadero', url:"#"},{name : 'Varadero', url:"#"},{name : 'Varadero', url:"#"}]
    }
]

function groupMax(max, data)
{
    let result = {}
    let comulative = 0;
    let index = 0;

    for(let i = 0; i < data.length; i++)
    {
        if(!result[index])
            result[index] = []

        result[index].push(data[i])
        comulative += data[i].places.length;

        if(comulative >= 10)
        {
            index++;
            comulative = 0;
        }
    }

    return result;
}

export default ()=>
{
    let max = 10;
    let result = groupMax(max, data);
    return <>
    <InfoBlue
    info="Haz clic aquí para ver más alojamientos cerca de los lugares de interés en Split"
    title="Lo mejor de Split"/>

    <div className={style.container}>
        {Object.keys(result).map(index=>
            <div className={style.column}>
                {result[index].map(item=>
                    {
                        let {category, places} = item;
                        return <div className={style.item}>
                            <p className={style.category}>{category}</p>
                            <div className={style.places}>
                                {places.map(place=>
                                <a href={place.url} 
                                className={style.singlePlace}>{place.name}</a>)}
                            </div>
                        </div>;
                    })}
                    </div>
            )}
    </div>
    </>
}