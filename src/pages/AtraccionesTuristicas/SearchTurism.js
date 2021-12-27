import style from '../../styles/AtraccionesTuristicas/searchTurism.module.scss';
import SearchBar from '../../components/Search/SearchBar';
import {d} from '../../navegacionxsecciones/tipos-de-alojamineto/testingForHotels'
import FilterComponent from '../../components/Search/FilterComponent';
import ListTurism from './ListTurism';
import { useLocation } from 'react-router';
import {useState} from'react';

let data = 
[
    {
        place:"Acuario Nacional",
        tour:"Banho con los delfines",
        description:"Comparta una experiencia increible con estos animales",
        price:200,
        imgUrl:'/img/cook.jpg'
    },
    {
        place:"Acuario Nacional",
        tour:"Banho con los delfines",
        description:"Comparta una experiencia increible con estos animales",
        price:200,
        imgUrl:'/img/cook.jpg'
    },
    {
        place:"Acuario Nacional",
        tour:"Banho con los delfines",
        description:"Comparta una experiencia increible con estos animales",
        price:200,
        imgUrl:'/img/cook.jpg'
    },
    {
        place:"Acuario Nacional",
        tour:"Banho con los delfines",
        description:"Comparta una experiencia increible con estos animales",
        price:200,
        imgUrl:'/img/cook.jpg'
    },
    {
        place:"Acuario Nacional",
        tour:"Banho con los delfines",
        description:"Comparta una experiencia increible con estos animales",
        price:200,
        imgUrl:'/img/unnamed.jpg'
    },
    {
        place:"Acuario Nacional",
        tour:"Banho con los delfines",
        description:"Comparta una experiencia increible con estos animales",
        price:200,
        imgUrl:'/img/cook.jpg'
    },
    {
        place:"Acuario Nacional",
        tour:"Banho con los delfines",
        description:"Comparta una experiencia increible con estos animales",
        price:200,
        imgUrl:'/img/cook.jpg'
    }
]

export default ()=>
{
    let { search } = useLocation()
    let query = new URLSearchParams(search);
   
    let name = query.get("search");
    const [value, setValue] = useState(name)
    return  <div>
    <div className={style.top}>
                <div className={style.filter}>
                    <h3>{data.length + " cosas para hacer"}</h3>
                    
                </div>
                <div className={style.containerSearchBar}>
                    <SearchBar 
                    value={value}
                    setValue={setValue}
                    placeholder = "Museos, tours, actividades ..."/>
                </div>
            </div>

        <div className={style.filtersAndResults}>
        <div className={style.filters}>
            <h5>Filtrar por</h5>
       
        <FilterComponent filters={d}/>
        </div>

        <div className={style.results}>
            <ListTurism data={data}/>
        </div>

        </div>

            </div>
}