import style from "../../styles/Search/Filters.module.scss"
import { useState } from "react";

export default ({filters})=>
{

    const [state, setState] = useState(true);
    function changeHandler(category, filter)
    {
        filters[category][filter]["boolean"] = !filters[category][filter]["boolean"];
        setState(!state);
    }
    return <>
{Object.keys(filters).map(category=>
        {
            return <div key={category} className={style.titleCategory} >
                <h6>
                    {category}
                    </h6>
                {Object.keys(filters[category]).map(filter=>
                    {
                        return <div class="filter">
                        <input class="form-check-input" id="a" type="checkbox" 
                         onChange={changeHandler.bind(this, category, filter)}
                         checked={filters[category][filter]["boolean"]}/>
                        <label className={style.filter} for="a">
                            {filter}
                            <span class="badge rounded-pill" style={{color:"gray"}}>{`(${filters[category][filter]["count"]})`}</span>
                        </label>
                    </div>
                    })}
            </div>
             
        })}</>
    
  
}