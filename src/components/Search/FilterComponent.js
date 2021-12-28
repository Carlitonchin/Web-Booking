import style from "../../styles/Search/Filters.module.scss"
import { useState } from "react";

export default ({filters, handleFilters})=>
{

    const [state, setState] = useState(true);
    function changeHandler(category, filter)
    {
        filters[category][filter]["boolean"] = !filters[category][filter]["boolean"];
        setState(!state);
    }

    return <>
{(Object.keys(filters).map(category=>
        {
            return <div key={category} className={style.titleCategory} >
                <h6>
                    {category}
                    </h6>
                {Object.keys(filters[category]).map(filter=>
                    {
                        return <div class="form-check">
                        <input type="checkbox"  class="form-check-input" id={category+filter} 
                         onChange={changeHandler.bind(this, category, filter)}
                         checked={filters[category][filter]["boolean"]}/>
                        <label className={ "form-check-label" + " " + style.filter} for={category+filter}>
                            {filter}
                            <span class="badge rounded-pill" style={{color:"gray"}}>{`(${filters[category][filter]["count"]})`}</span>
                        </label>
                    </div>
                    })}
                   
            </div>
              
        }))}
        <a href="#"
            className={"text-primary " + style.showFiltersMessage}
              onClick={handleFilters}
              >Ocultar filtros</a>
        </>
    
  
}