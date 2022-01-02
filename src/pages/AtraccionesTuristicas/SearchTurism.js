import style from '../../styles/AtraccionesTuristicas/searchTurism.module.scss';
import SearchBar from '../../components/Search/SearchBar';
import {d} from '../../components/Hotel/testingForHotels'
import FilterComponent from '../../components/Search/FilterComponent';
import ListTurism from './ListTurism';
import { useLocation } from 'react-router';
import {useState} from'react';
import styleHide from '../../styles/Search/hideFilterTour.module.scss'

let data = 
[
    {
        place:"Acuario Nacional",
        tour:"Banho con los delfines",
        description:"Comparta una experiencia increible con estos animales",
        price:200,
        imgUrl:'/img/cook.jpg'
        ,linkTo:'/turismo/tour'
    },
    {
        place:"Acuario Nacional",
        tour:"Banho con los delfines",
        description:"Comparta una experiencia increible con estos animales",
        price:200,
        imgUrl:'/img/cook.jpg'
        ,linkTo:'/turismo/tour'
    },
    {
        place:"Acuario Nacional",
        tour:"Banho con los delfines",
        description:"Comparta una experiencia increible con estos animales",
        price:200,
        imgUrl:'/img/cook.jpg'
        ,linkTo:'/turismo/tour'
    },
    {
        place:"Acuario Nacional",
        tour:"Banho con los delfines",
        description:"Comparta una experiencia increible con estos animales",
        price:200,
        imgUrl:'/img/cook.jpg'
        ,linkTo:'/turismo/tour'
    },
    {
        place:"Acuario Nacional",
        tour:"Banho con los delfines",
        description:"Comparta una experiencia increible con estos animales",
        price:200,
        imgUrl:'/img/unnamed.jpg'
        ,linkTo:'/turismo/tour'
    },
    {
        place:"Acuario Nacional",
        tour:"Banho con los delfines",
        description:"Comparta una experiencia increible con estos animales",
        price:200,
        imgUrl:'/img/cook.jpg'
        ,linkTo:'/turismo/tour'
    },
    {
        place:"Acuario Nacional",
        tour:"Banho con los delfines",
        description:"Comparta una experiencia increible con estos animales",
        price:200,
        imgUrl:'/img/cook.jpg'
        ,linkTo:'/turismo/tour'
    }
]

export default ()=>
{
    let { search } = useLocation()
    let query = new URLSearchParams(search);
    const [showFilters, setShowFilters] = useState(false)

    function handleFilters()
    {
        setShowFilters(!showFilters);
    }
    let name = query.get("search");
    const [value, setValue] = useState(name)
    return  <div>
    <div className={style.top}>
                <div className={style.filter}>
                    <h3 className={style.thingsToDo}>{data.length + " cosas para hacer"}</h3>
                    <a className={"text-primary " + style.showFiltersMessage}
            onClick={handleFilters}
            className={style.showFiltersMessage}>{(!showFilters?"Mostrar Filtros":"Ocultar Filtros")}</a>
                </div>
                <div className={style.containerSearchBar}>
                    <SearchBar 
                    value={value}
                    setValue={setValue}
                    placeholder = "Museos, tours, actividades ..."/>
                </div>
            </div>
            <div>
            
        <div className={style.filtersAndResults}>
        
        <div className={style.filters + " " +(!showFilters?style.hide:"")}>
            
            <h5>Filtrar por</h5>
       
        <FilterComponent
        filters={d}
        handleFilters={handleFilters}
        styleHide={styleHide}

        />
        </div>

        <div className={style.results}>
            <ListTurism
            linkTo="/turismo/tour"
            data={data}/>
        </div>

        </div>
        </div>
            </div>
}